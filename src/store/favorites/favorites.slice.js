import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      const prodId = action.payload;
      const isExists = state.some((prod) => prod.id === prodId);
      if (isExists) {
        state = state.filter((prod) => prod.id !== prodId);
      } else {
        state.push(prodId);
      }
    },
  },
});

export const { actions, reducer } = favoritesSlice;
