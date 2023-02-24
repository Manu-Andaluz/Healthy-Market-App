import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchFilteredProducts = createAsyncThunk(
  "filteredProducts/fetchFilteredProducts",
  async ({ filterBy, categoryValue }) => {
    try {
      const response = await axios.get(`/filterby?filterBy=${filterBy}&categoryValue=${categoryValue}`);
      return response.data;
    } catch (error) {
      console.log({ error: error.message });
      throw error;
    }
  }
);

const initialState = {
  products: [],
  status: null,
  error: null,
};

const filteredProductsSlice = createSlice({
  name: "filteredProducts",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchFilteredProducts.pending]: (state, action) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchFilteredProducts.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.products = action.payload;
    },
    [fetchFilteredProducts.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export default filteredProductsSlice.reducer;

export const selectFilteredProducts = (state) => state.filteredProducts.products;
export const selectFilteredProductsStatus = (state) => state.filteredProducts.status;
export const selectFilteredProductsError = (state) => state.filteredProducts.error;
