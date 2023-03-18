import { useDispatch } from "react-redux";
import { fetchFilterCategoryProducts } from "../actions/productActions";
import { useState } from "react";
import SearchBar from "./SearchBar";

const Filter = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState("");
  const [category, setCategory] = useState("categoria");
  const [search, setSearch] = useState("");

  function onInputChange(e) {
    setSearch(e.target.value);
  }

  const changeFilter = (e) => {
    setFilter(e.target.value);
  };

  const changeCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleFilter = (e) => {
    dispatch(
      fetchFilterCategoryProducts({
        category: category,
        filterBy: filter,
        name: search,
      })
    );
  };

  const handleFilterCategory = (e) => {
    dispatch(
      fetchFilterCategoryProducts({
        category: category,
        filterBy: filter,
        name: search,
      })
    );
  };

  return (
    <div className="grid mx-auto gap-2 my-5">
      {/* <div className="flex flex-row justify-center  ">
        <div className="px-28 ">Ordenamiento:</div>
        <div className="px-28">Categoria:</div>
      </div> */}
      <div className="flex flex-col md:flex-row justify-between items-center w-9/12 gap-5 mx-auto">
        <SearchBar
          inputState={search}
          onChange={onInputChange}
          filter={filter}
          category={category}
        />

        <select
          name="filters"
          onChange={changeFilter}
          onClick={handleFilter}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
          <option value="ordenamiento">Más reciente</option>
          <option value="alfabetic-A-Z">Orden (A-Z)</option>
          <option value="alfabetic-Z-A">Orden (Z-A)</option>
          <option value="cheapper-products">Menor precio</option>
          <option value="expensive-products">Mayor precio</option>
          <option value="sales">Productos en Descuentos</option>
        </select>

        <select
          name="category"
          onChange={changeCategory}
          onClick={handleFilterCategory}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        >
          <option value="categoria">Sin Categoría</option>
          <option value="vegetariano">Vegetariano</option>
          <option value="gluten-Free">Gluten-Free</option>
          <option value="vegano">Vegano</option>
          <option value="almacen">Almacen</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
