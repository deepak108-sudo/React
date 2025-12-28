import { createSlice } from "@reduxjs/toolkit";

const sliceCart = createSlice({
  name: "slice1",
  initialState: { count: 0 },
  reducers: {
    Increment: (state) => {
      state.count = state.count + 1;
    },
    Decrement: (state) => {
      state.count = state.count - 1;
    },
    Reset: (state) => {
      state.count = 0;
    },
    customIncrement: (state, action) => {
      state.count = state.count + action.payload;
    },
  },
});
export const { Increment, Decrement, Reset, customIncrement } =
  sliceCart.actions; //It export all actions.

//state={count:0} <- state gives the latest value
export default sliceCart.reducer;
