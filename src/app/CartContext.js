"use client";

import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartOpen, setCartOpen] = useState(false);
  const [number, setNumber] = useState(false);

  const toggleCart = () => {
    setCartOpen(!cartOpen);
    setNumber(true && number + 1);
    setTimeout(() => {
      setCartOpen(cartOpen);
    }, 3000);
  };
  return (
    <CartContext.Provider value={{ cartOpen, toggleCart, number }}>
      {children}
    </CartContext.Provider>
  );
};
