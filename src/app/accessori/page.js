import Link from "next/link";
import React from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import AsideWA from "../../ui/AsideWA";
import ItemUI from "../../ui/ItemUI";

async function fetchData(url) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("failed");
  }
  return res.json();
}

export default async function Accessori() {
  const items = await fetchData(
    process.env.NEXT_PUBLIC_SHORT_API_URL +
      "?populate=*&filters[categories][title][$eq]=Accessori"
  );

  return (
    <main className="pt-[7rem]">
      <div className="md:flex md:w-[90%] m-auto">
        <AsideWA acc={"red"} />
        <div>
          <h1 className="text-[2rem] text-black font-work font-[500] pt-10 pb-10">
            Accessori
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
      <section className="flex flex-col m-auto justify-center mt-10 md:mt-[5rem]">
        <Link href="/donna" className="m-auto justify-center flex flex-col">
          <h3 className="text-[1.2rem]">Donna</h3>
          <div className="m-auto">
            <BsArrowLeftShort size={30} className="hover:text-redish" />
          </div>
        </Link>
      </section>
    </main>
  );
}
