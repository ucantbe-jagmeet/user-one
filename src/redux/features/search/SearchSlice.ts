import { createSlice } from "@reduxjs/toolkit";

interface IinitialState {
  searchQuery: string;
}

let initialState: IinitialState = {
  searchQuery: "",
};

const SearchSlice = createSlice({
  name: "SearchSlice",
  initialState,
  reducers: {
    setSearchQuery: (state, { payload }) => {
      state.searchQuery = payload;
    },
  },
});

export const { setSearchQuery } = SearchSlice.actions;
export default SearchSlice.reducer;
