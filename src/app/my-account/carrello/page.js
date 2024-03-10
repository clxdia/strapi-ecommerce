"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { TbTrash } from "react-icons/tb";
import { SlHandbag } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../../../redux/features/cartReducer";
import { CartContext } from "../../CartContext";

const Carrello = () => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  const { removeCartNotif } = useContext(CartContext);

  if (products.length === 0) {
    return (
      <main className="md:w-[95%] w-[100%] mx-auto flex font-clash justify-between md:h-screen">
        <div className="w-[100%]">
          <h1 className="md:text-[2rem] text-center font-medium md:text-left text-[20px]">
            Il mio carrello
          </h1>
          <div className="m-auto max-w-[350px] h-auto  text-center mt-20 mb-20">
            <SlHandbag className="m-auto p-5" size={100} aria-hidden="true" />
            <p className="mb-3">Il tuo carrello è vuoto!</p>
            <button className="mt-5 mb-4 flex bg-blueish text-buttontext p-3 w-[80%] m-auto gap-3 justify-center items-center border-[2px] border-blueish hover:ease-in transition ease-in-out delay-150   hover:shadow-headline/50 hover:shadow-xl rounded-xl font-satoshi font-bold uppercase tracking-wide">
              <Link
                href="/view-all"
                className="text-bold hover:cursor-pointer"
              >
                Continua lo shopping
              </Link>
            </button>
          </div>
        </div>
      </main>
    );
  }
  return (
    <main className="w-[95%] mx-auto flex h-auto justify-between pb-[5rem] md:pb-[15rem] font-clash">
      <div className="md:m-0 w-full m-auto">
        <h1 className="md:text-[2rem] text-center font-medium md:text-left text-[20px] mb-5">
          Il mio carrello
        </h1>
        {products?.map((item) => (
          <div key={item.id} className="mb-3 w-[100%]">
            <div className="flex gap-4 relative">
              <Link
                className="flex gap-4"
                href="/view-all/[slug]"
                as={`/view-all/${item.slug}`}
              >
                <p>{item.slug}</p>
                <Image
                  src={item.img}
                  alt={item.title}
                  width="150"
                  height="150"
                  className="w-[190px] h-[250px] min-w-[190px] min-h-[250px] max-w-[190px] max-h-[250px]"
                />
                <div className="w-[100%]">
                  <p className="uppercase text-[12px] text-gray-400 font-medium">
                    {item.category}
                  </p>
                  <p className="font-medium font-satoshi text-[18px]">
                    {item.title}
                  </p>
                  <p className="font-satoshi font-bold text-[17px]">
                    €{item.price}
                  </p>
                  <p className="text-[15px]">Quantità: {item.quantity}</p>
                </div>
              </Link>
              <button
                className="border-1 text-[13px] uppercase font-satoshi text-gray-600 md:border-gray-300 md:w-fit md:border p-2 gap-2 items-center flex bottom-0 absolute md:right-10 right-0"
                onClick={() =>
                  dispatch(removeItem(item.id)) && removeCartNotif()
                }
              >
                <TbTrash size={20} stroke="grey" aria-hidden="true" />
                <p className="hidden md:block">Elimina prodotto</p>
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Carrello;
