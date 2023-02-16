import React from 'react';

function Card({ status, name, price, image, details }) {
  return (
    <div className="card">
      <div className="card__image-container">
      <div className="card__info">
        <h2 className="card__name">{name}</h2>
      <p className={`card__status card__status--${status.toLowerCase()}`}>{status}</p>
        <img src={image} alt={name} className="card__image" />
      </div>
      
        <p className="card__price">Precio: ${price.toFixed(2)}</p>
       
        <p className="card__details">Descripción: {details}</p>
      </div>
    </div>
  );
}

export default Card;