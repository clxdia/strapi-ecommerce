"use client";

import React, { useState } from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { addToFaves } from "../redux/favesReducer";
import { useDispatch } from "react-redux";

const FaveButton = ({ item }) => {
  const [fill, setFill] = useState(null);
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const toggleHeart = () => {
    setFill(!fill);
  };

  if (fill) {
    return (
      <div
        className="bg-white p-4 mt-4 flex items-center rounded-[100%] shadow-lg"
        onClick={() => toggleHeart(!fill)}
      >
        <BsHeartFill fill="red" size={20} />
      </div>
    );
  }
  return (
    <div
      className="bg-white p-4 mt-4 flex items-center rounded-[100%] shadow-lg"
      onClick={() =>
        dispatch(
          addToFaves({
            id: item.id,
            title: item.attributes.title,
            img: item.attributes.img.data.attributes.url,
            price: item.attributes.price,
            quantity,
            category: item.attributes.categories.data[0].attributes.title,
          })
        ) && toggleHeart(fill)
      }
    >
      <BsHeart stroke="red" size={20} />
    </div>
  );
};

export default FaveButton;
