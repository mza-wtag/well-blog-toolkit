import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@features/authSlice";
import registerReducer from "@features/registerSlice";
import blogReducer from "@features/blogSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    register: registerReducer,
    blog: blogReducer,
  },
});
