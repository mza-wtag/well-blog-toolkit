// registerSlice.js

import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  users: JSON.parse(localStorage.getItem("users")) || [],
};

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    registerUser: (state, action) => {
      const {
        firstName,
        lastName,
        fullName,
        subtitle,
        about,
        profileImage,
        ...rest
      } = action.payload;

      const userId = uuidv4();
      const newUser = {
        ...rest,
        userId,
        fullName: fullName || `${firstName} ${lastName}`,
        subtitle: subtitle || null,
        about: about || null,
        profileImage: profileImage || null,
      };

      state.users.push(newUser);
      localStorage.setItem("users", JSON.stringify(state.users));
    },
    updateUser: (state, action) => {
      const updatedUser = action.payload;
      const index = state.users.findIndex(
        (user) => user.userId === updatedUser.userId
      );
      if (index !== -1) {
        state.users[index] = updatedUser;
        localStorage.setItem("users", JSON.stringify(state.users));
      }
    },
  },
});

export const { registerUser, updateUser } = registerSlice.actions;

export default registerSlice.reducer;
