import React from "react";
import { useState } from "react";
import { productsFetch } from "../actions/productActions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cards from "./Cards";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Loading from "./Loading";
import Paginated from "./Paginated";
import { changePage } from "./../slices/productSlice";
import Filter from "./Filter"; // importamos el componente Filter
import productNotFound from "../pictures/emptyProduct.png";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProducts.allProducts);
  const currentPage = useSelector((state) => state.allProducts.currentPage);
  const [load, setLoad] = useState(true);

  const [productsPerPage] = useState(12);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfTheFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProduct = products.slice(
    indexOfTheFirstProduct,
    indexOfLastProduct
  );

  const paginado = (pageNumber) => dispatch(changePage(pageNumber));

  useEffect(() => {
    dispatch(productsFetch()).then(() => setLoad(false));
  }, [dispatch]);

  if (load) {
    return <Loading />;
  }

  return (
    <div className="relative flex flex-col">
      <NavBar />
      <div className="grow">
        <h4 className="grid place-content-center w-full my-10 font-bold text-3xl">
          Todos Los Productos
        </h4>
        <Filter />

        {products && products.length > 0 ? (
          <div>
            <Cards currentProduct={currentProduct} />
            <Paginated
              productsPerPage={productsPerPage}
              products={products.length}
              paginado={paginado}
              currentPage={currentPage}
            />
          </div>
        ) : (
          <div className="flex grow flex-col ">
            <img
              className="object-contain h-[500px]"
              src={productNotFound}
              alt="productNotFound"
            />
            <p className="text-center text-xl font-bold">
              No se han encontrado productos para tu busqueda
            </p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Products;
