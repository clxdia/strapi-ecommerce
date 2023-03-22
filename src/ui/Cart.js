"use client";
import Image from "next/image";
import React from "react";

import { RiDeleteBin5Fill } from "react-icons/ri";
import { useSelector } from "react-redux";

const Cart = () => {
  const products = useSelector((state) => state.cart.products);

  if (products.length === 0) {
    return (
      <div className="rounded-lg absolute right-[35px] md:top-[80px] z-[99] bg-white p-[20px] border-[1px] border-footer top-[60px] h-[100%]">
        <h1 className="font-bold">Il mio carrello</h1>
        <h2 className="p-5">Il carrello è vuoto.</h2>
      </div>
    );
  }
  return (
    <div className="rounded-lg absolute right-[35px] md:top-[80px] z-[99] bg-white p-[20px] border-[1px] border-footer top-[60px] w-[400px]">
      <h1 className="font-bold">Il mio carrello</h1>
      {products?.map((item) => (
        <div key={item.id}>
          <div className="flex gap-4 mt-5 ">
            <Image src={item.img} alt={item.title} width="100" height="100" />
            <div className="w-[100%] relative">
              <p className="uppercase text-[12px] text-gray-400 font-medium">
                {item.category}
              </p>
              <p className="font-bold text-[15px]">{item.title}</p>
              <p className="font-bold text-[15px]">€{item.price}</p>
              <p className="text-[14px]">Quantità: {item.quantity}</p>
              <div className="absolute bottom-0 right-0">
                <RiDeleteBin5Fill size={20} fill="grey" />
              </div>
            </div>
          </div>
        </div>
      ))}
      <hr className="mt-5 mb-5"></hr>
      <div className="text-[14px] flex justify-between">
        <p>Ordine</p>
        <p>€67.99</p>
      </div>
      <div className="mt-2 text-[14px] flex justify-between">
        <p>Spedizione</p>
        <p>€5.99</p>
      </div>
      <hr className="mt-5 mb-3"></hr>
      <div className="mt-1 text-[14px] mb-5 flex justify-between">
        <p className="text-[16px]">
          <b>Totale</b>
        </p>
        <p className="text-[16px]">
          <b>€78.99</b>
        </p>
      </div>
      <button className="w-full bg-button text-white p-4 font-semibold">
        Acquista Ora
      </button>
      <button className="font-semibold mt-2 w-full bg-white border-2 border-button text-button p-4">
        Visualizza Carrello
      </button>
    </div>
  );
};

export default Cart;
