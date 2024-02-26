import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedInUser: JSON.parse(localStorage.getItem("loggedInUser")),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.loggedInUser = action.payload;
      localStorage.setItem("loggedInUser", JSON.stringify(action.payload));
    },
    logoutUser: (state) => {
      state.loggedInUser = null;
      localStorage.removeItem("loggedInUser");
    },
  },
});

export const { loginUser, logoutUser } = authSlice.actions;

export default authSlice.reducer;
