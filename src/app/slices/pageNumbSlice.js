import { createSlice } from "@reduxjs/toolkit";

export const pageNumbSlice = createSlice({
  name: "pageNumb",
  initialState: {
    value: 1,
  },
  reducer: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    setValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { increment, decrement, setValue } = pageNumbSlice.actions;

export default pageNumbSlice.reducer;
