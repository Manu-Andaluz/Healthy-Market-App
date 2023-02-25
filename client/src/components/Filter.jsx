import { useDispatch } from "react-redux";
import {
  fetchCategoryProducts,
  fetchFilterCategoryProducts,
  fetchFilteredProducts,
} from "../actions/productActions";
import { productsFetch } from "../actions/productActions";
import { useState } from "react";
import SearchBar from "./SearchBar";

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
    <div className="grid mx-auto gap-2 my-5">
      <div className="flex w-9/12 gap-5 mx-auto">
        <SearchBar />

        <select
          name="filters"
          onChange={changeFilter}
          onClick={handleFilter}
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="alfabetic-A-Z">Alfabetic (A-Z)</option>
          <option value="alfabetic-Z-A">Alfabetic (Z-A)</option>
          <option value="cheapper-products">cheapper-products</option>
          <option value="expensive-products">expensive-products</option>
        </select>
        <select
          name="category"
          onChange={changeCategory}
          onClick={handleFilterCategory}
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="categoria">Categoría</option>
          <option value="Vegetariano">Vegetariano</option>
          <option value="Gluten-Free">Gluten-Free</option>
          <option value="Vegano">Vegano</option>
          <option value="Almacen">Almacen</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
