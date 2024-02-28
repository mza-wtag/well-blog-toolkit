import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { filterByTags } from "@features/filterSlice";
import SelectBox from "@components/SelectBox/SelectBox";
import "./filterBlogs.scss";

const FilterBlogs = ({ tags }) => {
  const dispatch = useDispatch();
  const selectedTags = useSelector((state) => state.filter.filteredTags);

  const handleChangeTags = (selectedTags) => {
    const tagsArray = selectedTags?.map((tag) => tag.value);
    dispatch(filterByTags(tagsArray));
  };

  return (
    <div className="filter-blogs">
      <label className="filter-blogs__label">Filter Blogs By Tags:</label>
      <SelectBox
        tags={tags}
        selectedTags={selectedTags}
        handleChangeTags={handleChangeTags}
      />
    </div>
  );
};

FilterBlogs.propTypes = {
  tags: PropTypes.array.isRequired,
};

export default FilterBlogs;
