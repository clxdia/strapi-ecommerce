import Image from "next/image";
import React from "react";
import newsletterPic from "../../../images/newsletter.jpg";

const Newsletter = () => {
  return (
    <div className="font-work font-[500] max-w-[1800px]">
      <Image src={newsletterPic} alt="/" />
      <div className="w-[90%] m-auto md:w-[100%]">
        <h1 className="text-[2rem] mt-[1.5rem] font-[500]">
          ISCRIZIONE ALLA NEWSLETTER
        </h1>
        <h2 className="text-[1.5rem] mt-2">ISCRIVITI OGGI E RICEVI</h2>
        <p className="font-[300]">Offerte esclusive!</p>
        <p className="font-[300]">
          Le ultimissime notizie dal mondo della moda!
        </p>
        <p className="font-[300]">Ispirazione e consigli di styling!</p>
        <form className="flex flex-col mt-5">
          <label for="email">
            E-mail<span className="text-red-600">*</span>
          </label>
          <label type="text" id="email" name="email"></label>
          <input
            className="p-3 border-zinc-200 border-[1px]"
            type="text"
            id="fname"
            name="fname"
          ></input>
        </form>

        <form className="mt-5 font-[300]">
          <p className="font-[500]">Genere:</p>
          <div>
            <input type="radio" id="donna" value="donna" />
            <label for="donna"> Donna</label>
          </div>
          <div>
            <input type="radio" id="uomo" value="uomo" />

            <label for="uomo"> Uomo</label>
          </div>
          <div>
            <input type="radio" id="non-binario" value="non-binario" />
            <label for="non-binario"> Non Binario</label>
          </div>
          <div>
            <input type="radio" id="altro" value="altro" />
            <label for="altro"> Altro</label>
          </div>
        </form>

        <form className="font-[300] mt-3">
          <input type="checkbox" id="bbm" name="bbm"></input>
          <label for="bbm"> Voglio anche gli aggiornamenti per bambini</label>
        </form>
        <form className="flex flex-col mt-5">
          <label for="lname">
            Codice Postale<span className="text-red-600">*</span>
          </label>
          <input
            className="p-3 border-zinc-200 border-[1px]"
            type="text"
            id="fname"
            name="fname"
          ></input>
          <button
            type="submit"
            className="mt-10 mb-10 m-auto border-button border-[2px] bg-button text-white text-[1rem] font-[400] p-2 hover:border-button hover:border-[2px] hover:bg-white hover:text-button hover:transition hover:ease-in cursor-pointer"
          >
            Sì iscrivimi
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
