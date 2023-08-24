import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setHeaders } from "../slices/apiSlice";

export const orderFetch = createAsyncThunk(
  "order/orderSuccess",
  async ({ cart, userName, userEmail }) => {
    try {
      axios.post("https://healthy-market-app-production.up.railway.app/order/orderSuccess", {
        cart,
        userName,
        userEmail,
      });

    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);
