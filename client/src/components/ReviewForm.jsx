import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reviewProducts } from "../actions/productActions";
import NavBar from "./NavBar";
import ReactStars from "react-rating-stars-component";
import { render } from "react-dom";
import { Link } from "react-router-dom";

export default function ReviewForm(productId) {
  const dispatch = useDispatch();
  const usuario = useSelector((state) => state.user);

  // useEffect(() => {
  //     dispatch(reviewProducts())
  // }, [dispatch])

  // const [rating, setRating] = useState(0);
  // const handleRating = (rate) => {
  //     setRating(rate)

  //   }

  const ratingChanged = (newRating) => {
    setInput({ ...input, rating: newRating });
  };

  const [input, setInput] = useState({
    comment: "",
    rating: 0,
    name: "",
  });

  const [errors, setErrors] = useState({});

  function validate(input) {
    let errors = {};
    if(input.name){
        errors.name = "Debes iniciar sesión para comentar"
    } else if (!input.rating) {
      errors.rating = "Debes puntuar este producto";
    } else if (!input.comment) {
      errors.comment = "Debe completar este campo";
    } else if (input.comment.length > 50) {
      errors.comment = "No debe superar los 50 caracteres";
    } else if (input.comment.length < 10) {
      errors.comment = "Debe superar los 10 caracteres ";
    }

    return errors;
  }
  function handleChange(e) {
    setInput({
      ...input,
      name: usuario.name,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  function handleOnClick(e) {
    e.preventDefault();
  }

  function handleSubmit(e) {
    e.preventDefault();
    if(!input.name) return alert("Debes iniciar sesión para comentar")
    if (input.comment === "" && input.rating === 0)
      return alert("Debe llenar este campo");
    dispatch(reviewProducts({ reviews: input, productId: productId.element }));
    alert("¡Tu calificación ha sido enviada!");
  }

  return (
    <div className="">
      {/* <NavBar/> */}
      
      <div className="grid text-center h-1/2 content-center gap-5 items-center mt-5 pb-11">
        <h3 className="text-3xl font-bold">Califique nuestro producto</h3>
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
          Puntuación
        </label>
        <div className="py-2 ml-96 p-56">
          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            activeColor="#ffd700"
          />
        </div>
        <div>
          {/* <button className="bg-green1 hover:bg-hoverGreen1 text-white font-bold py-2 px-4 rounded">Enviar puntuación</button> */}
        </div>

        <form className="w-full">
          <div className="justify-center items-center bg-blue">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Comentario*
            </label>
            <textarea
              className="border border-gray-200 rounded-lg mb-8 mx-8 w-1/3 h-28	 whitespace-pre-line bg-gray-200 text-gray-700 focus:bg-white"
              placeholder="Agregue el comentario..."
              type="text"
              value={input.comment}
              name="comment"
              onChange={handleChange}
            />
            {errors.comment && <p className="e">{errors.comment}</p>}
          </div>
          <div className="pt-3">
            <button
              className="bg-green1 hover:bg-hoverGreen1 text-white font-bold py-2 px-4 rounded "
              onClick={handleSubmit}
            >
              Enviar comentario
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
