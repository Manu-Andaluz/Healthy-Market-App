import React from "react";
import { productsFetch } from "../actions/productActions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, getTotals } from "../slices/cartSlice";
import { toast, ToastContainer } from "react-toastify";

const Cards = (currentProduct) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(productsFetch());
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleOnClick = (item) => {
    dispatch(addToCart(item));
    toast.success("Producto Añadido al Carrito", {
      position: toast.POSITION.BOTTOM_CENTER,
    });
  };

  return (
    <div className="text-base grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 px-5 mt-3">
      {currentProduct &&
        currentProduct.currentProduct.map((product) => {
          return (
            <div
              className="text-base flex flex-col justify-end content-center items-center space-x-2 space-y-2"
              key={product._id}
            >
              <Link to={`/detail/${product._id}`}>
                <div className="text-base aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                  <img
                    src={product.image.url}
                    alt={product.name}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
              </Link>

              <h3 className="text-base font-bree text-gray-700">
                {product.name}
              </h3>
              <p className="text-sm font-bree text-gray-700">
                {product.category}
              </p>
              {product.discountPrice ? (
                <div className="flex gap-5">
                  <p className="text-lg font-bold text-gray-900">
                    <del>${product.price}</del>
                  </p>
                  <p className="text-lg font-bold text-green-500">
                    ${product.discountPrice}
                  </p>
                </div>
              ) : (
                <p className="text-lg font-bold text-gray-900">
                  ${product.price}
                </p>
              )}
              <button
                onClick={() => handleOnClick(product)}
                className=" bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded w-fit mx-auto"
              >
                <i className="mdi mdi-cart -ml-2 mr-2"></i> AGREGAR AL CARRITO{" "}
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default Cards;
