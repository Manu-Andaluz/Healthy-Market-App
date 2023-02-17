import React from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar"
import LandingPage from "./components/LandingPage"
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<LandingPage/>} />
      <Route path="/home" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
