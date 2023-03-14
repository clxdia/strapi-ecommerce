import Link from "next/link";
import React from "react";
import { SlHandbag } from "react-icons/sl";

const EmptyPage = () => {
  return (
    <div>
      <div className="m-auto max-w-[350px] h-auto  text-center mt-20 mb-20">
        <SlHandbag className="m-auto p-5" size={100} />
        <p className="font-work mb-3">Non c'è nulla qui!</p>
        <p>Trovi qui le info sui tuoi aggiornamenti, resi o rimborsi.</p>
        <button
          className="mt-5 flex bg-button text-buttontext p-3 w-[200px
        ] m-auto gap-3 justify-center items-center border-[2px] border-button hover:ease-in hover:border-[2px] hover:border-button hover:bg-buttontext hover:text-button hover:cursor-pointer "
        >
          <Link href="./view-all" className="text-bold hover:cursor-pointer">
            Continua lo shopping
          </Link>
        </button>
      </div>
    </div>
  );
};

export default EmptyPage;
