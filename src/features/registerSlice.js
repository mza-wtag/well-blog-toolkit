import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: JSON.parse(localStorage.getItem("users")),
};

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    registerUser: (state, action) => {
      state.users.push(action.payload);
      localStorage.setItem("users", JSON.stringify(state.users));
    },
  },
});

export const { registerUser } = registerSlice.actions;

export default registerSlice.reducer;
