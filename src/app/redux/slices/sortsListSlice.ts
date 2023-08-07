import api from "../../api";
import { RootState } from "../store/store";
import { IsortsItem } from "./../../api/api/sortings.api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchSortsList = createAsyncThunk("sorts/fetchAll", async () => {
    const sortsList: IsortsItem[] = await api.sortingList.fetchAll();
    return sortsList;
});

interface IinitialState {
    value: IsortsItem[];
    status: string;
    error: string;
}

const initialState: IinitialState = {
    value: [],
    status: "idle",
    error: "",
};

const sortsListSlice = createSlice({
    name: "sortsList",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchSortsList.fulfilled, (state, action) => {
            state.value = action.payload;
            state.status = "succeeded";
        });
    },
});

export default sortsListSlice.reducer;
export const selectSortsList = (state: RootState) => state.sortsList;
