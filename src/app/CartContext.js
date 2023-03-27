"use client";

import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartOpen, setCartOpen] = useState(false);

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  return (
    <CartContext.Provider value={{ cartOpen, toggleCart }}>
      {children}
    </CartContext.Provider>
  );
};
