import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  loading: false,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    LOGIN_START: (state, action) => {
      return {
        user: null,
        loading: true,
        error: null,
      };
    },
    LOGIN_SUCCESS: (state, action) => {
      return {
        user: action.payload,
        loading: false,
        error: null,
      };
    },
    LOGIN_FAILURE: (state, action) => {
      return {
        user: null,
        loading: false,
        error: action.payload,
      };
    },
    LOGOUT: (state, action) => {
      return {
        user: null,
        loading: false,
        error: null,
      };
    },
  },
});

export const { LOGIN_FAILURE, LOGIN_START, LOGIN_SUCCESS, LOGOUT } =
  authSlice.actions;

export default authSlice.reducer;
