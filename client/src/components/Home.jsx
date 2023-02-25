import React from "react";
import { useState } from "react";
import { productsFetch } from "../actions/productActions";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Loading from "./Loading";
import Carousel from "./Carousel";
import Footer from "./Footer";
import NavBar from "./NavBar";
import CardHome from "./CardsHome";

const Home = () => {
  const dispatch = useDispatch();
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
      <CardHome />
      <Footer />
    </>
  );
};

export default Home;
