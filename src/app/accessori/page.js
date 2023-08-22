import React from "react";
import fetchData from "../../hooks/fetchData";
import AsideWA from "../../ui/AsideWA";
import ItemUI from "../../ui/ItemUI";

export const metadata = {
  title: "E-Commerce | Accessori",
};

export default async function Accessori() {
  const items = await fetchData(
    process.env.NEXT_PUBLIC_SHORT_API_URL +
      "?populate=*&filters[categories][title][$eq]=Accessori"
  );
  return (
    <main className="md:pt-[7rem] pb-[10rem]">
      <div className="md:flex md:w-[90%] m-auto">
        <aside className="md:block hidden mt-[8rem] md:min-w-[300px] md:w-[300px] h-fit font-clash sticky top-[8rem]">
          <AsideWA acc={"#f07167"} />
        </aside>

        <div>
          <h1 className="text-[2rem] text-black font-clash md:text-left text-center font-medium pt-10 pb-10">
            ACCESSORI
          </h1>
          <div className="md:w-[100%] w-[90%] m-auto ">
            <div className="flex flex-wrap h-full md:gap-[1.6vw] gap-[3vw] sm:gap-auto">
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
