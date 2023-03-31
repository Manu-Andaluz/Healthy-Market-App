import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotals,
  removeFromCart,
} from "../slices/cartSlice";
import axios from "axios";
import NavBar from "./NavBar";
import { toast, ToastContainer } from "react-toastify";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleAddToCart = (product) => {
    if (product.cartQuantity < product.stock) {
      dispatch(addToCart(product));
    } else {
      toast.error("No hay más stock del producto", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    }
  };

  const handleDecreaseCart = (product) => {
    dispatch(decreaseCart(product));
  };
  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
    toast.info("Producto Removido", {
      position: toast.POSITION.BOTTOM_CENTER,
    });
  };
  const handleClearCart = () => {
    dispatch(clearCart());
    navigate("/products");
  };

  return (
    <>
      <NavBar />
      {cart.cartTotalQuantity === 0 ? (
        <div className="bg-gray-100">
          <div className="container mx-auto mt-10">
            <div className="flex flex-col md:flex-row justify-between shadow-md my-10">
              <div className="w-3/4 bg-white px-10 py-10">
                <h4 className="text-2xl">Tu carrito esta vacío</h4>
                <Link
                  to="/products"
                  className="flex font-semibold text-indigo-600 text-sm mt-10"
                >
                  <svg
                    className="fill-current mr-2 text-indigo-600 w-4"
                    viewBox="0 0 448 512"
                  >
                    <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                  </svg>
                  Continuar Comprando
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-gray-100">
          <div className="container mx-auto mt-10">
            <div className="flex flex-col md:flex-row justify-between shadow-md my-10">
              <div className="lg:w-3/4 sm:w-10/12 bg-white px-10 py-10">
                <div className="grid justify-between">
                  <h1 className="font-semibold text-2xl">Carrito de Compras</h1>
                </div>
                <div className="flex mt-10 mb-5">
                  <h3 className="font-semibold text-gray-600 text-xs uppercase lg:w-2/5 ">
                    Detalle de producto
                  </h3>
                  <h3 className="font-semibold text-center text-gray-600 text-xs uppercase lg:w-1/5 sm:w-10/12">
                    Cantidad
                  </h3>
                  <h3 className="font-semibold text-center text-gray-600 text-xs uppercase lg:w-1/5 sm:w-10/12">
                    Precio unitario
                  </h3>
                  <h3 className="font-semibold text-center text-gray-600 text-xs uppercase lg:w-1/5 sm:w-10/12">
                    Total
                  </h3>
                </div>

                {cart.cartItems &&
                  cart.cartItems.map((product, index) => {
                    const price = product.discountPrice
                      ? product.discountPrice
                      : product.price;
                    return (
                      <div className={`flex items-center hover:bg-gray-100 -mx-8 px-6 py-5 border-zinc-200 border-b ${index === 0 && "border-t"}`} key={index}>
                        <div className="lg:flex sm:grid w-2/5">
                          <div className="w-20">
                            <img
                              className="h-24"
                              src={product?.image?.url}
                              alt=""
                            />
                          </div>
                          <div className="lg:flex sm:grid  lg:flex-col justify-between ml-4 flex-grow">
                            <span className="font-bold text-sm">
                              <Link to={`/detail/${product._id}`}>
                                {product.name}
                              </Link>
                            </span>
                            <span className="text-red-500 text-xs hidden lg:block">
                              {product.category}
                            </span>
                            <button
                              onClick={() => handleRemoveFromCart(product)}
                              className="font-semibold hover:text-red-500 text-gray-500 text-xs block"
                            >
                              Remover
                            </button>
                          </div>
                        </div>
                        <div className="flex justify-center w-1/5">
                          <button onClick={() => handleDecreaseCart(product)}>
                            <svg
                              className="fill-current text-gray-600 w-3"
                              viewBox="0 0 448 512"
                            >
                              <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                            </svg>
                          </button>
                          <input
                            className="mx-2 border text-center w-8"
                            type="text"
                            value={product.cartQuantity}
                          />

                          <button onClick={() => handleAddToCart(product)}>
                            <svg
                              className="fill-current text-gray-600 w-3"
                              viewBox="0 0 448 512"
                            >
                              <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                            </svg>
                          </button>
                        </div>
                        <span className="text-center w-1/5 font-semibold text-sm">
                          ${price}
                        </span>
                        <span className="text-center w-1/5 font-semibold text-sm">
                          ${price * product.cartQuantity}
                        </span>
                      </div>
                    );
                  })}

                <button
                  onClick={() => handleClearCart()}
                  className="flex font-semibold text-red-600 text-sm mt-10"
                  on
                >
                  Limpiar Carrito
                </button>

                <Link
                  to="/products"
                  className="flex font-semibold text-indigo-600 text-sm mt-10"
                >
                  <svg
                    className="fill-current mr-2 text-indigo-600 w-4"
                    viewBox="0 0 448 512"
                  >
                    <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                  </svg>
                  Continuar Comprando
                </Link>
              </div>

              <div id="summary" className="lg:w-1/4 sm:w-10/12 px-8 py-10">
                <h1 className="font-semibold text-2xl border-b border-zinc-200 pb-8 sm:w-10/12">
                  Orden
                </h1>
                <div className="flex justify-between mt-10 mb-5">
                  <span className="font-semibold text-sm uppercase">items</span>
                  <span className="font-semibold text-sm">
                    {cart.cartTotalQuantity}
                  </span>
                </div>
                <div className="border-t border-zinc-200 mt-8">
                  <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                    <span>Total </span>
                    <span>${cart.cartTotalAmount}</span>
                  </div>
                  {user.email ? (
                    <button
                      onClick={() => {
                        axios
                          .post(
                            "https://healthy-market-app-production.up.railway.app/order/mercadoPago",
                            {
                              cart: cart.cartItems,
                              userName: user.name,
                              userEmail: user.email,
                            }
                          )
                          .then(
                            (res) =>
                              (window.location.href =
                                res.data.response.body.init_point)
                          );
                      }}
                      className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full"
                    >
                      Continuar con la compra
                    </button>
                  ) : (
                    <Link to="/login">
                      <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
                        Ingresar para continuar
                      </button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
