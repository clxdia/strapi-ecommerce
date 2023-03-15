"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import useFetch from "../hooks/useFetch";
import FavoriteButton from "./FavoriteButton";

let rec0 = Math.floor(Math.random() * 10 + 1);
let rec1 = Math.floor(Math.random() * 10 + 1);
let rec2 = Math.floor(Math.random() * 10 + 1);
let rec3 = Math.floor(Math.random() * 10 + 1);
let rec4 = Math.floor(Math.random() * 10 + 1);

console.log(rec0, rec1, rec2, rec3, rec4);

export default function Recommendations() {
  const { data, loading, error } = useFetch(
    process.env.NEXT_PUBLIC_SHORT_API_URL +
      "?populate=*&filters[id][$in][0]=" +
      rec0 +
      "&filters[id][$in][1]=" +
      rec1 +
      "&filters[id][$in][2]=" +
      rec2 +
      "&filters[id][$in][3]=" +
      rec3 +
      "&filters[id][$in][4]=" +
      rec4
  );
  return (
    <>
      <h3 className="mt-40 text-[20px]">Altri hanno acquistato anche</h3>
      <div className=" flex flex-wrap justify-around gap-5 mb-10">
        {data &&
          data.map((item) => {
            return (
              <div className="flex flex-col   mt-4" key={item.id}>
                <div className=" hover:scale-105 md:h-auto h-full hover:shadow-xl hover:transition hover:ease-in-out items-center self-center flex flex-col relative">
                  <Link
                    href="./view-all/[id]"
                    as={`./view-all/${item.id}`}
                    className="w-[100%]"
                  >
                    <Image
                      src={item.attributes.img.data.attributes.url}
                      alt="/"
                      className="object-cover md:w-[250px] md:h-[350px] w-[180px] h-[250px] relative"
                      width="250"
                      height="350"
                    />
                  </Link>
                  <FavoriteButton />
                </div>
                <Link
                  href="./view-all/[id]"
                  as={`./view-all/${item.id}`}
                  className="w-[100%]"
                >
                  <h3 className="mt-4 text-[0.8rem] ">
                    {item.attributes.title}
                  </h3>
                  <p className="font-[400] mt-2 text-[1rem]">
                    €{item.attributes.price}
                  </p>
                </Link>
              </div>
            );
          })}
      </div>
    </>
  );
}
