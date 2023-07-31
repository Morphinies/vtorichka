import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import api from "../../api";
import { RootState } from "../store/store";

interface Ifavorites {
  value: string[];
}
const initialState: Ifavorites = {
  value: [],
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<string>) => {
      state.value.push(action.payload);
    },
    delFavorite: (state, action: PayloadAction<string>) => {
      state.value.splice(state.value.indexOf(action.payload), 1);
    },
    setFavorites: (state, action: PayloadAction<string[]>) => {
      state.value = action.payload;
    },
  },
});

export const setFavoritesAsync = () => {
  return async (dispatch: any, state: any) => {
    try {
      const favorites = await api.favorites.fetchAll();
      dispatch(favoritesSlice.actions.setFavorites(favorites));
    } catch (e) {
      console.log(e);
    }
  };
};

export const toggleFavoritesAsync = (id: string) => {
  return async (dispatch: any, state: any) => {
    try {
      const updatedFavorites = await api.favorites.update(id);
      dispatch(favoritesSlice.actions.setFavorites(updatedFavorites));
    } catch (e) {
      console.log(e);
    }
  };
};

export default favoritesSlice.reducer;
export const { addFavorite, delFavorite, setFavorites } =
  favoritesSlice.actions;
export const selectFavorites = (state: RootState) =>
  state.favoritesReducer.value;
