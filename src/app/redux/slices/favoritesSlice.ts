import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IinitialState {
  value: string[];
}
const initialState: IinitialState = {
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
