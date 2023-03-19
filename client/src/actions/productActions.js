import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setHeaders } from "../slices/apiSlice";

export const productsFetch = createAsyncThunk(
  "products/productsFetch",
  async () => {
    try {
      const response = await axios.get(`http://localhost:5000/products`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const salesProducts = createAsyncThunk(
  "products/productsFetch",
  async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/products/saleProducts`
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
      "http://localhost:5000/products?productName=" + query
    );
    return response.data;
  }
);

export const findProductById = createAsyncThunk(
  "products/findProductById",
  async (productId) => {
    const response = await axios.get(
      `http://localhost:5000/products/getProductById/${productId}`
    );

    return response.data;
  }
);

export const fetchFilterCategoryProducts = createAsyncThunk(
  "products/fetchFilteredProducts",
  async ({ category, filterBy, name }) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/products/category?categoryValue=${category}&filterBy=${filterBy}&name=${name}`
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
        `http://localhost:5000/products/reviews/${productId}`,
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
        `http://localhost:5000/products`,
        product,
        setHeaders()
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
      const response = await axios.delete(
        `http://localhost:5000/products/${productId}`,
        setHeaders()
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
        `http://localhost:5000/products/editProduct/${values.product._id}`,
        values,
        setHeaders()
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const allProducts = createAsyncThunk(
  "products/editProduct",
  async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/products/productList`,
        setHeaders()
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);
