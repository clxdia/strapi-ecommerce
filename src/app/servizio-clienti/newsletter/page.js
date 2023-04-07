"use client";

import Image from "next/image";
import React, { useState } from "react";
import newsletterPic from "../../../images/service-clients.png";
import { MdOutlineDone } from "react-icons/md";

const Newsletter = () => {
  const [success, setSuccess] = useState(false);
  return (
    <div className="font-clash font-medium max-w-[1800px]">
      <Image src={newsletterPic} alt="/" />
      <div className="w-[90%] m-auto md:w-[100%]">
        {success ? (
          <div className="flex items-center justify-center mt-[10rem] mb-[10rem] gap-3">
            <h1 className="text-[2rem] font-[500] text-center">
              Grazie per l&#39;iscrizione
            </h1>
            <div className="bg-green-200 w-[50px] flex flex-col justify-center align-middle h-[50px] rounded-full relative">
              <MdOutlineDone
                size={30}
                fill={"white"}
                className="absolute right-0 left-0 m-auto"
              />
            </div>
          </div>
        ) : (
          <div>
            <h1 className="font-clash font-medium text-[2rem] mt-[1.5rem]">
              ISCRIZIONE ALLA NEWSLETTER
            </h1>
            <h2 className="text-[1.5rem] mt-2">ISCRIVITI OGGI E RICEVI</h2>
            <p className="font-normal">Offerte esclusive!</p>
            <p className="font-normal">
              Le ultimissime notizie dal mondo della moda!
            </p>
            <p className="font-normal">Ispirazione e consigli di styling!</p>
            <form className="flex flex-col mt-5">
              <label for="email">
                E-mail<span className="text-red-600">*</span>
              </label>
              <input
                className="p-3 border-zinc-200 border-[1px]"
                type="text"
                id="fname"
                name="fname"
              ></input>
            </form>

            <form className="mt-5 font-[300]">
              <p className="font-medium">Reparto:</p>
              <ul className="font-normal">
                <li>
                  <input type="radio" id="donna" value="donna" />
                  <label for="donna"> Donna</label>
                </li>
                <li>
                  <input type="radio" id="uomo" value="uomo" />
                  <label for="uomo"> Uomo</label>
                </li>
                <li>
                  <input type="radio" id="non-binario" value="non-binario" />
                  <label for="non-binario"> Tutto</label>
                </li>
              </ul>
            </form>

            <form className="font-normal mt-3">
              <input type="checkbox" id="bbm" name="bbm"></input>
              <label for="bbm"> Voglio anche aggiornamenti per bambini</label>
            </form>
            <form className="flex flex-col mt-5">
              <label for="lname">
                Codice Postale<span className="text-red-600">*</span>
              </label>
              <input
                className="p-3 border-zinc-200 border-[1px]"
                type="text"
              ></input>
            </form>
            <div className="text-center">
              <button
                onClick={() => setSuccess(true)}
                className="mt-10 font-alpino uppercase font-semibold tracking-wider mb-10 m-auto border-blueish border-[2px] bg-blueish text-white text-[1rem] p-2 hover:border-blueish hover:border-[2px] hover:bg-white hover:text-blueish hover:transition hover:ease-in cursor-pointer"
              >
                Sì iscrivimi
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Newsletter;
