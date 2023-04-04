import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

import article1 from "../images/article1.jpg";
import article2 from "../images/article2.jpg";
import article3 from "../images/article3.jpg";

export default function Articles() {
  return (
    <section className="w-[100%] m-auto bg-peach mt-[10rem] font-clash text-center ">
      <h1 className="uppercase text-center mb-10 text-black font-clash font-medium z-30 pt-10  md:text-[2rem] text-[1.5rem]">
        Magazine
      </h1>

      <div className="w-[90%] max-w-[1800px] md:w-[70%] m-auto flex flex-col md, sm:flex-row flex-wrap h-full md:gap-3 gap-10  pb-20">
        <article className="bg-white cursor-pointer shadow-md flex-col flex-1 flex-shrink-0 md:w-1/3 ">
          <Link href="/servizio-clienti/magazine/1">
            <Image
              src={article1}
              alt="/"
              className="w-full md, sm:h-[15vw] h-[50vw] object-cover"
            />
            <p className="bg-white p-3 font-[300] text-[15px]">INSIDER</p>
            <p className="bg-white p-3 font-[500]">Fashion & The Color Blue</p>
            <p className="bg-white p-3 font-[300] text-[15px] flex items-center justify-center">
              Read more
              <BsArrowRightShort size={20} />
            </p>
          </Link>
        </article>

        <article className="flex-col flex-1 flex-shrink-0 md:w-1/3 cursor-pointer shadow-md">
          <Link href="/servizio-clienti/magazine/2">
            <Image
              src={article2}
              alt="/"
              className="w-full md, sm:h-[15vw] h-[50vw] object-cover"
            />
            <p className="bg-white p-3 font-[300] text-[15px]">INSIDER</p>
            <p className="bg-white p-3 font-[500]">
              Paris&#39; Fashion Week 2023
            </p>
            <p className="bg-white p-3 font-[300] text-[15px] flex items-center justify-center">
              Read more
              <BsArrowRightShort size={20} />
            </p>
          </Link>
        </article>

        <article className="bg-white flex-col flex-1 flex-shrink-0 md:w-1/3 cursor-pointer shadow-md">
          <Link href="/servizio-clienti/magazine/3">
            <Image
              src={article3}
              alt="/"
              className="w-full md, sm:h-[15vw] h-[50vw]  object-cover"
            />
            <div className="bg-white flex-col flex">
              <p className=" p-3 font-[300] text-[15px]">INSIDER</p>
              <p className=" p-3 font-[500]">Tech Week 2023</p>

              <p className=" p-3 font-[300] text-[15px] flex items-center justify-center">
                Read more
                <BsArrowRightShort size={20} />
              </p>
            </div>
          </Link>
        </article>
      </div>
    </section>
  );
}
