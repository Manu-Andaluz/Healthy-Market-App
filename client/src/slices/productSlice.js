import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { url } from "./apiSlice";
import { productsFetch , searchProducts} from "../actions/productActions";

const initialState = {
  allProducts: [],
  products: [],
  favouritesProducts: [],
  status: null,
  errors: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
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
    }
  },
});


export default productSlice.reducer;