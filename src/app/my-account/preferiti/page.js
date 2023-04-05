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
          <h1 className="md:text-[2rem] font-clash text-center font-medium md:text-left text-[20px] mb-5">
            I miei Preferiti
          </h1>
          <EmptyPage />
        </div>
      </main>
    );
  }
  return (
    <main className="w-[100%] md:w-[95%] mx-auto flex justify-between pb-[10rem]">
      <div className="w-[100%]">
        <h1 className="md:text-[2rem] font-clash text-center font-medium md:text-left text-[20px] mb-5">
          I miei Preferiti
        </h1>
        <div className="flex flex-wrap h-full md:gap-[1.8vw] gap-[3vw] sm:gap-auto">
          {products?.map((item) => (
            <div
              key={item.id}
              className="font-satoshi flex-col mb-2 cursor-pointer flex-shrink-0 md:w-[23%] sm:w-[31%] w-[48%] relative"
            >
              <Link
                href="/view-all/[id]"
                as={`/view-all/${item.id}`}
                className="relative w-fit"
              >
                <div className="bg-white items-center self-center flex hover:shadow-xl h-auto hover:transition hover:ease-in-out md:hover:scale-105">
                  <Image
                    src={item.img}
                    alt="/"
                    className="md:w-[60vw] md:h-[25vw] w-[45vw] h-[60vw] sm:w-[70vw] sm:h-[40vw] object-cover relative"
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
                <h3 className="font-satoshi mt-2 md:w-fit md:text-[15px] text-[13px] decoration-black no-underline hover:underline decoration-solid decoration-1 underline-offset-4">
                  {item.title}
                </h3>
                <p className="font-medium w-fit md:text-[16px] text-[14px] text-redish">
                  € {item.price}
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
