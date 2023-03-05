import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productsFetch } from "../actions/productActions";
import { useParams, Link } from "react-router-dom";
import ReviewForm from "./ReviewForm";
import { FaStar } from "react-icons/fa";

const Reviews = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.allProducts);
  const { productId } = useParams();

  useEffect(() => {
    dispatch(productsFetch());
  }, [dispatch, allProducts.allProducts]);

  const product = allProducts.allProducts.find((p) => p._id === productId);

  return (
    <div className="reviews">
<Link
  to="/products"
  className="bg-green2 hover:bg-beige text-white font-bold py-1 px-3 mx-6 my-6 rounded-full inline-flex items-center"
>
  
  Volver
</Link>

      <div>
      </div>
      <div className="flex items-center mb-4 space-x-4 mx-8 my-8 px-8">
        <div className="space-y-1 font-medium dark:text-white">
          <h2 className= "text-lg font-medium border-b-2"> Reseña de: {product.name}</h2>
        </div>
      </div>
      {product && product.reviews.length > 0 ? (
        <>
          {product.reviews.map((review, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg mb-8 mx-8"
            >
              <h3 className="text-sm font-bold py-3 px-4 bg-green2">
                {" "}
                {review.name ? review.name : "Usuario Anónimo"}
              </h3>
              <h3 className="text-sm py-3 px-4">
                Puntuación: {review.rating} <FaStar className="inline-block mr-1 text-yellow-500" />
              </h3>
              <p className="text-sm py-3 px-4"> "{review.comment}"</p>
            </div>
          ))}
        </>
      ) : (
        <p className="text-sm mx-8">No hay comentarios para este producto</p>
      )}
              <ReviewForm element={productId} />

    </div>
  );
};

export default Reviews;
