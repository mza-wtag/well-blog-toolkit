import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = JSON.parse(localStorage.getItem("blogPosts")) || [];

export const blogSlice = createSlice({
  name: "blog",
  initialState,
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
    getBlogPosts: () => {
      const existingPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];
      return existingPosts;
    },
    editBlogPost: (state, action) => {
      const { postId, updatedPost } = action.payload;
      const updatedPosts = state.map((post) =>
        post.id === postId ? { ...post, ...updatedPost } : post
      );
      localStorage.setItem("blogPosts", JSON.stringify(updatedPosts));
      return updatedPosts;
    },
  },
});

export const { addBlogPost, getBlogPosts, editBlogPost } = blogSlice.actions;

export default blogSlice.reducer;
