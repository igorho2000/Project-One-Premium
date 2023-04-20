import { configureStore } from "@reduxjs/toolkit";
import utilReducer from "./utilSlice";

export const store = configureStore({
  reducer: {
    util: utilReducer,
  },
});
