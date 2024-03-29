import { configureStore } from "@reduxjs/toolkit";
import SearchSlice from "./features/search/SearchSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import Modal from "./features/modal/ModalSlice";
import tasksIdSlice from "./features/taskId/taskIdSlice";
export const store = configureStore({
  reducer: {
    SearchSlice,
    Modal,
    tasksIdSlice,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
