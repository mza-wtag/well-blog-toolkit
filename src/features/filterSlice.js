import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blogs: [],
  filteredTags: [],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filterByTags(state, action) {
      state.filteredTags = action.payload;
    },
  },
});

export const { filterByTags } = filterSlice.actions;

export default filterSlice.reducer;
