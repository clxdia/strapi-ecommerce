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
      "?populate=*&filters[categories][title][$eq]= Donna"
  );

  return (
    <main className="md:pt-[7rem] pb-[10rem]">
      <div className="md:flex md:w-[90%] m-auto">
        <aside className="md:block hidden mt-[8rem] md:min-w-[300px] md:w-[300px] h-fit font-clash sticky top-[8rem]">
          <AsideWA donna={"#f07167"} />
        </aside>

        <div>
          <h1 className="text-[2rem] text-black md:text-left text-center font-clash font-medium pt-10 pb-10">
            ABBIGLIAMENTO: Donna
          </h1>
          <div className="md:w-[100%] w-[90%] m-auto ">
            <div className="flex flex-wrap h-full md:gap-5 gap-[3vw] sm:gap-auto">
              {items.data.map((item) => (
                <ItemUI item={item} key={item.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
