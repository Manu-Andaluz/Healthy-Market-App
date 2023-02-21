import React from "react";
import { Link } from "react-router-dom";
const LoginForm = () => {
  return (
    <div className="grid text-center h-screen content-center gap-5 items-center">
      <h2 className="text-3xl font-bold">Inciar Sessión</h2>
      <div className="flex justify-center items-center bg-blue">
        <form class="w-full max-w-lg p-2">
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-password"
              >
                Email
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="email"
                placeholder="jane@email.com"
              />
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-password"
              >
                Contraseña
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="password"
                placeholder="******************"
              />
            </div>
          </div>

          <div className="flex m-auto justify-center items-center py-5 gap-4">
            <Link to="/register">Crear Cuenta</Link>
            <button class=" bg-green1 hover:bg-hoverGreen1 text-white font-bold py-2 px-4 rounded">
              Iniciar Sessión
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
