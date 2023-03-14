import Image from "next/image";
import React from "react";
import { BiMapAlt } from "react-icons/bi";

import clientservice from "../../images/service-clients.png";

const ServizioClienti = () => {
  return (
    <div className="text-center font-work mb-10 max-w-[1800px] ">
      <Image src={clientservice} alt="/" />

      <h1 className="text-[2rem] md:mt-[4rem] font-[600] mt-10 mb-4">
        Benvenuti al Servizio Clienti
      </h1>
      <h2 className="mb-1">Come posso aiutarti oggi?</h2>
      <h3 className="mb-3 text-[0.8rem] ">ACCEDI A QUESTI LINK</h3>
      <div className="bg-white p-10 max-w-[400px] w-[90%] h-auto flex-col items-center text-center m-auto">
        <div className="m-auto justify-center flex text-center mb-5 ">
          <BiMapAlt className="text-redish" />
        </div>

        <p className="uppercase mb-3">dov'è il mio ordine?</p>
        <p className="text-[0.7rem] text-center font-[300] text-button mb-5">
          Inserisci il numero d'ordine presente nella email di conferma che hai
          ricevuto
        </p>
        <form className="flex-col flex text-left font-[300]">
          <label for="ordine" className="font-[500] mb-2">
            Numero d'ordine <span className="text-redish">*</span>
          </label>

          <input
            type="text"
            id="ordine"
            placeholder="e.g. 31234567890"
            className="flex p-3 border-[1px] border-footer focus:outline-none "
          />
        </form>
        <button className="mt-10 m-auto border-button border-[2px] bg-button text-white text-[1rem] font-[400] p-2 hover:border-button hover:border-[2px] hover:bg-white hover:text-button hover:transition hover:ease-in cursor-pointer">
          Traccia ordine
        </button>
      </div>
    </div>
  );
};

export default ServizioClienti;
