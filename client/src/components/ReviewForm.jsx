import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findProductById, reviewProducts } from "../actions/productActions";
import ReactStars from "react-rating-stars-component";
import { toast } from "react-toastify";

export default function ReviewForm({ productId }) {
  const dispatch = useDispatch();
  const usuario = useSelector((state) => state.user);

  const ratingChanged = (newRating) => {
    setInput({ ...input, rating: newRating });
  };

  const [input, setInput] = useState({
    comment: "",
    rating: 0,
    name: usuario && usuario?.name,
  });

  function handleChange(e) {
    setInput({
      ...input,
      name: usuario.name,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!usuario.name) {
      return toast.warning("Debes iniciar sesión para comentar", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    }
    if (input.comment === "" && input.rating === 0) {
      return toast.warning("Debe llenar este campo", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    }
    await dispatch(reviewProducts({ reviews: input, productId: productId }));
    toast.success("¡Tu calificación ha sido enviada!", {
      position: toast.POSITION.BOTTOM_CENTER,
    });
    window.location.reload();
  };

  return (
    <div className="">
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
              className="border border-gray-200 rounded-lg mb-8 mx-8 w-1/3 h-28	pl-3 pt-2 pr-3 pb-2 whitespace-pre-line bg-gray-200 text-gray-700 focus:bg-white"
              placeholder="Agregue el comentario..."
              type="text"
              value={input.comment}
              name="comment"
              onChange={handleChange}
            />
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
