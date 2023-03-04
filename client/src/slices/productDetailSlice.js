import { createSlice } from "@reduxjs/toolkit";
import { findProductById } from "../actions/productActions";

const initialState = {
  productDetail: {},
};
const productDetailSlice = createSlice({
  name: "productDetail",
  initialState,
  reducers: {},
  extraReducers: {
    [findProductById.pending]: (state, action) => {
      state.status = "pending";
    },
    [findProductById.fulfilled]: (state, action) => {
      state.productDetail = action.payload;
      state.status = "success";
    },
    [findProductById.rejected]: (state, action) => {
      state.status = "rejected";
    },
  },
});

export default productDetailSlice.reducer;
