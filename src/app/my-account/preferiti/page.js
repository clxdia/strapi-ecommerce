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
      <main className="md:w-[98%] w-[100%] flex justify-between">
        <div className="w-[100%]">
          <h1 className="text-[2rem] font-work">I miei Preferiti</h1>
          <EmptyPage />
        </div>
      </main>
    );
  }
  return (
    <main className="md:w-[98%] w-[100%] flex justify-between">
      <div className="w-[100%]">
        <h1 className="text-[2rem] font-work mb-5">I miei Preferiti</h1>
        <div className="flex gap-5 flex-wrap">
          {products?.map((item) => (
            <div className="font-work font-[300] flex-col mb-10 cursor-pointer relative">
              <Link href="/view-all/[id]" as={`/view-all/${item.id}`}>
                <div className="md:w-[250px] md:h-[350px] w-[180px] h-[250px] bg-white items-center self-center flex hover:shadow-xl hover:transition-all transition-all ease-in-out hover:ease-in-out  relative">
                  <Image
                    src={item.img}
                    alt="/"
                    className="object-cover md:w-[250px] md:h-[350px] w-[180px] h-[250px] relative"
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
              <Link href="/view-all/[id]" as={`/view-all/${item.id}`}>
                <h3 className="mt-2 md:w-[250px] w-[180px] ">{item.title}</h3>
                <p className="font-[400] w-fit text-[1rem] hover:text-redish hover:ease-out hover:transition">
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
