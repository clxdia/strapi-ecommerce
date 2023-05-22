import Link from "next/link";
import React from "react";

const AsideNS = () => {
  return (
    <>
      <div className="flex flex-col font-clash">
        <h3 className="text-[1.5rem] uppercase font-medium">Shopping</h3>
        <ul className="flex-col text-[1rem] flex w-fit font-normal">
          <Link
            href="./abbigliamento"
            className="mt-1 hover:underline-offset-3 hover:underline decoration-black"
          >
            Abbigliamento
          </Link>
          <Link
            href="./uomo"
            className="mt-1 hover:underline-offset-3 hover:underline decoration-black"
          >
            Uomo
          </Link>
          <Link
            href="./donna"
            className="mt-1 hover:underline-offset-3 hover:underline decoration-black"
          >
            Donna
          </Link>
          <Link
            href="./accessori"
            className="mt-1 hover:underline-offset-3 hover:underline decoration-black"
          >
            Accessori
          </Link>
        </ul>
      </div>
      <div className="mt-5 font-clash font-medium">
        <h3 className="text-[1.5rem] uppercase font-medium">Magazine</h3>
        <Link
          href="./servizio-clienti/magazine"
          className="hover:underline-offset-3 hover:underline decoration-black font-normal"
        >
          Ultime News
        </Link>
      </div>
      <div className="mt-5 font-clash font-medium">
        <h3 className="text-[1.5rem] uppercase font-medium">Contatti</h3>
        <Link
          href="./servizio-clienti/newsletter"
          className="hover:underline-offset-3 hover:underline decoration-black font-normal"
        >
          Newsletter
        </Link>
      </div>
      <div className="mt-5 font-clash font-medium">
        <h3 className="text-[1.5rem] uppercase font-medium">Aiuto</h3>
        <Link
          href="./servizio-clienti"
          className="hover:underline-offset-3 hover:underline decoration-black font-normal"
        >
          Traccia i miei ordini
        </Link>
      </div>
    </>
  );
};

export default AsideNS;
