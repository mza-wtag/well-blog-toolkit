import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import BlogDetails from "@components/BlogDetails/BlogDetails";
import { Loader } from "@components/Loader/Loader";
import { getBlogPosts } from "@features/blogSlice";

const Blog = () => {
  const { id } = useParams();
  const blogs = useSelector((state) => state.blog);
  const blogDetails = blogs?.find((blog) => blog.id === id);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBlogPosts());
  }, [dispatch]);
  if (!blogDetails) {
    return <Loader />;
  }

  return <BlogDetails blogDetails={blogDetails} />;
};

export default Blog;
