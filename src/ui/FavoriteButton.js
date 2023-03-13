import React from "react";
import { HiHeart } from "react-icons/hi";

export default function FavoriteButton() {
  return (
    <>
      <HiHeart
        size={30}
        className="absolute bottom-2 right-2 hover:fill-redish text-white stroke-[1px] stroke-black hover:stroke-redish z-[90]"
      />
    </>
  );
}
