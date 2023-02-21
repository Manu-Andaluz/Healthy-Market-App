import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const productsFetch = createAsyncThunk(
    "products/productsFetch",
    async () => {
      try {
        const response = await axios.get(`https://healthy-market-app-production.up.railway.app/products`);
        return response.data;
      } catch (error) {
        console.log({error: error.message})
      };
    }
    
  );

export const searchProducts = createAsyncThunk(
    'products/search',
    async (query) => {
      const response = await axios.get("https://healthy-market-app-production.up.railway.app/products?productName=" + query);
      return response.data;
    }
  ); 