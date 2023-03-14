"use client";

import Link from "next/link";
import React from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import ItemUI from "../../ui/ItemUI";
import useFetch from "../../hooks/useFetch";

export default function Uomo() {
  const { data, loading, error } = useFetch(
    process.env.NEXT_PUBLIC_API_URL + "?populate=*"
  );

  return (
    <main>
      <h1 className="text-[2rem] text-black font-work font-[500] text-center p-10">
        Abbigliamento: Uomo
      </h1>
      <div className="md:w-[80%] w-[90%] m-auto ">
        <div className="flex flex-wrap gap-3 justify-center">
          {data.map((item) => (
            <ItemUI item={item} key={item.id} />
          ))}
        </div>
      </div>
      <section className="m-auto grid  grid-cols-2 gap-10 mt-10 md:mt-[5rem]">
        <Link href="/abbigliamento" className="justify-self-end ">
          <h3 className="text-[1.2rem]">Abbigliamento</h3>
          <div className="flex justify-end">
            <BsArrowLeftShort size={30} className="hover:text-redish" />
          </div>
        </Link>
        <Link href="/donna">
          <h3 className="text-[1.2rem]">Donna</h3>
          <BsArrowRightShort size={30} className="hover:text-redish" />
        </Link>
      </section>
    </main>
  );
}
