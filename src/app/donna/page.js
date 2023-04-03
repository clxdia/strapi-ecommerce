import Link from "next/link";
import React from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import AsideWA from "../../ui/AsideWA";
import ItemUI from "../../ui/ItemUI";

async function fetchData(url) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("failed");
  }
  return res.json();
}

export default async function Donna() {
  const items = await fetchData(
    process.env.NEXT_PUBLIC_API_URL +
      "?populate=*&filters[categories][title][$eq]=Donna"
  );

  return (
    <main className="pt-[7rem]">
      <div className="md:flex md:w-[90%] m-auto">
        <AsideWA donna={"red"} />
        <div>
          <h1 className="text-[2rem] text-black font-work font-[500] pt-10 pb-10">
            Abbigliamento: Donna
          </h1>
          <div className="md:w-[100%] w-[90%] m-auto ">
            <div className="flex flex-wrap w-[100%] h-full gap-2">
              {items.data.map((item) => (
                <ItemUI item={item} key={item.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <section className="m-auto grid  grid-cols-2 gap-10 mt-10 md:mt-[5rem]">
        <Link href="/uomo" className="justify-self-end ">
          <h3 className="text-[1.2rem]">Uomo</h3>
          <div className="flex justify-end">
            <BsArrowLeftShort size={30} className="hover:text-redish" />
          </div>
        </Link>
        <Link href="/accessori">
          <h3 className="text-[1.2rem]">Accessori</h3>
          <BsArrowRightShort size={30} className="hover:text-redish" />
        </Link>
      </section>
    </main>
  );
}
