import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

export interface IpageNumb {
  value: number;
}

const initialState: IpageNumb = {
  value: 1,
};

export const pageNumbSlice = createSlice({
  name: "pageNumb",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    setValue: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export default pageNumbSlice.reducer;
export const { increment, decrement, setValue } = pageNumbSlice.actions;
export const selectPage = (state: RootState) => state.pageNumbReducer.value;
