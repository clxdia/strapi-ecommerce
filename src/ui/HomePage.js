"use client";
import React, { useState } from "react";
import NewArrivals from "./NewArrivals";
import Discounted from "./Discounted";

export default function HomePage() {
  const [arrivals, setArrivals] = useState(true);
  const [sale, setSale] = useState(false);
  const [colorArr, setColorArr] = useState("black");
  const [colorSale, setColorSale] = useState("#fed9b7");

  const handleArrivals = () => {
    setArrivals(true);
    setSale(false);
    setColorSale("#fed9b7");
    setColorArr("black");
  };

  const handleSales = () => {
    setArrivals(false);
    setSale(true);
    setColorSale("black");
    setColorArr("#fed9b7");
  };

  return (
    <section className="lg:w-[70%] w-[90%] max-w-[1800px] md:w-[90%] m-auto mb-20">
      <div className="flex">
        <h1
          className="mb-6 text-black font-clash font-medium tracking-wide mt-10 md:text-[1.5rem] text-[1.5rem] cursor-pointer uppercase w-full text-right"
          style={{ color: colorArr }}
          onClick={handleArrivals}
        >
          Nuovi Arrivi
        </h1>
        <h1
          className="mb-6 text-black font-clash font-medium tracking-wide mt-10 md:text-[1.5rem] text-[1.5rem] cursor-pointer uppercase w-full ml-5 text-left"
          style={{ color: colorSale }}
          onClick={handleSales}
        >
          Più venduti
        </h1>
      </div>

      {arrivals && <NewArrivals />}
      {sale && <Discounted />}
    </section>
  );
}
