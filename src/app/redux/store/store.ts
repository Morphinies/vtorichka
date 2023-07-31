import { configureStore } from "@reduxjs/toolkit";
import pageNumbReducer from "../slices/pageNumbSlice";
import favoritesReducer from "../slices/favoritesSlice";

export const store = configureStore({
  reducer: { pageNumbReducer, favoritesReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
