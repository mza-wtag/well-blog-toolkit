import React from "react";
import { useSelector } from "react-redux";
import HomeBanner from "@components/HomeBanner/HomeBanner";
import BlogList from "@components/BlogList/BlogList";

const Home = () => {
  const blogs = useSelector((state) => state.blog);
  return (
    <div className="container">
      <HomeBanner blog={blogs[0]} />
      <h2>Latest Posts</h2>
      <BlogList blogs={blogs} />
    </div>
  );
};

export default Home;
