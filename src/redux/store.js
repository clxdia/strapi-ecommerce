import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartReducer";
import favesReducer from "./features/favesReducer";

export const store = configureStore({
  reducer: { cart: cartReducer, faves: favesReducer },
});
