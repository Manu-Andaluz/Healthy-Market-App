import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { searchProducts } from "../actions/productActions";
import lupa from "../pictures/lupa.png";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  useEffect(() => {

    dispatch(searchProducts(search));
  }, [search]);


  function onInputChange(e) {
    setSearch(e.target.value);
  }

  return (
    <div>
      <form className="form">
        <input
          className="w-60 mx--10 border-1 h-5 border-black rounded-lg"
          type="text"
          placeholder="Buscar productos..."
          onChange={onInputChange}
          value={search}
        />
        <button className="mr-12  w-10 ">
          <img className="" type="submit" src={lupa} alt="lupita" />
        </button>
      </form>
    </div>
  );
}
