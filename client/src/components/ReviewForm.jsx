import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import NavBar from "./NavBar";
import ReactStars from "react-rating-stars-component";
import { render } from "react-dom";
import { Link } from "react-router-dom";





export default function ReviewForm(){

const dispatch = useDispatch()
// const [rating, setRating] = useState(0);
// const handleRating = (rate) => {
//     setRating(rate)
    
//   }
const ratingChanged = (newRating) => {
    console.log(newRating);
  };


const [input, setInput] = useState({
   review: "",
   rate:""
})
const [errors, setErrors] = useState({});




function validate(input){
    let errors = {}
    if(!input.rate){
        errors.rate = "Debes puntuar este producto"
    }else if(!input.review){
        errors.review = "Debe completar este campo"
    }else if (input.review.length > 50){
        errors.review = "No debe superar los 50 caracteres"
    }else if(input.review.length < 10){
        errors.review = "Debe superar los 10 caracteres "

    }

    return errors
}



    function handleChange(e){
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
        setErrors(
          validate({
            ...input,
            [e.target.name]: e.target.value,
          })
        );

    }

    function handleOnClick(e){
        e.preventDefault();
    }

    function handleSubmit(e){
        e.preventDefault()
        if (input.review === "") return alert('Debe llenar este campo');
        dispatch((input));
        alert("Tu comentario ha sido enviado!")
        setInput({
            review: "",
           
           
        })
       
    }


    return(
        
       <div className="">
        
        <NavBar/>
        <Link to="/home">Volver</Link>
            <div className="grid text-center h-screen content-center gap-5 items-center mt-5 pb-11">
                <h3 className="text-3xl font-bold">Califique nuestro producto</h3>
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">Puntuación</label>
                <div className='py-2 ml-96 p-52'> 
                    <ReactStars 
                    count={5} 
                    onChange={ratingChanged} 
                    size={24} 
                    activeColor="#ffd700"
                    />
               </div>
               <div>
               <button className="bg-green1 hover:bg-hoverGreen1 text-white font-bold py-2 px-4 rounded">Enviar puntuación</button>
               </div>
            


            <form className="w-full" onSubmit={handleSubmit}>
                <div className="justify-center items-center bg-blue">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Comentario*</label>
                        <input className= " w-1/3 h-56 bg-gray-200 text-gray-700 border rounded align-text-top focus:bg-white" 
                            placeholder="Agregue el comentario..." 
                            type="text" 
                            value={input.review} 
                            name="review" 
                            onChange={handleChange}/>
                            {errors.review && <p className="e">{errors.review}</p>}
                </div>
                <div className="pt-3">
                <button className="bg-green1 hover:bg-hoverGreen1 text-white font-bold py-2 px-4 rounded ">Enviar comentario</button>
                </div>


             </form>
             
            </div>
            
       </div>


    )



}