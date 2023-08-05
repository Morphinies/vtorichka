import prods from "../slices/prodsSlice";
import pageNumb from "../slices/pageNumbSlice";
import favorites from "../slices/favoritesSlice";
import sortsList from "../slices/sortsListSlice";
import { configureStore } from "@reduxjs/toolkit";
import favoritesProd from "../slices/favoritesProdSlice";

export const store = configureStore({
    reducer: { pageNumb, favorites, favoritesProd, prods, sortsList },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
