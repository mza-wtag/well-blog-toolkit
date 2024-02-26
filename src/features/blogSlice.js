import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const blogSlice = createSlice({
  name: "blog",
  initialState: [],
  reducers: {
    addBlogPost: (state, action) => {
      const id = uuidv4();
      const createdAt = new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "2-digit",
        year: "numeric",
      });
      const postWithId = {
        ...action.payload,
        id,
        createdAt,
      };
      state.unshift(postWithId);
      localStorage.setItem("blogPosts", JSON.stringify(state));
    },
    getBlogPosts: (state) => {
      const existingPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];
      return existingPosts;
    },
  },
});

export const { addBlogPost, getBlogPosts } = blogSlice.actions;

export default blogSlice.reducer;
