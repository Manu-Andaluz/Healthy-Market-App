import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import LogoutModal from "./LogoutModal";
import leaf from "../pictures/leaf-svgrepo-com.svg";

export default function NavBar() {
  const user = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState("auto");
  let activeStyle = {
    color: "#03C988",
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setNavbarHeight(isMenuOpen ? "auto" : "calc(100vh - 64px)");
  };

  return (
    <nav
      className="relative px-4 py-5 flex flex-col sm:flex-row justify-between items-center bg-gray-800"
      style={{ height: navbarHeight }}
    >
      <NavLink to="/">
        <p
          className="text-2xl text-white font-bold leading-none flex items-center"
          href="#"
        >
          Healthy Market{" "}
          <img
            className="ml-5"
            src={leaf}
            alt="leaf"
            style={{ width: "2rem" }}
          />
        </p>
      </NavLink>
      <div className="lg:hidden">
        {!isMenuOpen && (
          <button
            className="navbar-burger flex items-center text-blue-600 p-3"
            onClick={toggleMenu}
          >
            <svg
              className="block h-6 w-6 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        )}
        {isMenuOpen && (
          <button
            className="navbar-close absolute top-0 right-0 text-white p-3"
            onClick={toggleMenu}
          >
            <svg
              className="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Close menu</title>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 8.414l5.293-5.293 1.414 1.414L11.414 10l5.293 5.293-1.414 1.414L10 11.414l-5.293 5.293-1.414-1.414L8.586 10 3.293 4.707l1.414-1.414L10 8.414z"
              />
            </svg>
          </button>
        )}
      </div>
      <ul
        // absolute mt-0  left-1/2 text-white transform translate-y-1/9 -translate-x-1/2 lg:flex lg:mx-auto  lg:items-center lg:w-auto lg:space-x-7 bg-gray-800 py-2
        className={`${
          isMenuOpen ? "grid h-96" : "hidden"
        } absolute mt-0 top-1/2 left-1/2 text-white transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto  lg:items-center lg:w-auto lg:space-x-6 bg-gray-800 py-2  `}
      >
        <li>
          <NavLink
            to="/home"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <p className="text-lg font-bold ">Inicio</p>
          </NavLink>
        </li>
        <li className="text-gray-300 hidden lg:block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            className="w-4 h-4 current-fill"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
            />
          </svg>
        </li>
        <li>
          <NavLink
            to="/products"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <p className="text-lg font-bold ">Productos</p>
          </NavLink>
        </li>
        <li className="text-gray-300 hidden lg:block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            className="w-4 h-4 current-fill"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
            />
          </svg>
        </li>
        <li>
          <NavLink
            to="/about"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <p className="text-lg font-bold ">Sobre Nosotros</p>
          </NavLink>
        </li>
        <li className="text-gray-300 hidden lg:block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            className="w-4 h-4 current-fill"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
            />
          </svg>
        </li>
        <li>
          <NavLink
            to="/cart"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-handbag-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2zM5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0V5z" />
              </svg>
              <span className="">
                <span>{cart.cartTotalQuantity}</span>
              </span>
            </div>
          </NavLink>
        </li>
      </ul>
      {user.email ? (
        user.isAdmin ? (
          <div className="flex">
            <NavLink to="/admin/summary">
              <p className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 text-white font-bold  rounded-xl transition duration-200 text-base">
                Admin
              </p>
            </NavLink>
            <button>
              <p className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100  text-gray-900 font-bold  rounded-xl transition duration-200 text-base">
                <LogoutModal />
              </p>
            </button>
          </div>
        ) : (
          <button>
            <p className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100  text-gray-900 font-bold  rounded-xl transition duration-200 text-base">
              <LogoutModal />
            </p>
          </button>
        )
      ) : (
        <NavLink to="/login">
          <p className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100  text-gray-900 font-bold  rounded-xl transition duration-200 text-base">
            Ingresar
          </p>
        </NavLink>
      )}
    </nav>
  );
}
