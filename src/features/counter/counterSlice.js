import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quantity: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.quantity += 1;
    },
    decrement: (state) => {
      if (state.quantity > 0) {
        state.quantity -= 1;
      }
    },
    reset: (state) => {
      state.quantity = 0;
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;