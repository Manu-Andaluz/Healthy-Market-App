import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Home from "./components/Home";
import About from "./components/About";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadUser } from "./slices/userSlice";
import CardDetail from "./components/CardDetail";
import Error from "./components/Error";
import Products from "./components/Products";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path='/detail/:productId' element ={<CardDetail/>}/>
          <Route path="*" element={<Error/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
