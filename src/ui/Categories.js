import React from "react";
import Link from "next/link";

const Categories = () => {
  return (
    <div className="w-[90%] max-w-[1800px] md:w-[70%] m-auto mb-10 uppercase font-medium">
      <div className="md:grid md:grid-cols-3 flex flex-col gap-2 md:grid-rows-2 w-[100%] h-[100%]">
        <div className="col-span-2">
          <div className="bg-[url('/accessori.jpg')] max-w-[930px] max-h-[460px] bg-center bg-cover h-[100%] w-full rotate-grid rounded-lg">
            <Link href="/accessori" className="text-grid">
              <h2 className="text-white text-[30px]">Accessori</h2>
            </Link>
          </div>
        </div>
        <div className="row-span-2">
          <div className="bg-[url('/abbigliamento.jpg')] max-w-[460px] max-h-[930px] bg-center bg-cover h-full w-full rotate-grid rounded-lg">
            <Link href="/abbigliamento" className="text-grid">
              <h2 className="text-white text-[30px]">Abbigliamento</h2>
            </Link>
          </div>
        </div>
        <div className=" md:w-[23vw] h-full md:h-[24vw] max-w-[460px] max-h-[460px] ">
          <div className="bg-[url('/uomo.jpg')] bg-center max-w-[460px] max-h-[460px] bg-cover md:w-[100%] rotate md:h-[100%] rounded-lg rotate-grid">
            <Link href="/uomo" className="text-grid">
              <h2 className="text-white text-[30px]">Uomo</h2>
            </Link>
          </div>
        </div>
        <div className=" md:w-[23vw] h-full md:h-[24vw] max-w-[460px] max-h-[460px] ">
          <div className="bg-[url('/donna.jpg')] bg-center max-w-[460px] max-h-[460px] bg-cover md:w-[100%] rotate md:h-[100%] rounded-lg rotate-grid">
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
