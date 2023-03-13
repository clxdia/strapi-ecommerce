import React from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";

const CartButton = () => {
  return (
    <button className="mt-5 flex bg-button text-buttontext p-3 w-[100%] gap-3 justify-center items-center border-[2px] border-button hover:ease-in hover:border-[2px] hover:border-button hover:bg-buttontext hover:text-button ">
      <HiOutlineShoppingBag />
      <p className="text-bold">Aggiungi</p>
    </button>
  );
};

export default CartButton;
