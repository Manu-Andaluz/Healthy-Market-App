import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { productsFetch } from "../actions/productActions";
import { useParams, Link } from "react-router-dom";

const Reviews = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector(state => state.allProducts);
  const { productId } = useParams();

  useEffect(() => {
    dispatch(productsFetch());
  }, [dispatch]);

  const product = allProducts.allProducts.find((p) => p._id === productId);

  return (
    <div className="reviews">
      <div className="flex items-center mb-4 space-x-4 mx-8 my-8 px-8">
        <div className="space-y-1 font-medium dark:text-white">
          <h2 className="text-lg font-bree border-b-2"> Reseñas:</h2>
        </div>
      </div>
      {product && product.reviews.length > 0 ? (
        <>
          {product.reviews.map((review, index) => (
            <div key={index} className="border border-gray-200 rounded-lg mb-8 mx-8">
               <h3 className="text-sm font-bold py-3 px-4 bg-green2"> {review.user ? review.user : 'Usuario Anónimo'}</h3>
              <h3 className="text-sm py-3 px-4">Puntuación: {review.rating} estrellas</h3>
              <p className="text-sm py-3 px-4"> "{review.comment}"</p>
            </div>
          ))}
        </>
      ) : (
        <p className="text-sm mx-8">No hay comentarios para este producto</p>
      )}
    </div>
  );
};

export default Reviews;
