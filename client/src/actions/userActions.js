import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const registerUser = createAsyncThunk("user/userFetch", async (user) => {
  console.log(user);
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
});

export const loginUser = createAsyncThunk("user/userFetch", async (user) => {
  const token = await axios.post(
    "https://healthy-market-app-production.up.railway.app/users/loggin",
    {
      email: user.email,
      password: user.password,
    }
  );
  localStorage.setItem("token", token.data.accessToken);
  return token.data.accessToken;
});
