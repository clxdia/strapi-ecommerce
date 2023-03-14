"use client";

import useFetch from "../../hooks/useFetch";
import Link from "next/link";
import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import ItemUI from "../../ui/ItemUI";

export default function Abbigliamento() {
  const { data, loading, error } = useFetch(
    process.env.NEXT_PUBLIC_API_URL + "?populate=*"
  );
  return (
    <main>
      <h1 className="text-[2rem] text-black font-work font-[500] text-center p-10">
        Abbigliamento
      </h1>
      <div className="md:w-[80%] w-[90%] m-auto ">
        <div className="flex flex-wrap gap-3 justify-center">
          {data.map((item) => (
            <ItemUI item={item} key={item.id} />
          ))}
        </div>
      </div>

      <section className="flex flex-col m-auto justify-center mt-10 md:mt-[5rem]">
        <Link href="/uomo" className="m-auto justify-center flex flex-col">
          <h3 className="text-[1.2rem]">Uomo</h3>
          <div className="m-auto">
            <BsArrowRightShort size={30} className="hover:text-redish" />
          </div>
        </Link>
      </section>
    </main>
  );
}
