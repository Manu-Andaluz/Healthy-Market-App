import React from "react";
import { useState } from "react";
import { productsFetch } from "../actions/productActions";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./Loading";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import Carousel from "./Carousel";
import Cards from "./Cards";

import logo from "../pictures/logo2.png";
import Footer from "./Footer";
import NavBar from "./NavBar";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const products = useSelector ((state) => state.allProducts)
  const [load, setLoad] = useState(true);

  useEffect(() => {
    dispatch(productsFetch()).then(() => setLoad(false));
  }, [dispatch]);

  if (load) {
    return <Loading />;
  }

  return (
    <>
      <NavBar />
      <Carousel />
      <Cards />
      <Footer />
    </>
  );
};

export default Home;
