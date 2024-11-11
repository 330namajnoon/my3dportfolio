import { createSlice } from "@reduxjs/toolkit";
export interface HomeState {
  currentStep: number;
}

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
});

export const { setCurrentStep } = homeSlice.actions;
export default homeSlice.reducer;
