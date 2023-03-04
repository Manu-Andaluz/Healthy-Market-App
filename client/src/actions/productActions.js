import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const productsFetch = createAsyncThunk(
  "products/productsFetch",
  async () => {
    try {
      const response = await axios.get(
        `https://healthy-market-app-production.up.railway.app/products`
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const searchProducts = createAsyncThunk(
  "products/search",
  async (query) => {
    const response = await axios.get(
      "https://healthy-market-app-production.up.railway.app/products?productName=" +
        query
    );
    return response.data;
  }
);

export const findProductById = createAsyncThunk(
  "products/findProductById",
  async (productId) => {
    const response = await axios.get(
      `https://healthy-market-app-production.up.railway.app/products/getProductById/${productId}`
    );

    return response.data;
  }
);

export const fetchFilterCategoryProducts = createAsyncThunk(
  "products/fetchFilteredProducts",
  async ({ category, filterBy, name }) => {
    try {
      const response = await axios.get(
        `https://healthy-market-app-production.up.railway.app/products/category?categoryValue=${category}&filterBy=${filterBy}&name=${name}`
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const reviewProducts = createAsyncThunk(
  "products/reviews",
  async ({ reviews, productId }) => {
    try {
      const response = await axios.post(
        `https://healthy-market-app-production.up.railway.app/reviews/${productId}`,
        reviews
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const createProduct = createAsyncThunk(
  "products/createProduct",
  async (product) => {
    try {
      const response = await axios.post(
        `https://healthy-market-app-production.up.railway.app/products`,
        product
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (productId) => {
    try {
      const response = await axios.get(
        `https://healthy-market-app-production.up.railway.app/products/${productId}`
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const editProduct = createAsyncThunk(
  "products/editProduct",
  async (values) => {
    try {
      const response = await axios.put(
        `https://healthy-market-app-production.up.railway.app/products/editProduct/${values.product._id}`,
        values
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);
