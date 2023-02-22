import React from "react";
import { useState } from "react";
import { productsFetch } from "../actions/productActions";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import Cards from "./Cards";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Loading from "./Loading";
import SearchBar from "./SearchBar";


const Products = () => {
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
        <SearchBar/>
        <Cards />
        <Footer />
      </>
    );
  };
  
  export default Products;