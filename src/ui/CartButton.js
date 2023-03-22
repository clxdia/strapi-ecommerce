"use client";

import React, { useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartReducer";

const CartButton = ({ item }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  return (
    <button
      className="mt-5 flex bg-button text-buttontext p-3 w-[100%] gap-3 justify-center items-center border-[2px] border-button hover:ease-in hover:border-[2px] hover:border-button hover:bg-buttontext hover:text-button"
      onClick={() =>
        dispatch(
          addToCart({
            id: item.id,
            title: item.attributes.title,
            img: item.attributes.img.data.attributes.url,
            price: item.attributes.price,
            quantity,
            category: item.attributes.categories.data[0].attributes.title,
          })
        )
      }
    >
      <HiOutlineShoppingBag />
      <p className="text-bold">Aggiungi al carrello</p>
    </button>
  );
};

export default CartButton;
