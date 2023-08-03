import React from "react";
import { createSlice } from "@reduxjs/toolkit";

export interface User {
  id: number;
  name: string;
}

interface UserState {
  user: User[];
}

const initialState: UserState = {
  user: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {},
  },
});

export default userSlice;
