import Image from "next/image";
import React from "react";
import { BiMapAlt } from "react-icons/bi";

import clientservice from "../../images/service-clients.png";

const ServizioClienti = () => {
  return (
    <div className="text-center font-clash mb-10 max-w-[1800px] h-[100vh]">
      <Image src={clientservice} alt="/" aria-hidden="true" />

      <h1 className="text-[2rem] md:mt-[3rem] font-medium mt-10 mb-4">
        Benvenuti al Servizio Clienti
      </h1>
      <h2 className="mb-1">Come posso aiutarti oggi?</h2>

      <div className="bg-background p-10 max-w-[400px] w-[90%] h-auto flex-col items-center text-center m-auto">
        <div className="m-auto justify-center flex text-center mb-5 ">
          <BiMapAlt className="text-redish" />
        </div>

        <p className="uppercase mb-3 font-medium">Dov&#39;è il mio ordine?</p>
        <p className="text-[0.8rem] font-satoshi text-center font-[300] text-button mb-5">
          Inserisci il numero d&#39;ordine presente nella email di conferma che
          hai ricevuto
        </p>
        <form className="flex-col flex text-left font-[300]">
          <label for="ordine" className="font-[500] mb-2">
            Numero d&#39;ordine <span className="text-redish">*</span>
          </label>

          <input
            type="text"
            id="ordine"
            placeholder="e.g. 31234567890"
            className="flex p-3 border-[1px] font-satoshi border-footer focus:outline-none "
          />
        </form>
        <button className="mt-5 mb-4 flex bg-blueish text-buttontext p-3 w-[100%] gap-3 justify-center items-center border-[2px] border-blueish hover:ease-in transition ease-in-out delay-150   hover:shadow-headline/50 hover:shadow-xl rounded-xl font-satoshi font-bold uppercase tracking-wide">
          Traccia ordine
        </button>
      </div>
    </div>
  );
};

export default ServizioClienti;
