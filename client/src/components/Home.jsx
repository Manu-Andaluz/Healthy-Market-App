import React from "react";
import { useState } from "react";
import { productsFetch } from "../actions/productActions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./Loading";
import Carousel from "./Carousel";
import Footer from "./Footer";
import NavBar from "./NavBar";
import CardHome from "./CardsHome";
//import Reviews from "./Reviews"

const Home = () => {
  const products = useSelector((state) => state.allProducts);
  const dispatch = useDispatch();
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
      <CardHome products={products.allProducts} />
      <Footer />
    </>
  );
};

export default Home;
