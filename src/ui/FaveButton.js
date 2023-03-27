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
        className="bg-white w-[35px] h-[35px] md:w-[40px] md:h-[40px] p-2 flex items-center rounded-full shadow-lg"
        onClick={() => toggleHeart(!fill)}
      >
        <BsHeartFill fill="red" className="w-[20px] md:w-[30px] mt-[2px]" />
      </div>
    );
  }
  return (
    <div
      className="bg-white w-[35px] h-[35px] md:w-[40px] md:h-[40px] p-2 flex items-center rounded-full shadow-lg"
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
      <BsHeart stroke="red" className="w-[20px] md:w-[60px] mt-[2px]" />
    </div>
  );
};

export default FaveButton;
