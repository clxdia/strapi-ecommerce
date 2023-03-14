"use client";

import React from "react";
import useFetch from "../../hooks/useFetch";

import ItemUI from "../../ui/ItemUI";

export default function ViewAll() {
  const { data, loading, error } = useFetch(
    process.env.NEXT_PUBLIC_API_URL + "?populate=*"
  );
  return (
    <div>
      <h1 className="text-[2rem] text-black font-work font-[500] text-center p-10">
        Prodotti del momento
      </h1>
      <div className="md:w-[80%] w-[90%] m-auto ">
        <div className="flex flex-wrap gap-3 justify-center">
          {data &&
            data.map((item) => {
              return <ItemUI item={item} key={item.id} />;
            })}
        </div>
      </div>
    </div>
  );
}
