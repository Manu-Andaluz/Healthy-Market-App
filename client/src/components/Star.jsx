
import React from "react";
import { FaStar } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

const Star = ({ stars, reviews }) => {
  const ratingStar = Array.from({ length: 5 }, (_, index) => index + 1);

  return (
    <div>
      <div className="flex items-center">
        {ratingStar.map((star, index) => (
          <span key={index} className="text-yellow-500">
            {stars >= star ? (
              <FaStar className="inline-block mr-1 text-yellow-500" />
            ) : (
              <AiOutlineStar className="inline-block mr-1 text-yellow-500" />
            )}
          </span>
        ))}
         <p className="text-gray-600 ml-2">(Ver reseñas)</p> 
      </div>
    </div>
  );
};

export default Star;





