import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (user) => {
    const token = await axios.post(
      "https://healthy-market-app-production.up.railway.app/users/register",
      {
        name: user.name,
        surname: user.surname,
        birthday: user.birthday,
        nationality: user.nationality,
        adress: user.address,
        email: user.email,
        password: user.password,
      }
    );
    localStorage.setItem("token", token.data);

    return token.data;
  }
);

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (user, { rejectWithValue }) => {
    try {
      const token = await axios.post(
        "https://healthy-market-app-production.up.railway.app/users/loggin",
        {
          email: user.email,
          password: user.password,
        }
      );
      localStorage.setItem("token", token.data);
      return token.data;
    } catch (error) {
      console.log(error.response);
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchGoogleToken = createAsyncThunk(
  "user/loginUserGoogle",
  async () => {
    const token = await axios
      .get("https://healthy-market-app-production.up.railway.app/auth/user", {
        withCredentials: true,
      })
      .catch((err) => {
        console.log(err.message);
      });
    console.log(token.data);
    if (token && token.data) {
      localStorage.setItem("token", token.data);
      return token.data;
    }
  }
);
