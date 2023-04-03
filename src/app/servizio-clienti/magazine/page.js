import React from "react";

import magazines from "../../../../magazines";
import Magazine from "../../../ui/Magazine";

export default function MagazineHome() {
  return (
    <main>
      <section className="w-[100%] max-w-[1800px] m-auto bg-secondary p-4 mb-6">
        <h1 className="text-center font-work font-[400] text-[1.5rem] mb-3">
          MAGAZINE
        </h1>
        <ul className="text-center flex gap-10 justify-center">
          <li>Fashion</li>
          <li>Tech</li>
          <li>World</li>
        </ul>
      </section>
      <section className="w-[90%] m-auto md:w-[100%]">
        {magazines.map((magazine) => (
          <Magazine magazine={magazine} key={magazine.id} />
        ))}
      </section>
    </main>
  );
}
