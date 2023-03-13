import React from "react";

import { RiDeleteBin5Fill } from "react-icons/ri";

const Cart = () => {
  return (
    <div className="absolute right-[20px] md:top-[80px] z-[99] bg-white p-[20px] border-[1px] border-footer top-[60px]">
      <h1>Products in your cart</h1>
      <RiDeleteBin5Fill />
    </div>
  );
};

export default Cart;
