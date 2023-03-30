"use client";

import { createContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartReducer";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartOpen, setCartOpen] = useState(false);
  const [notif, setNotif] = useState(null);

  const toggleCart = () => {
    setCartOpen(!cartOpen);
    setNotif(notif + 1);
    setTimeout(() => {
      setCartOpen(cartOpen);
    }, 3000);
  };

  const removeCartNotif = () => {
    if (notif === 1) {
      setNotif(false);
    } else {
      setNotif(notif - 1);
    }
  };
  return (
    <CartContext.Provider
      value={{ cartOpen, toggleCart, notif, removeCartNotif }}
    >
      {children}
    </CartContext.Provider>
  );
};
