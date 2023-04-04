"use client";

import React, { useContext, useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { CartContext } from "../app/CartContext";
import { addToCart } from "../redux/cartReducer";

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
      className="mt-3 mb-4 flex bg-blueish text-buttontext p-3 w-[100%] gap-3 justify-center items-center border-[2px] border-blueish hover:ease-in hover:border-[2px] hover:border-blueish hover:bg-buttontext hover:text-blueish"
      onClick={handleClick}
    >
      <p className=" font-satoshi font-bold uppercase tracking-wide">
        Aggiungi al carrello
      </p>
    </button>
  );
};

export default CartButton;
