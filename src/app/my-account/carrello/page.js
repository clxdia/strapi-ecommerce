"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { TbTrash } from "react-icons/tb";
import { SlHandbag } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../../../redux/cartReducer";
import { CartContext } from "../../CartContext";

const Carrello = () => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  const { removeCartNotif } = useContext(CartContext);

  if (products.length === 0) {
    return (
      <main className="md:w-[98%] w-[100%] flex justify-between">
        <div className="w-[100%]">
          <h1 className="text-[2rem] font-work">Il mio carrello</h1>
          <div className="m-auto max-w-[350px] h-auto  text-center mt-20 mb-20">
            <SlHandbag className="m-auto p-5" size={100} />
            <p className="font-work mb-3">Il tuo carrello è vuoto!</p>
            <button
              className="mt-5 flex bg-button text-buttontext font-semibold p-3 w-[400px
        ] m-auto gap-3 justify-center items-center border-[2px] border-button hover:ease-in hover:border-[2px] hover:border-button hover:bg-buttontext hover:text-button hover:cursor-pointer "
            >
              <Link
                href="./view-all"
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
    <main className="md:w-[98%] w-[100%] flex justify-between">
      <div className="w-[100%]">
        <h1 className="text-[2rem] font-work mb-5">Il mio carrello</h1>
        {products?.map((item) => (
          <div key={item.id} className="p-3">
            <div className="flex gap-4">
              <Image src={item.img} alt={item.title} width="150" height="150" />
              <div className="w-[100%] relative">
                <p className="uppercase text-[12px] text-gray-400 font-medium">
                  {item.category}
                </p>
                <p className="font-bold text-[18px]">{item.title}</p>
                <p className="font-bold text-[18px]">€{item.price}</p>
                <p className="text-[15px]">Quantità: {item.quantity}</p>
                <button
                  className="border-1 border-gray-300 border w-fit p-2 gap-2 items-center flex bottom-0 absolute right-10"
                  onClick={() =>
                    dispatch(removeItem(item.id)) && removeCartNotif()
                  }
                >
                  <TbTrash size={20} stroke="grey" />
                  <p>Elimina prodotto</p>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Carrello;
