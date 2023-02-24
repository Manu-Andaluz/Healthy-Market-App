import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchFilteredProducts = createAsyncThunk(
    "products/fetchFilteredProducts",
    async (filters) => {
      try {
        const response = await axios.get("/filterby", {
          params: {
            filterBy: filters.filterBy,
            categoryValue: filters.categoryValue
          }
        });
        return response.data;
      } catch (error) {
        console.log({ error: error.message });
        throw error;
      }
    }
  );