import { createSlice } from "@reduxjs/toolkit";

interface IinitialState {
  userId: string;
}

let initialState: IinitialState = {
  userId: "",
};

const tasksIdSlice = createSlice({
  name: "tasksIdSlice",
  initialState,
  reducers: {
    setUserIdValue: (state, { payload }) => {
      state.userId = payload;
    },
  },
});

export const { setUserIdValue } = tasksIdSlice.actions;
export default tasksIdSlice.reducer;
