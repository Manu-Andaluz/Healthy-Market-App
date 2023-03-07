import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import NavBar from "./NavBar";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../actions/userActions";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import GoogleButtom from 'react-google-button';
import { fetchGoogleToken } from './../actions/userActions'

const LoginForm = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (user._id) {
      navigate("/home");
    }
   
  }, [user._id, navigate]);

  const redirectToGoogleSSO = async () => {
    let timer = null;
    const googleLoginUrl = "https://healthy-market-app-production.up.railway.app/users/google";
    const newWindow = window.open(googleLoginUrl, "_blanck", "width=400, height=400");
    if (newWindow) {
      timer = setInterval(() => {
        if (newWindow.closed) {
          console.log('We are authenticated');
          dispatch(fetchGoogleToken())
          if (timer) clearInterval(timer)
          // time to refresh page
          setTimeout(()=>{
            location.reload(); 
          }, 1000)
        } 
      }, 500);
        
    }
  }

  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleOnClick = (e) => {
    e.preventDefault();
    dispatch(loginUser(form));
  };

  return (
    <div>
      <NavBar />
      <div className="grid text-center h-screen content-center gap-5 items-center">
        <h2 className="text-3xl font-bold">Iniciar Sesión</h2>
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

            <div className="grid m-auto justify-center items-center py-5 gap-4">
              <button
                className=" bg-green-700 hover:bg-green-500 text-white font-bold py-2 px-4 rounded"
                onClick={handleOnClick}
              >
                Iniciar Sesión
              </button>
              <p className="mt-2 ">Todavía no tienes una cuenta?</p>
              <Link
                to="/register"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Crear Cuenta
              </Link>
              <div>
                <GoogleButtom onClick={redirectToGoogleSSO} />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
