import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { findProductById } from "../actions/productActions";
import { addToCart } from "../slices/cartSlice";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

const CardDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const productDet = useSelector((state) => state.productDetail);

  useEffect(() => {
    dispatch(findProductById(productId));
  }, []);

  const handleOnClick = (item) => {
    dispatch(addToCart(item));
    navigate("/cart");
    console.log("handleSubmit");
  };
  return (
    <div>
      <NavBar />
      {/* <!-- component --> */}
      <div class="min-w-screen h-full flex items-center p-5 lg:p-10 overflow-hidden relative bg-gray-100">
        <div class="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
          <div class="md:flex items-center -mx-10">
            <div class=" shadow-[0_32px_50px_-15px_rgba(0,0,0,0.2)] rounded-xl w-full md:w-1/2 px-10 mb-10 md:mb-0">
              <div class="relative">
                <img
                  src={productDet?.productDetail?.image?.url}
                  class="w-full relative z-10"
                  alt=""
                />
                <div class="border-4 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
              </div>
            </div>
            <div class="w-full md:w-1/2 px-10">
              <div class="mb-10">
                <h1 class="font-bold uppercase text-2xl mb-5">
                  {productDet.productDetail.name}
                  <br />
                </h1>
                <p class="text-sm">
                  {productDet.productDetail.details}{" "}
                  <a
                    href="#"
                    class="opacity-50 text-gray-900 hover:opacity-100 inline-block text-xs leading-none border-b border-gray-900"
                  >
                    {" "}
                  </a>
                </p>
              </div>
              <div>
                <div class="inline-block align-bottom mr-5">
                  <span class="font-bold text-5xl leading-none align-baseline">
                    ${productDet.productDetail.price}
                  </span>
                  {/* <span class="text-2xl leading-none align-baseline">.99</span> */}
                </div>
                <div class="inline-block align-bottom">
                  <button
                    onClick={() => handleOnClick(productDet.productDetail)}
                    className=" bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded w-fit mx-auto"
                  >
                    <i class="mdi mdi-cart -ml-2 mr-2"></i> AGREGAR AL CARRITO{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- BUY ME A BEER AND HELP SUPPORT OPEN-SOURCE RESOURCES --> */}
      {/* <div class="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
    <div>
        <a title="Buy me a beer" href="https://www.buymeacoffee.com/scottwindon" target="_blank" class="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
            <img class="object-cover object-center w-full h-full rounded-full" src="https://i.pinimg.com/originals/60/fd/e8/60fde811b6be57094e0abc69d9c2622a.jpg"/>
        </a>
    </div>
</div> */}
    </div>
  );
};

export default CardDetail;
