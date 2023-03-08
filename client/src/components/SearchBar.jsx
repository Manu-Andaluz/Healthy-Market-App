import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchFilterCategoryProducts } from "../actions/productActions";

export default function SearchBar({ onChange, inputState, filter, category }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      fetchFilterCategoryProducts({
        category: category,
        filterBy: filter,
        name: inputState,
      })
    );
  }, [inputState]);

  return (
    <div className="w-9/12 mx-auto">
      <form className="bg-white">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-200 sr-only"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            placeholder="Buscar productos..."
            onChange={onChange}
            value={inputState}
            id="default-search"
            className="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
          />
        </div>
      </form>
    </div>
  );
}
