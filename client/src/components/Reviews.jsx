import React from "react";
import Star from "./Star";
import { useEffect } from "react";
import { productsFetch } from "../actions/productActions";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const Reviews = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector(state => state.allProducts);

  useEffect(() => {
    dispatch(productsFetch());
  }, []);
 
  console.log(allProducts); 
  return (
    <>
      <div className="mx-8 my-8 px-8">
        <aside>
          <div class="flex items-center mt-3 space-x-3 divide-x divide-gray-200 dark:divide-gray-600">
            <a href="/" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Volver al producto</a>
            <a href="/" class="pl-4 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">inicio</a>
          </div>
        </aside>
        {allProducts.products && allProducts.products.map((product) => {
  console.log(product)
  return (
    <div
      className="text-base flex flex-col justify-end content-center items-center space-x-2 space-y-2"
      key={product._id}
    >
      <div class="flex items-center mb-1">
        <Star stars={product.rating} />
      </div>
      <footer class="mb-5 text-sm text-gray-500 dark:text-gray-400"><p> <time>{product.date}</time></p></footer>
      <p class="mb-2 font-light text-gray-500 dark:text-gray-400">{product.review}</p>
    </div>
  )
})}

      </div>
    </>
  )
}

export default Reviews
