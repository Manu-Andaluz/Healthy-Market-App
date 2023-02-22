import { createSlice } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";
import { registerUser } from "../actions/userActions";

const initialState = {
  token: localStorage.getItem("token"),
  name: "",
  email: "",
  _id: "",
  isAdmin: false,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    loadUser(state, action) {
      const token = state.token;

      if (token) {
        const user = jwtDecode(token);
        return {
          ...state,
          token,
          name: user.name,
          email: user.email,
          _id: user._id,
          isAdmin: user.isAdmin,
          userLoaded: true,
        };
      } else return { ...state };
    },
  },
  extraReducers: {
    [registerUser.pending]: (state, action) => {
      state.status = "pending";
    },
    [registerUser.fulfilled]: (state, action) => {
      const user = jwtDecode(state.token);
      return {
        ...state,
        token: action.payload,
        name: user.name,
        email: user.email,
        _id: user._id,
        isAdmin: user.isAdmin,
      };
    },
    [registerUser.rejected]: (state, action) => {
      state.status = "rejected";
    },
  },
});

export const { loadUser } = userSlice.actions;

export default userSlice.reducer;
