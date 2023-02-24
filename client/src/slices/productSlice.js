import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { url } from "./apiSlice";
import { productsFetch, searchProducts } from "../actions/productActions";

const initialState = {
  allProducts: [],
  products: [],
  favouritesProducts: [],
  currentPage : 1,
  status: null,
  errors: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    changePage : (state, action)=> {
      state.currentPage = action.payload
    }
  },
  extraReducers: {
    [productsFetch.pending]: (state, action) => {
      state.status = "pending";
    },
    [productsFetch.fulfilled]: (state, action) => {
      state.allProducts = action.payload;
      state.status = "success";
    },
    [productsFetch.rejected]: (state, action) => {
      state.status = "rejected";
    },
    [searchProducts.pending]: (state, action) => {
      state.status = "pending";
    },
    [searchProducts.fulfilled]: (state, action) => {
      state.allProducts = action.payload;
      state.status = "success";
    },
    [searchProducts.rejected]: (state, action) => {
      state.status = "rejected";
    },
  },
});

export const {changePage} = productSlice.actions;

export default productSlice.reducer;
