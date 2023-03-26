import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartReducer";
import favesReducer from "./favesReducer";

export const store = configureStore({
  reducer: { cart: cartReducer, faves: favesReducer },
});
