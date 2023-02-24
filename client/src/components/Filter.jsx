import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchFilteredProducts } from "../slices/filterSlice";


const Filter = () => {
  const dispatch = useDispatch();

  const [filterBy, setFilterBy] = useState("");

  const handleFilter = (filter) => {
    setFilterBy(filter);
    dispatch(fetchFilteredProducts({ filterBy: filter, categoryValue: "" }));
  };

  return (
    <div>
      <button onClick={() => handleFilter("alfabetic-A-Z")}>Alfabetic A-Z</button>
      <br/>
      <button onClick={() => handleFilter("alfabetic-Z-A")}>Alfabetic Z-A</button>
      <br/>
      <button onClick={() => handleFilter("cheapper-products")}>Cheapper Products</button>
      <br/>
      <button onClick={() => handleFilter("expensive-products")}>Expensive Products</button>
      <br/>
    </div>
  );
};

export default Filter;
