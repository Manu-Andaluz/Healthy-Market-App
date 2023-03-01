import { createSlice } from "@reduxjs/toolkit";
import {
  productsFetch,
  searchProducts,
  // fetchFilteredProducts,
  fetchFilterCategoryProducts,
} from "../actions/productActions";

const initialState = {
  allProducts: [],
  favouritesProducts: [],
  currentPage: 1,
  status: null,
  errors: null,
  rating: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    changePage: (state, action) => {
      state.currentPage = action.payload;
    },
    setRating: (state, action) => {
      state.rating = action.payload;
    },
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
    // [fetchFilteredProducts.pending]: (state, action) => {
    //   state.status = "loading";
    // },
    // [fetchFilteredProducts.fulfilled]: (state, action) => {
    //   state.status = "succeeded";
    //   state.allProducts = action.payload;
    // },
    // [fetchFilteredProducts.rejected]: (state, action) => {
    //   state.status = "failed";
    // },
    [fetchFilterCategoryProducts.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchFilterCategoryProducts.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.allProducts = action.payload;
    },
    [fetchFilterCategoryProducts.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export const { changePage, setRating } = productSlice.actions;

export default productSlice.reducer;

