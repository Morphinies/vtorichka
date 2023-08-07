import prods from "../slices/prodsSlice";
import catList from "../slices/catListSlice";
import pageNumb from "../slices/pageNumbSlice";
import favorites from "../slices/favoritesSlice";
import sortsList from "../slices/sortsListSlice";
import filtersList from "../slices/filtersListSlice";
import favoritesProd from "../slices/favoritesProdSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        pageNumb,
        favorites,
        favoritesProd,
        prods,
        sortsList,
        catList,
        filtersList,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
