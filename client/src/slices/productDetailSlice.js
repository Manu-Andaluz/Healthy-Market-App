import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
// import { url } from "./apiSlice";
import { findProductById } from "../actions/productActions";

const initialState = {
    productDetail: {},
    status:null,
}

const productDetailSlice = createSlice({
    name: "productDetail",
    initialState,
    reducers: {
      
      },
    extraReducers: {
        [findProductById.pending]: (state, action) => {
            state.status = "pending";
          },
          [findProductById.fulfilled]: (state, action) => {
            state.productDetail = action.payload;
            state.status = "success";
            console.log(productDetail);
          },
          [findProductById.rejected]: (state, action) => {
            state.status = "rejected";
          },
    }})

    

    export default productDetailSlice.reducer;
