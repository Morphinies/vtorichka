import { configureStore } from "@reduxjs/toolkit";
import pageNumbReducer from "../slices/pageNumbSlice";

export const store = configureStore({
  reducer: { pageNumbReducer },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
