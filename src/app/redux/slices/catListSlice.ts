import api from "../../api";
import { RootState } from "../store/store";
import { IcatItem } from "../../../types/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCatList = createAsyncThunk(
    "categories/fetchAll",
    async () => {
        const catList: IcatItem[] = await api.categoryList.fetchAll();
        return catList;
    }
);

interface IinitialState {
    value: IcatItem[];
    status: string;
    error: string;
}

const initialState: IinitialState = {
    value: [],
    status: "idle",
    error: "",
};

const catListSlice = createSlice({
    name: "sortsList",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchCatList.fulfilled, (state, action) => {
                state.value = action.payload;
                state.status = "succeeded";
            })
            .addCase(fetchCatList.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchCatList.rejected, (state, action) => {
                state.error = action.error.message;
                state.status = "failed";
            });
    },
});

export default catListSlice.reducer;
export const selectCatList = (state: RootState) => state.catList;
