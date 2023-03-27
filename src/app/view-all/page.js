import React from "react";
import ItemUI from "../../ui/ItemUI";

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
    <div>
      <h1 className="md:text-[2rem] text-[1.5rem] text-black font-work font-[500] text-center p-10">
        Prodotti del momento
      </h1>
      <div className="md:w-[80%] w-[90%] m-auto">
        <div className="flex flex-wrap gap-3 justify-center">
          {items.data.map((item) => {
            return <ItemUI item={item} key={item.id} />;
          })}
        </div>
      </div>
    </div>
  );
}
