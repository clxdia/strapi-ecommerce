import Image from "next/image";
import React from "react";
import Link from "next/link";

const Categories = () => {
  return (
    <div className="lg:w-[70%] w-[90%] max-w-[1800px] md:w-[90%] m-auto mb-10 uppercase font-medium">
      <div className="md:grid md:grid-cols-3 gap-2 md:grid-rows-2 w-[100%] h-[100%]">
        <div className="col-span-2">
          <div className="bg-[url('/shop.jpg')] bg-cover h-[100%] w-full rotate-grid rounded-lg">
            <Link href="/accessori" className="text-grid">
              <h2 className="text-white text-[30px]">Accessori</h2>
            </Link>
          </div>
        </div>
        <div className="row-span-2">
          <div className="bg-[url('/jewerl.jpg')] bg-cover h-full w-full rotate-grid rounded-lg">
            <Link href="/abbigliamento" className="text-grid">
              <h2 className="text-white text-[30px]">Abbigliamento</h2>
            </Link>
          </div>
        </div>
        <div className="md:max-w-[23vw] md:w-[23vw] h-full md:max-h-[24vw] md:h-[24vw]">
          <div className="bg-[url('/men.jpg')] md:bg-cover bg-center md:w-[100%] rotate md:h-[100%] rounded-lg rotate-grid">
            <Link href="/uomo" className="text-grid">
              <h2 className="text-white text-[30px]">Uomo</h2>
            </Link>
          </div>
        </div>
        <div className="md:max-w-[23vw] md:w-[23vw] h-full md:max-h-[24vw] md:h-[24vw]">
          <div className="bg-[url('/woman.png')] md:bg-cover bg-center md:w-[100%] rotate md:h-[100%] rounded-lg rotate-grid">
            <Link href="/donna" className="text-grid">
              <h2 className="text-white text-[30px]">Donna</h2>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
