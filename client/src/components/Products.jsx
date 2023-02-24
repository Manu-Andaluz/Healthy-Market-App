import React from "react";
import { useState } from "react";
import { productsFetch } from "../actions/productActions";
import { fetchFilteredProducts } from "../actions/filterActions"; // importamos fetchFilteredProducts
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import Cards from "./Cards";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Loading from "./Loading";
import SearchBar from "./SearchBar";
import Filter from "./Filter"; // importamos el componente Filter


const Products = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.allProducts);
  const [load, setLoad] = useState(true);
  const [filters, setFilters] = useState({ filterBy: "", categoryValue: "" }); // añadimos el estado "filters"

  useEffect(() => {
    dispatch(productsFetch()).then(() => setLoad(false));
  }, [dispatch]);

  const handleFilter = async (filterBy, categoryValue) => { // convertimos la función en asíncrona
    setFilters({ filterBy, categoryValue });
    try {
      const filteredProducts = await dispatch(fetchFilteredProducts({ filterBy, categoryValue })); // llamamos a fetchFilteredProducts con los filtros correspondientes
      console.log(filteredProducts); // imprimimos los productos filtrados en la consola
    } catch (error) {
      console.log(error);
    }
  };

  if (load) {
    return <Loading />;
  }

  return (
    <>
      <NavBar handleFilter={handleFilter} />
      <Filter filters={filters} setFilters={setFilters} /> {/* pasamos el estado "filters" y su función "setFilters" al componente Filter */}
      <SearchBar />
      <Cards products={products} /> {/* Pasamos todos los productos */}
      <Footer />
    </>
  );
};

export default Products;
