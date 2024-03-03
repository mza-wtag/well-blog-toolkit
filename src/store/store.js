import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@features/authSlice";
import registerReducer from "@features/registerSlice";
import blogReducer from "@features/blogSlice";
import searchReducer from "@features/searchSlice";
import filterReducer from "@features/filterSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    register: registerReducer,
    blog: blogReducer,
    search: searchReducer,
    filter: filterReducer,
  },
});
