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
  createStatus: null,
  deleteStatus: null,
  editStatus: null,
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
      state.createStatus = "success";
      state.allProducts.push(action.payload);
    },
    [createProduct.rejected]: (state, action) => {
      state.status = "failed";
    },
    [deleteProduct.pending]: (state, action) => {
      state.deleteStatus = "pending";
    },
    [deleteProduct.fulfilled]: (state, action) => {
      state.deleteStatus = "success";
      const newList = state.allProducts.filter(
        (item) => item._id !== action.payload._id
      );
      state.allProducts = newList;
      state.status = "success";
    },
    [deleteProduct.rejected]: (state, action) => {
      state.deleteStatus = "rejecteds";
    },
    [editProduct.pending]: (state, action) => {
      state.editStatus = "pending";
    },
    [editProduct.fulfilled]: (state, action) => {
      const updateProducts = state.items.map((product) =>
        product._id === action.payload._id ? action.payload : product
      );
      state.items = updateProducts;
      state.editStatus = "succes";
    },
    [editProduct.rejected]: (state, action) => {
      state.editStatus = "rejected";
    },
  },
});

export const { changePage, setRating } = productSlice.actions;

export default productSlice.reducer;
