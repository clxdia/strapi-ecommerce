import Link from "next/link";
import React from "react";

const AsideNS = () => {
  return (
    <aside className="w-[20%] font-work text-[15px] font-[300] md:block hidden">
      <div className="flex flex-col ">
        <h3 className="text-[1.5rem] font-[400]">Shopping</h3>
        <Link href="../abbigliamento" className="mt-1 font-[300] ">
          Abbigliamento
        </Link>
        <Link href="../uomo" className="mt-1 font-[300]">
          Uomo
        </Link>
        <Link href="../donna" className="mt-1 font-[300]">
          Donna
        </Link>
        <Link href="../accessori" className="mt-1 font-[300]">
          Accessori
        </Link>
        <Link href="../elettronica" className="mt-1 font-[300]">
          Elettronica
        </Link>
      </div>
      <div className="mt-5">
        <h3 className="text-[1.5rem] font-[400]">Magazine</h3>
        <Link href="./servizio-clienti/magazine">Ultime News</Link>
      </div>
      <div className="mt-5">
        <h3 className="text-[1.5rem] font-[400]">Contatti</h3>
        <Link href="./servizio-clienti/newsletter">Newsletter</Link>
      </div>
      <div className="mt-5">
        <h3 className="text-[1.5rem] font-[400]">Aiuto</h3>
        <Link href="newsletter">Newsletter</Link>
      </div>
    </aside>
  );
};

export default AsideNS;
