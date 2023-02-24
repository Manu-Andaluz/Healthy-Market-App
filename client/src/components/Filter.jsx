import { useDispatch } from "react-redux";
import {
  fetchCategoryProducts,
  fetchFilterCategoryProducts,
  fetchFilteredProducts,
} from "../actions/productActions";
import { productsFetch } from "../actions/productActions";
import { useState } from "react";

const Filter = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState("");
  const [category, setCategory] = useState("");

  const changeFilter = (e) => {
    setFilter(e.target.value);
  };

  const changeCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleFilter = (e) => {
    if (filter === "ordenamiento") {
      dispatch(productsFetch());
    }

    if (category) {
      dispatch(
        fetchFilterCategoryProducts({
          category: category,
          filterBy: filter,
        })
      );
    } else {
      dispatch(fetchFilteredProducts(e.target.value));
    }
  };

  const handleFilterCategory = (e) => {
    if (category === "categoria") {
      dispatch(productsFetch());
    }
    if (filter) {
      dispatch(
        fetchFilterCategoryProducts({
          category: e.target.value,
          filterBy: filter,
        })
      );
    } else {
      dispatch(fetchCategoryProducts({ category: e.target.value }));
    }
  };

  return (
    <div>
      <select name="filters" onChange={changeFilter} onClick={handleFilter}>
        <option value="ordenamiento">Productos</option>
        <option value="alfabetic-A-Z">Alfabetic (A-Z)</option>
        <option value="alfabetic-Z-A">Alfabetic (Z-A)</option>
        <option value="cheapper-products">cheapper-products</option>
        <option value="expensive-products">expensive-products</option>
      </select>
      <select
        name="category"
        onChange={handleFilterCategory}
        onClick={changeCategory}
      >
        <option value="categoria">Categoría</option>
        <option value="Vegetariano">Vegetariano</option>
        <option value="Gluten-Free">Gluten-Free</option>
        <option value="Vegano">Vegano</option>
        <option value="Almacen">Almacen</option>
      </select>
    </div>
  );
};

export default Filter;
