import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AppleState {
  apples: number;
  shaking: boolean;
  basket: boolean;
}

const initialState: AppleState = {
  apples: 5, 
  shaking: false,
  basket: false,
};

export const appleSlice = createSlice({
  name: "apple",
  initialState,
  reducers: {
    shakeTree: (state) => {
      state.shaking = true;
    },
    stopShaking: (state) => {
      state.shaking = false;
    },
    dropApples: (state) => {
      state.apples = 0;
    },
    fillBasket: (state) => {
      state.basket = true;
    },
  },
});

export const { shakeTree, stopShaking, dropApples, fillBasket } =
  appleSlice.actions;

export default appleSlice.reducer;
