import { createSlice } from "@reduxjs/toolkit";
import {
  productsFetch,
  searchProducts,
  // fetchFilteredProducts,
  fetchFilterCategoryProducts,
  createProduct,
  deleteProduct,
  editProduct,
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
    [createProduct.pending]: (state, action) => {
      state.status = "loading";
    },
    [createProduct.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.allProducts.push(action.payload);
    },
    [createProduct.rejected]: (state, action) => {
      state.status = "failed";
    },
    [deleteProduct.pending]: (state, action) => {
      state.status = "pending";
    },
    [deleteProduct.fulfilled]: (state, action) => {
      const newList = state.items.filter(
        (item) => item._id !== action.payload._id
      );
      state.items = newList;
      state.status = "success";
    },
    [deleteProduct.rejected]: (state, action) => {
      state.status = "rejected";
    },
    [editProduct.pending]: (state, action) => {
      state.status = "pending";
    },
    [editProduct.fulfilled]: (state, action) => {
      const updateProducts = state.items.map((product) =>
        product._id === action.payload._id ? action.payload : product
      );
      state.items = updateProducts;
      state.status = "success";
    },
    [editProduct.rejected]: (state, action) => {
      state.status = "rejected";
    },
  },
});

export const { changePage, setRating } = productSlice.actions;

export default productSlice.reducer;
