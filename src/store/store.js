import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./favorites/favorites.slice";

export const store = configureStore({
  reducer: reducer,
});
