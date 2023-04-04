"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TbTrash } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import EmptyPage from "../../../ui/EmptyPage";
import { removeItem } from "../../../redux/favesReducer";

const Preferiti = () => {
  const products = useSelector((state) => state.faves.products);
  const dispatch = useDispatch();

  if (products.length === 0) {
    return (
      <main className="w-[100%] md:w-[95%] mx-auto flex">
        <div className="w-[100%]">
          <h1 className="md:text-[2rem] text-center font-medium md:text-left text-[20px] mb-5">
            I miei Preferiti
          </h1>
          <EmptyPage />
        </div>
      </main>
    );
  }
  return (
    <main className="w-[100%] md:w-[95%] mx-auto flex justify-between">
      <div className="w-[100%]">
        <h1 className="md:text-[2rem] text-center md:text-left font-work text-[20px] mb-5">
          I miei Preferiti
        </h1>
        <div className="flex gap-4 flex-row flex-wrap h-full w-full">
          {products?.map((item) => (
            <div
              key={item.id}
              className="font-work font-[300] flex-col mb-10 cursor-pointer relative flex-1 flex-shrink-0 w-1/2"
            >
              <Link
                href="/view-all/[id]"
                as={`/view-all/${item.id}`}
                className="w-fit"
              >
                <div className="bg-white items-center self-center flex hover:shadow-xl hover:transition-all transition-all ease-in-out hover:ease-in-out relative w-fit">
                  <Image
                    src={item.img}
                    alt="/"
                    className="object-cover w-[50vw] h-[60vw] relative"
                    width="250"
                    height="350"
                  />
                </div>
              </Link>
              <button
                className="absolute p-3 bg-white shadow-lg rounded-full top-0 mt-2 right-2 hover:transition-all transition-all ease-in-out hover:ease-in-out hover:scale-105"
                onClick={() => dispatch(removeItem(item.id))}
              >
                <TbTrash size={20} stroke="grey" />
              </button>
              <Link
                href="/view-all/[id]"
                as={`/view-all/${item.id}`}
                className="h-[3.5rem] flex flex-col justify-between"
              >
                <h3 className="mt-2 text-[12px]">{item.title}</h3>
                <p className="font-[400] w-fit text-[15px] hover:text-redish hover:ease-out hover:transition">
                  €{item.price}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Preferiti;
