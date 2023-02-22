import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function NavBar() {
  const user = useSelector((state) => state.user);
  return (
    <nav className="relative px-4 py-5 flex justify-between items-center bg-green2">
      <p className="text-2xl font-bold leading-none flex items-center" href="#">
        Healthy Market 🌿
      </p>
      <div className="lg:hidden">
        <button className="navbar-burger flex items-center text-blue-600 p-3">
          <svg
            className="block h-4 w-4 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Mobile menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </button>
      </div>
      <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
        <li>
          <Link to="/">
            <p className="text-lg font-bold text-gray-400 hover:text-gray-500">
              Home
            </p>
          </Link>
        </li>
        <li className="text-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            className="w-4 h-4 current-fill"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
            />
          </svg>
        </li>
        <li>
          <Link to="/">
            <p className="text-lg font-bold text-gray-400 hover:text-gray-500">
              Productos
            </p>
          </Link>
        </li>
        <li className="text-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            className="w-4 h-4 current-fill"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
            />
          </svg>
        </li>
        <li>
          <Link to="/">
            <p className="text-lg font-bold text-gray-400 hover:text-gray-500">
              Sobre Nosotros
            </p>
          </Link>
        </li>
        <li className="text-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            className="w-4 h-4 current-fill"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
            />
          </svg>
        </li>
        <li>
          <Link to="/">
            <p className="text-lg font-bold text-gray-400 hover:text-gray-500">
              Contacto
            </p>
          </Link>
        </li>
      </ul>
      {user.email ? (
        <Link to="/login">
          <p className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-lg  text-gray-900 font-bold  rounded-xl transition duration-200">
            Logout
          </p>
        </Link>
      ) : (
        <Link to="/login">
          <p className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-lg  text-gray-900 font-bold  rounded-xl transition duration-200">
            Sign In
          </p>
        </Link>
      )}
    </nav>
  );
}
