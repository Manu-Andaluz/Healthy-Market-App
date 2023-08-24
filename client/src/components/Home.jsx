import React from "react";
import { useState } from "react";
import { salesProducts } from "../actions/productActions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./Loading";
import Footer from "./Footer";
import NavBar from "./NavBar";
import CardHome from "./CardsHome";
import Carousel from "./Carousel";

const Home = () => {
  const products = useSelector((state) => state.allProducts.salesProducts);
  const dispatch = useDispatch();
  const [load, setLoad] = useState(true);

  useEffect(() => {
    dispatch(salesProducts()).then(() => setLoad(false));
  }, [dispatch]);

  if (load) {
    return <Loading />;
  }

  return (
    <>
      <NavBar />
      <Carousel />
      <CardHome products={products} />
      <Footer />
    </>
  );
};

export default Home;
