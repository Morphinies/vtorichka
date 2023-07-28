import { configureStore } from "@reduxjs/toolkit";
import pageNumbReducer from "../slices/pageNumbSlice";

export default configureStore({
  reducer: { pageNumbReducer },
});
