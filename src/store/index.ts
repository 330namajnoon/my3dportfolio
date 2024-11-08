import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "../slices/homeSlice";

export const store = configureStore({
  reducer: {
    home: homeSlice,
  },
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
