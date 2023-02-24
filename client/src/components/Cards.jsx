import React from "react";
import { productsFetch } from "../actions/productActions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { addToCart } from "../slices/cartSlice";

const Cards = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.allProducts);

  useEffect(() => {
    dispatch(productsFetch());
  }, []);

  const handleOnClick = (item) => {
    dispatch(addToCart(item));
    navigate("/cart");
    console.log("handleSubmit");
  };

  return (
    <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 px-5 mt-3">
      {products &&
        products.allProducts.map((product) => {
          return (
            <div className="grid place-content-center text-center">
              <Link to={`/detail/${product._id}`}>
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                  <img
                    src={product.image.url}
                    alt={product.name}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
              </Link>

              <h3 className="mt-4 text-sm font-bree text-gray-700">
                {product.name}
              </h3>
              <p className="mt-4 text-lg font-bold text-gray-900">
                ${product.price}
              </p>
              <button
                onClick={() => handleOnClick(product)}
                class="bg-yellow-300 opacity-75 hover:opacity-100 text-yellow-900 hover:text-gray-900 rounded-full mt-4 py-2 font-semibold"
              >
                <i class="mdi mdi-cart -ml-2 mr-2"></i> AGREGAR AL CARRITO{" "}
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default Cards;
