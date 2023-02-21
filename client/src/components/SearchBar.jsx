import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { searchProducts } from '../actions/productActions';

export default function SearchBar() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  useEffect(() => {
    console.log(search);
  }, [search]);

  function onSubmit(e) {
    e.preventDefault();
    if (search.length === 0) return alert('El producto ingresado no existe...');
    dispatch(searchProducts(search));
    setSearch('');
  }

  function onInputChange(e) {
    setSearch(e.target.value);
  }

  return (
    <div>
      <form className="form" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Nombre del producto..."
          onChange={onInputChange}
          value={search}
        />
        <input className="btn" type="submit" value="Buscar" />
      </form>
    </div>
  );
}