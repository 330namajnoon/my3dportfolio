import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import config from "../config";

export interface HomeState {
  currentStep: number;
}

const getAsset = createAsyncThunk("home/getAsset", async () => {
  const response = await fetch(config.SERVER_BASE_URL + "/asset/sina");
  const data = await response.json();
  console.log(data);
  return data;
});

const initialState: HomeState = {
  currentStep: 0,
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setCurrentStep: (state, action) => {
      state.currentStep = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAsset.fulfilled, (state, action) => {
      console.log(action.payload);
    });
  },
});

export const { setCurrentStep } = homeSlice.actions;
export default homeSlice.reducer;
