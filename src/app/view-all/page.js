import React from "react";
import ItemUI from "../../ui/ItemUI";
import AsideWA from "../../ui/AsideWA";

async function fetchData(url) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("failed");
  }
  return res.json();
}

export default async function ViewAll() {
  const items = await fetchData(
    process.env.NEXT_PUBLIC_API_URL + "?populate=*"
  );
  return (
    <main className="pt-[7rem] md:flex md:w-[90%] m-auto">
      <AsideWA />
      <div>
        <h1 className="md:text-[2rem] text-[1.5rem] text-black font-work font-[500] text-left pt-10 pb-10">
          Prodotti del momento
        </h1>
        <div className="md:w-[100%] w-[90%] m-auto ">
          <div className="flex flex-wrap w-[100%] h-full gap-2">
            {items.data.map((item) => {
              return <ItemUI item={item} key={item.id} />;
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
