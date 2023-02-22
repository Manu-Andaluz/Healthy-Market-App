import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const registerUser = createAsyncThunk("user/userFetch", async (user) => {
  const token = await axios.post("http://localhost:5000/users/register", {
    name: user.name,
    surname: user.surname,
    birthday: user.birthday,
    nationality: user.nationality,
    adress: user.adress,
    email: user.email,
    password: user.password,
  });
  localStorage.setItem("token", token.data);

  return token.data;
});
