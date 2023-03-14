import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

import article1 from "../images/article1.png";
import article2 from "../images/article2.png";
import article3 from "../images/article3.png";

async function Articles() {
  return (
    <section className="w-[100%] m-auto bg-secondary mt-[10rem] font-work text-center ">
      <h1 className="text-center mb-10 text-black font-work font-[500] underline decoration-button decoration-4 underline-offset-8 z-30 pt-10  md:text-[2rem] text-[1.5rem]">
        Magazine
      </h1>

      <div className="lg:w-[70%] w-[90%] max-w-[1800px] m-auto flex flex-wrap  justify-center gap-7 pb-20">
        <article className="w-[20rem]">
          <Image src={article1} alt="/" />
          <p className="bg-white p-3 font-[300] text-[15px]">INSIDER</p>
          <p className="bg-white p-3 font-[500]">Fashion & The Color Blue</p>
          <Link href="/servizio-clienti/magazine/1">
            <p className="bg-white p-3 font-[300] text-[15px] flex items-center justify-center">
              Read more
              <BsArrowRightShort size={20} />
            </p>
          </Link>
        </article>

        <article className="w-[20rem]">
          <Image src={article2} alt="/" />
          <p className="bg-white p-3 font-[300] text-[15px]">INSIDER</p>
          <p className="bg-white p-3 font-[500]">Paris' Fashion Week 2023</p>
          <Link href="/servizio-clienti/magazine/2">
            <p className="bg-white p-3 font-[300] text-[15px] flex items-center justify-center">
              Read more
              <BsArrowRightShort size={20} />
            </p>
          </Link>
        </article>

        <article className="w-[20rem]">
          <Image src={article3} alt="/" />
          <p className="bg-white p-3 font-[300] text-[15px]">INSIDER</p>
          <p className="bg-white p-3 font-[500]">Tech Week 2023</p>
          <Link href="/servizio-clienti/magazine/3">
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

export default Articles;
