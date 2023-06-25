import React from "react";
import ItemUI from "../../ui/ItemUI";
import AsideWA from "../../ui/AsideWA";
import fetchData from "../../hooks/fetchData";

export const metadata = {
  title: "E-Commerce | Tutti i prodotti",
};

export default async function ViewAll() {
  const items = await fetchData(
    process.env.NEXT_PUBLIC_API_URL + "?populate=*"
  );
  return (
    <main className="md:pt-[7rem] pb-[10rem] md:w-[90%] m-auto flex">
      <aside className="md:block hidden mt-[8rem] md:min-w-[300px] md:w-[300px] h-fit font-clash sticky top-[8rem]">
        <AsideWA />
      </aside>
      <div>
        <h1 className="text-[2rem] text-black font-clash font-medium md:text-left  text-center pt-10 pb-10">
          Prodotti del momento
        </h1>
        <div className="md:w-[100%] w-[90%] m-auto ">
          <div className="flex flex-wrap h-full md:gap-5 gap-[3vw] sm:gap-auto">
            {items.data.map((item) => {
              return <ItemUI item={item} key={item.id} />;
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
