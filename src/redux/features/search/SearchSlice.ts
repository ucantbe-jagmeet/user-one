import { createSlice } from "@reduxjs/toolkit";

interface IinitialState {
  searchQuery: string;
  genderFilter: string[];
  statusFilter: string[];
}

let initialState: IinitialState = {
  searchQuery: "",
  genderFilter: [],
  statusFilter: [],
};

const SearchSlice = createSlice({
  name: "SearchSlice",
  initialState,
  reducers: {
    setSearchQuery: (state, { payload }) => {
      state.searchQuery = payload;
    },
    setGenderFilter: (state, { payload }) => {
      state.genderFilter = payload;
    },
    setStatusFilter: (state, { payload }) => {
      state.statusFilter = payload;
    },
  },
});

export const { setSearchQuery, setGenderFilter, setStatusFilter } =
  SearchSlice.actions;
export default SearchSlice.reducer;
