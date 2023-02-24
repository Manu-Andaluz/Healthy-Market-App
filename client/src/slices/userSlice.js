import { createSlice } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";
import { registerUser, loginUser } from "../actions/userActions";

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
    logoutUser(state, action) {
      localStorage.removeItem("token");
      return {
        ...state,
        token: "",
        name: "",
        email: "",
        _id: "",
        isAdmin: false,
      };
    },
  },
  extraReducers: {
    [registerUser.pending]: (state, action) => {
      console.log("pending 1", state);
      state.status = "pending";
      console.log("pending 2", state);
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
    [loginUser.pending]: (state, action) => {
      state.status = "pending";
    },
    [loginUser.fulfilled]: (state, action) => {
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
    [loginUser.rejected]: (state, action) => {
      state.status = "rejected";
    },
  },
});

export const { loadUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
