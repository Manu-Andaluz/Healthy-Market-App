import { createSlice } from "@reduxjs/toolkit";
import {
  productsFetch,
  searchProducts,
  // fetchFilteredProducts,
  fetchFilterCategoryProducts,
  createProduct,
  deleteProduct,
  editProduct,
  allProducts,
  salesProducts,
} from "../actions/productActions";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
  allProducts: [],
  productList: [],
  salesProducts: [],
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
    [salesProducts.pending]: (state, action) => {
      state.status = "pending";
    },
    [salesProducts.fulfilled]: (state, action) => {
      state.salesProducts = action.payload;
      state.status = "success";
    },
    [salesProducts.rejected]: (state, action) => {
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
      toast.success("Producto Creado");
    },
    [createProduct.rejected]: (state, action) => {
      state.status = "failed";
    },
    [deleteProduct.pending]: (state, action) => {
      state.deleteStatus = "pending";
    },
    [deleteProduct.fulfilled]: (state, action) => {
      const newList = state.allProducts.filter(
        (item) => item._id !== action.payload._id
      );
      state.allProducts = newList;
      state.deleteStatus = "success";
      state.status = "success";
      toast.info("Producto Eliminado");
    },
    [deleteProduct.rejected]: (state, action) => {
      state.deleteStatus = "rejecteds";
    },
    [editProduct.pending]: (state, action) => {
      state.editStatus = "pending";
    },
    [editProduct.fulfilled]: (state, action) => {
      state.editStatus = "success";
      const updateProducts = state.allProducts.map((product) =>
        product._id === action.payload._id ? action.payload : product
      );
      state.allProducts = updateProducts;
    },
    [editProduct.rejected]: (state, action) => {
      state.editStatus = "rejected";
    },
    [allProducts.pending]: (state, action) => {
      state.status = "pending";
    },
    [allProducts.fulfilled]: (state, action) => {
      state.productList = action.payload;
      state.status = "success";
    },
    [allProducts.rejected]: (state, action) => {
      state.status = "rejected";
    },
  },
});

export const { changePage, setRating } = productSlice.actions;

export default productSlice.reducer;
