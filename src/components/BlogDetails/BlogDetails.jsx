import React from "react";
import PropTypes from "prop-types";
import "@components/BlogDetails/blogDetails.scss";
import { useSelector } from "react-redux";
import Button from "@components/Button/Button";
import Edit from "@assets/images/icons/Edit.svg";
import "@styles/common.scss";
import { useNavigate } from "react-router";

const BlogDetails = ({ blogDetails }) => {
  const navigate = useNavigate();
  const { loggedInUser } = useSelector((state) => state.auth);
  const {
    title,
    createdAt,
    image: BannerImage,
    tags,
    body,
    creatorFullName,
    creatorImage,
    userId,
  } = blogDetails;

  const handleEditBlog = () => {
    navigate(`/edit-blog/${blogDetails?.id}`);
  };

  return (
    <div className="blog-details">
      <div className="blog-details__top-wrapper">
        <div className="blog-details__category-badge">{tags}</div>
        <div>
          {loggedInUser.userId === userId && (
            <Button onClick={handleEditBlog}>
              <img src={Edit} alt="Edit Blog" />
            </Button>
          )}
        </div>
      </div>

      <h3 className="blog-details__title">{title}</h3>
      <div className="blog-details__author-info">
        <img
          src={creatorImage}
          alt="Author"
          className="blog-details__author-image"
        />
        <p className="blog-details__author-name">{creatorFullName}</p>
        <p className="blog-details__created-at">{createdAt}</p>
      </div>
      <img
        src={BannerImage}
        className="blog-details__banner"
        alt="Blog Banner"
      />
      <p className="blog-details__body">{body}</p>
    </div>
  );
};

BlogDetails.propTypes = {
  blogDetails: PropTypes.shape({
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};

export default BlogDetails;
