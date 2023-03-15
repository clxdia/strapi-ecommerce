import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

import ItemHomeUI from "./ItemHomeUI";

export default function NewArrivals() {
  const { data, loading, error } = useFetch(
    process.env.NEXT_PUBLIC_API_URL + "?populate=*&filters[type][$eq]=featured"
  );
  return (
    <section className="lg:w-[70%] w-[90%] max-w-[1800px] md:w-[90%] m-auto">
      <h1 className="text-center mb-10 text-black font-work font-[500] underline decoration-button decoration-4 underline-offset-8 z-30 pt-10  md:text-[2rem] text-[1.5rem]">
        Nuovi arrivi
      </h1>
      <div className="flex flex-wrap justify-center gap-3 md:justify-center md:gap-10">
        {data &&
          data.map((item) => {
            return <ItemHomeUI item={item} key={item.id} />;
          })}
      </div>
    </section>
  );
}
