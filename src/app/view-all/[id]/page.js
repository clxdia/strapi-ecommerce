import Image from "next/image";
import React from "react";
import CartButton from "../../../ui/CartButton";
import Recommendations from "../../../ui/RecsList";
import FaveButton from "../../../ui/FaveButton";
import { AiOutlineTag } from "react-icons/ai";
import { MdOutlineLocalShipping } from "react-icons/md";
import { TbPackage } from "react-icons/tb";
import { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata({ params: { id } }) {
  const url = `${process.env.NEXT_PUBLIC_API}${id}?populate=*`;

  const products = await fetch(url).then((res) => res.json());
  const item = products.data.attributes;

  return {
    title: `E-Commerce | ${item.title}`,
  };
}

const fetchItem = async (id) => {
  // const cacheBuster = Date.now();
  const res = await fetch(
    // `${process.env.NEXT_PUBLIC_API}${id}?populate=*&cacheBuster=${cacheBuster}`
    `${process.env.NEXT_PUBLIC_API}${id}?populate=*`,
    {
      next: {
        revalidate: 300,
      },
    }
  );
  const item = await res.json();
  return item.data;
};

export default async function ItemPage({ params: { id } }, setFill, fill) {
  const item = await fetchItem(id);

  return (
    <div className="w-[90%] md:w-[80%] md:pt-[10rem] m-auto font-work">
      <section className="md:flex gap-10 md:w-[80%] m-auto mt-0">
        <div className=" items-center self-center flex ">
          <Image
            src={item.attributes?.img.data.attributes.url}
            className="w-[100%] md:w-[1500px] md:h-[1000px] object-cover"
            width="1500"
            height="1000"
            alt={item.attributes.title}
          />
        </div>
        <aside className="w-[100%] md:w-[80%]">
          <div className="h-auto md:sticky md:top-[9rem]">
            <h1 className="md:text-[2rem] text-[20px] font-light md:mt-0 mt-3">
              {item.attributes.title}
            </h1>
            <p className="md:text-[1.5rem] md:mt-3 text-[20px] text-coral">
              €{item.attributes.price}
            </p>
            <p className="md:text-[1.3rem] md:text-left text-center mt-4 "></p>
            <p className="mt-5 text-gray-800 text-[0.8rem] font-[300]">
              {item.attributes.desc}
            </p>
            <div className="bg-tealish/30 flex gap-2 p-3 items-start mt-4 mb-2">
              <AiOutlineTag size={20} className="mt-1" />
              <div className="font-light text-[13px]">
                <p>SEI NUOVO QUI?</p>
                <p>Ricevi il 15% di sconto su tutto!</p>
                <p>
                  Con il codice: <b>EC-NEW</b>
                </p>
              </div>
            </div>
            <div className="sticky bottom-0 gap-4 flex bg-white items-center ">
              <CartButton item={item} />
              <FaveButton setFill={setFill} fill={fill} item={item} />
            </div>
            <div className="font-light text-[13px] p-3 border-[1px] border-tealish/40">
              <div className="flex gap-3 mb-1">
                <MdOutlineLocalShipping size={23} />
                <p>Consegna Gratuita</p>
              </div>
              <div className="flex gap-4">
                <TbPackage size={23} />
                <div className="w-[90%] leading-6">
                  <p>Resi gratuiti</p>
                  <p className="mt-1">
                    Si applicano i Termini e Condizioni dell&#39;offerta.{" "}
                    <u>Maggiori informazioni sulla consegna.</u>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </section>
      <Recommendations />
    </div>
  );
}
