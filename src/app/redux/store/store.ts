import prods from "../slices/prodsSlice";
import pageNumb from "../slices/pageNumbSlice";
import favorites from "../slices/favoritesSlice";
import { configureStore } from "@reduxjs/toolkit";
import favoritesProd from "../slices/favoritesProdSlice";

export const store = configureStore({
  reducer: { pageNumb, favorites, favoritesProd, prods },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
