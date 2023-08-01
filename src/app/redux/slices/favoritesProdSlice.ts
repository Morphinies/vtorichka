import api from "../../api";
import { RootState } from "../store/store";
import { Iprod } from "../../../types/types";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchFavoritesProd = createAsyncThunk<any, any, any>(
  "favoritesProd/fetchFavoritesProd",
  async (favorites) => {
    const favoritesProdList = await api.products.fetchFavorites(favorites);
    return favoritesProdList;
  }
);

interface IfavoritesProd {
  value: Iprod[];
  status: string;
  error: string;
}
const initialState: IfavoritesProd = {
  value: [],
  status: "idle",
  error: "",
};

export const favoritesProdSlice = createSlice({
  name: "favoritesProd",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFavoritesProd.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchFavoritesProd.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.value = action.payload;
      })
      .addCase(fetchFavoritesProd.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default favoritesProdSlice.reducer;
export const selectFavoritesProd = (state: RootState) =>
  state.favoritesProd.value;
