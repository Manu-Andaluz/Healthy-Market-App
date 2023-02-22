import React from "react";
import { productsFetch } from "../actions/productActions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
//import { Link } from "react-router-dom";

const Cards = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.allProducts);

  useEffect(() => {
    dispatch(productsFetch());
  }, []);

  console.log(products);

  return (
    <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 px-5 mt-3">
      {products &&
        products.allProducts.map((product) => {
          return (
            <a href="/details" className="group">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={product.image.url}
                  alt={product.name}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm font-bree text-gray-700">
                {product.name}
              </h3>
              <p className="mt-1 text-lg font-continuo text-gray-900">
                ${product.price}
              </p>
            </a>
          );
        })}
    </div>
  );
};

export default Cards;
