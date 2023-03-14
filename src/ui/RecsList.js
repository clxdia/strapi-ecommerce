import Image from "next/image";
import Link from "next/link";
import React from "react";
import FavoriteButton from "./FavoriteButton";

const Recommendations = ({ item }) => {
  return (
    <div className=" font-work font-[300] relative ">
      <div className=" hover:scale-105 w-[100%] md:h-auto  h-full hover:shadow-xl hover:transition hover:ease-in-out bg-white items-center self-center flex relative">
        <Link
          href="./view-all/[id]"
          as={`./view-all/${item.id}`}
          className="w-[100%]"
        >
          <Image
            src={item.image}
            alt="/"
            className="h-[20rem] p-5 w-full object-scale-down md:h-[20rem] md:w-full"
            width="100"
            height="100"
          />
        </Link>
        <FavoriteButton />
      </div>
      <Link
        href="./view-all/[id]"
        as={`./view-all/${item.id}`}
        className="w-[100%]"
      >
        <h3 className="mt-4 text-[0.8rem] ">{item.title}</h3>
        <p className="font-[400] mt-2 text-[1rem]">€{item.price}</p>
      </Link>
    </div>
  );
};
export default Recommendations;
