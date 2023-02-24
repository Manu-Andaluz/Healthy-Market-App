import React from "react";
import { useState } from "react";
import { productsFetch } from "../actions/productActions";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Cards from "./Cards";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Loading from "./Loading";
import SearchBar from "./SearchBar";
import Paginated from "./Paginated";
import {changePage} from './../slices/productSlice';

const Products = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const products = useSelector((state) => state.allProducts.allProducts);
    const currentPage = useSelector((state) => state.allProducts.currentPage);
    const [load, setLoad] = useState(true);


    console.log(currentPage)
    const [productsPerPage] = useState(4)
    const indexOfLastProduct = currentPage * productsPerPage
    const indexOfTheFirstProduct = indexOfLastProduct - productsPerPage
    const currentProduct = products.slice(indexOfTheFirstProduct, indexOfLastProduct);


    const paginado = (pageNumber) =>  dispatch(changePage(pageNumber))
  

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
        
          
          
        
        
        <Cards currentProduct = {currentProduct}/>
       
        <Paginated
          productsPerPage={productsPerPage}
          products={products.length}
          paginado={paginado}
          />

        <Footer />
      </>
    );
  };
  
  export default Products;