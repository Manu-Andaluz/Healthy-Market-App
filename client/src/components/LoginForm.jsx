import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "./NavBar";

const LoginForm = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    console.log(form);
  }, [form]);

  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleOnClick = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <NavBar />
      <div className="grid text-center h-screen content-center gap-5 items-center">
        <h2 className="text-3xl font-bold">Inciar Sessión</h2>
        <div className="flex justify-center items-center bg-blue">
          <form className="w-full max-w-lg p-2">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Email
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="email"
                  placeholder="jane@email.com"
                  name="email"
                  value={form.email}
                  onChange={changeHandler}
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Contraseña
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="password"
                  placeholder="******************"
                  name="password"
                  value={form.password}
                  onChange={changeHandler}
                />
              </div>
            </div>

            <div className="flex m-auto justify-center items-center py-5 gap-4">
              <Link to="/register">Crear Cuenta</Link>
              <button
                className=" bg-green1 hover:bg-hoverGreen1 text-white font-bold py-2 px-4 rounded"
                onSubmit={handleOnClick}
              >
                Iniciar Sessión
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
