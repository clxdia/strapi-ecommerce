import Link from "next/link";
import React from "react";
import { SlHandbag } from "react-icons/sl";

const EmptyPage = () => {
  return (
    <div>
      <div className="m-auto max-w-[350px] h-auto font-clash font-normal text-center mt-20 mb-20">
        <SlHandbag className="m-auto p-5" size={100} />
        <p className=" mb-3 font-medium text-[15px] md:text-[1.5rem]">
          Non c&#39;è nulla qui!
        </p>
        <p className="text-[13px] md:text-[17px] w-[90%] m-auto">
          Trovi qui le info sui tuoi aggiornamenti, resi o rimborsi.
        </p>
        <button className="font-satoshi font-bold uppercase tracking-wide mt-5 flex bg-blueish text-buttontext p-3 w-[250px] m-auto gap-3 justify-center items-center border-[2px] border-blueish hover:ease-in hover:border-[2px] hover:border-blueish hover:bg-buttontext hover:text-blueish hover:cursor-pointer">
          <Link href="./view-all" className="hover:cursor-pointer">
            Continua lo shopping
          </Link>
        </button>
      </div>
    </div>
  );
};

export default EmptyPage;
