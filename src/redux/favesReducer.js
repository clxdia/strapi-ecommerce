import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const favesSlice = createSlice({
  name: "faves",
  initialState,
  reducers: {
    addToFaves: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },
    removeItem: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
    },
    resetFaves: (state) => {
      state.products = [];
    },
  },
});

export const { resetFaves, removeItem, addToFaves } = favesSlice.actions;

export default favesSlice.reducer;
