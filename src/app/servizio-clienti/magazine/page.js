import React from "react";

import magazines from "../../../data/magazines";
import Magazine from "../../../ui/Magazine";

export const metadata = {
  title: "E-Commerce | Magazine ",
};

export default function MagazineHome() {
  return (
    <main>
      <section className="font-clash w-[100%] max-w-[1800px] m-auto bg-peach p-4 mb-6">
        <h1 className="text-center font-work font-[400] text-[1.5rem] mb-3">
          MAGAZINE
        </h1>
        <p className="text-center">Fashion, tech world and more!</p>
      </section>
      <section className="w-[90%] m-auto md:w-[100%]">
        {magazines.map((magazine) => (
          <Magazine magazine={magazine} key={magazine.id} />
        ))}
      </section>
    </main>
  );
}
