import { createSlice } from "@reduxjs/toolkit";

type IModalInitialState = {
  isUpdateUserModalOpen: boolean;
};

const initialState: IModalInitialState = {
  isUpdateUserModalOpen: false,
};

export const modal = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openUpdateUserMemberModal: (state) => {
      state.isUpdateUserModalOpen = true;
    },
    closeUpdateUserMemberModal: (state) => {
      state.isUpdateUserModalOpen = false;
    },
  },
});

export const { openUpdateUserMemberModal, closeUpdateUserMemberModal } =
  modal.actions;
export default modal.reducer;
