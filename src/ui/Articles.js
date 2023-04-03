import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

import article1 from "../images/article1.jpg";
import article2 from "../images/article2.jpg";
import article3 from "../images/article3.jpg";

export default function Articles() {
  return (
    <section className="w-[100%] m-auto bg-[#edd593] mt-[10rem] font-work text-center ">
      <h1 className="text-center mb-10 text-black font-work font-[500] underline decoration-button decoration-4 underline-offset-8 z-30 pt-10  md:text-[2rem] text-[1.5rem]">
        Magazine
      </h1>

      <div className="lg:w-[70%] md:w-[75%] m-auto flex flex-wrap w-[100%] h-full gap-2 pb-20">
        <article className="w-[30vw] cursor-pointer shadow-md">
          <Link href="/servizio-clienti/magazine/1">
            <Image
              src={article1}
              alt="/"
              className="w-full h-[13vw] object-cover"
            />
            <p className="bg-white p-3 font-[300] text-[15px]">INSIDER</p>
            <p className="bg-white p-3 font-[500]">Fashion & The Color Blue</p>
            <p className="bg-white p-3 font-[300] text-[15px] flex items-center justify-center">
              Read more
              <BsArrowRightShort size={20} />
            </p>
          </Link>
        </article>

        <article className="w-[30vw] cursor-pointer shadow-md">
          <Link href="/servizio-clienti/magazine/2">
            <Image
              src={article2}
              alt="/"
              className="w-full h-[13vw] max-h-[13rem] object-cover"
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

        <article className="w-[30vw] cursor-pointer shadow-md">
          <Link href="/servizio-clienti/magazine/3">
            <Image
              src={article3}
              alt="/"
              className="w-full h-[13vw] max-h-[13rem] object-cover"
            />
            <p className="bg-white p-3 font-[300] text-[15px]">INSIDER</p>
            <p className="bg-white p-3 font-[500]">Tech Week 2023</p>

            <p className="bg-white p-3 font-[300] text-[15px] flex items-center justify-center">
              Read more
              <BsArrowRightShort size={20} />
            </p>
          </Link>
        </article>
      </div>
    </section>
  );
}
