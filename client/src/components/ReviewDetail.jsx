import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const ReviewDetail = () => {
  const { productId, reviewIndex } = useParams();
  const allProducts = useSelector((state) => state.allProducts);
  const product = allProducts.allProducts.find((p) => p._id === productId);
  const review = product.reviews[reviewIndex];

  return (
    <div>
      <h2>Detalle de la revisión</h2>
      <h3>Puntuación: {review.rating}</h3>
      <p>Comentario: {review.comment}</p>
    </div>
  );
};

export default ReviewDetail;
