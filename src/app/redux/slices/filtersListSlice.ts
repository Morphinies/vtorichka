import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api";
import { RootState } from "../store/store";

export const fetchFiltersList = createAsyncThunk(
    "filters/fetchFilters",
    async () => {
        const filters = await api.filtersList.fetchAll();
        return filters;
    }
);

interface IinitialState {
    value: string[];
    status: string;
    error: string;
}

const initialState: IinitialState = {
    value: [],
    status: "idle",
    error: "",
};

const filtersListSlice = createSlice({
    name: "filtersList",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchFiltersList.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.value = action.payload;
        });
    },
});

export default filtersListSlice.reducer;

export const selectFiltersList = (state: RootState) => state.filtersList.value;
