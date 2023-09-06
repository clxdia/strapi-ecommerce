"use client";

import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { CartContext } from "../app/CartContext";
import { addToCart } from "../redux/features/cartReducer";

const CartButton = ({ item }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const { toggleCart } = useContext(CartContext);

  const handleClick = () => {
    dispatch(
      addToCart({
        id: item.id,
        title: item.attributes.title,
        img: item.attributes.img.data.attributes.url,
        price: item.attributes.price,
        quantity,
        category: item.attributes.categories.data[0].attributes.title,
      })
    );
    toggleCart();
  };
  return (
    <button
      className="mt-3 mb-4 flex bg-blueish text-buttontext p-3 w-[100%] gap-3 justify-center items-center border-[2px] border-blueish hover:ease-in transition ease-in-out delay-150   hover:shadow-headline/50 hover:shadow-xl rounded-xl"
      onClick={handleClick}
    >
      <p className="font-satoshi font-bold uppercase tracking-wide">
        Aggiungi al carrello
      </p>
    </button>
  );
};

export default CartButton;
