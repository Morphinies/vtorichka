import api from "../../api";
import { RootState } from "../store/store";
import { Iprod } from "../../../types/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProds = createAsyncThunk("prods/fetchProds", async () => {
  const prods = await api.products.fetchAll();
  return prods;
});

export const updateProds = createAsyncThunk<any, any>(
  "prods/updateProds",
  async (paramsStr) => {
    const prods = await api.products.fetchByParams(paramsStr);
    return prods;
  }
);

interface IinitialState {
  value: Iprod[];
  status: string;
  error: string;
}

const initialState: IinitialState = {
  value: [],
  status: "idle",
  error: "",
};

export const prodsSlice = createSlice({
  name: "prodsSlice",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProds.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProds.fulfilled, (state, action) => {
        state.value = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchProds.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = "failed";
      })
      .addCase(updateProds.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateProds.fulfilled, (state, action) => {
        state.value = action.payload;
        state.status = "succeeded";
      })
      .addCase(updateProds.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = "failed";
      });
  },
});

export default prodsSlice.reducer;
export const selectProds = (state: RootState) => state.prods.value;
