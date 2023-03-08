import React, { useEffect, useState } from "react";
import { productsFetch } from "../actions/productActions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { addToCart } from "../slices/cartSlice";

const CardHome = ({ products }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [randomIndexes, setRandomIndexes] = useState([]);

  useEffect(() => {
    dispatch(productsFetch());
  }, [dispatch]);

  useEffect(() => {
    // Generar 4 índices aleatorios únicos
    const indexes = [];
    while (indexes.length < 4) {
      const index = Math.floor(Math.random() * products.length);
      if (!indexes.includes(index)) {
        indexes.push(index);
      }
    }
    setRandomIndexes(indexes);
  }, [products]);

  const handleOnClick = (item) => {
    dispatch(addToCart(item));
    navigate("/cart");
  };

  const filteredProducts = products.filter((product, index) =>
    randomIndexes.includes(index)
  );

  return (
    <>
      <h4 className="grid place-content-center w-full my-10 font-bold text-3xl">
        Productos Destacados
      </h4>
      <div className="text-base grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 px-5 mt-3">
        {filteredProducts.map((product) => {
          return (
            <div
              className="text-base flex flex-col justify-end content-center items-center space-x-2 space-y-2 "
              key={product._id}
            >
              <Link to={`/detail/${product._id}`}>
                <div className="text-base aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8 ">
                  <img
                    src={product.image.url}
                    alt={product.name}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
              </Link>

                <h3 className="text-base font-bree text-gray-700 ">
                  {product.name}
                </h3>
                <p className="text-lg font-bold text-gray-900">
                  ${product.price}
                </p>
                <button
                  onClick={() => handleOnClick(product)}
                  className=" bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded w-fit mx-auto"
                >
                  <i class="mdi mdi-cart -ml-2 mr-2"></i> AGREGAR AL CARRITO{" "}
                </button>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default CardHome;
