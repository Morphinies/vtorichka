import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api";
import { RootState } from "../store/store";

export const fetchFavorites = createAsyncThunk(
    "favorites/fetchFavorites",
    async () => {
        const favoritesList = await api.favorites.fetchAll();
        return favoritesList;
    }
);

export const updateFavorites = createAsyncThunk<any, any, any>(
    "favorites/updateFavorites",
    async (id) => {
        const updatedFavorites = await api.favorites.update(id);
        return updatedFavorites;
    }
);

interface Ifavorites {
    value: string[];
    status: string;
    error: string;
}
const initialState: Ifavorites = {
    value: [],
    status: "idle",
    error: "",
};

export const favoritesSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchFavorites.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchFavorites.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.value = action.payload;
            })
            .addCase(fetchFavorites.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            .addCase(updateFavorites.pending, (state) => {
                state.status = "loading";
            })
            .addCase(updateFavorites.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.value = action.payload;
            })
            .addCase(updateFavorites.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export default favoritesSlice.reducer;
export const selectFavorites = (state: RootState) => state.favorites.value;
