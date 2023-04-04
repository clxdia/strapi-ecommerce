"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TbTrash } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, resetCart } from "../redux/cartReducer";

const Cart = ({ open }) => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => (total += item.quantity * item.price));
    return total.toFixed(2);
  };

  const totalOrder = () => {
    let total = 0;
    products.forEach((item) => (total += item.quantity * item.price + 5.99));
    return total.toFixed(2);
  };

  if (products.length === 0) {
    return (
      <div
        open={open}
        className="rounded-lg absolute right-[35px] md:top-[70px] z-[99] bg-white p-[30px] border-[1px] border-footer top-[65px] md:h-[100%]  "
      >
        <h1 className="font-bold text-[16px]">Il mio carrello</h1>
        <h2 className="p-5 font-medium text-[16px]">Il carrello è vuoto.</h2>
      </div>
    );
  }
  if (products.length > 0) {
    return (
      <div
        open={open}
        className="rounded-lg absolute right-[35px] md:top-[70px] z-[99] bg-white p-[20px] border-[1px] border-footer top-[60px] w-[400px] "
      >
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
                <button
                  className="absolute bottom-0 right-0"
                  onClick={() => dispatch(removeItem(item.id))}
                >
                  <TbTrash size={20} stroke="grey" />
                </button>
              </div>
            </div>
          </div>
        ))}
        <p
          className="text-redish text-[12px] mt-3 hover:underline hover:underline-offset-2 hover:cursor-pointer hover:decoration-redish"
          onClick={() => dispatch(resetCart())}
        >
          Reset Cart
        </p>
        <hr className="mt-3 mb-4"></hr>
        <div className="text-[14px] flex justify-between">
          <p>Ordine</p>
          <p>€{totalPrice()}</p>
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
            <b>€{totalOrder()} </b>
          </p>
        </div>
        <button className="w-full bg-button text-white p-4 font-semibold">
          <Link href="/my-account/carrello">Acquista Ora</Link>
        </button>
        <button className="font-semibold mt-2 w-full bg-white border-2 border-button text-button p-4">
          <Link href="/my-account/carrello">Visualizza Carrello</Link>
        </button>
      </div>
    );
  }
};

export default Cart;
