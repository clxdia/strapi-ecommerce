import Link from "next/link";
import React from "react";
import {
  AiFillFacebook,
  AiFillYoutube,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import FooterMB from "./FooterMB";
import banner from "../images/desktop/banner.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className=" bg-footer m-auto">
      <Image
        src={banner}
        alt="/"
        className="max-w-[2000px] sm:block md:block hidden mt-10 w-fit m-auto"
      />
      <div className="max-w-[2000px] justify-center m-auto md:gap-[10rem] gap-[5rem] hidden sm:flex md:flex p-[7rem]">
        <div className="">
          <p className="font-[500] md:mb-5 ">REPARTO</p>
          <ul className="flex-col flex">
            <Link href="./donna" className="mt-2">
              Donna
            </Link>
            <Link href="./uomo" className="mt-2">
              Uomo
            </Link>
            <Link href="./abbigliamento" className="mt-2">
              Abbigliamento
            </Link>
            <Link href="./accessori" className="mt-2">
              Accessori
            </Link>
          </ul>
        </div>
        <div>
          <p className="font-[500] mb-5">PROFILO</p>
          <ul className="flex-col flex">
            <Link href="./my-account" className="mt-2">
              Ordini
            </Link>
            <Link href="./my-account/resi" className="mt-2">
              Resi e Rimborsi
            </Link>
            <Link href="./my-account/preferiti" className="mt-2">
              Preferiti
            </Link>
            <Link href="./my-account/carrello" className="mt-2">
              Carrello
            </Link>
          </ul>
        </div>
        <div>
          <p className="font-[500] mb-5">SERVIZIO CLIENTI</p>
          <ul className="flex-col flex">
            <Link href="./servizio-clienti" className="mt-2">
              Traccia i miei ordini
            </Link>
            <Link href="./servizio-clienti/magazine" className="mt-2">
              Magazine
            </Link>
          </ul>
        </div>
        <div>
          <p className="font-[500] mb-7">ISCRIVITI ORA</p>
          <Link href="./servizio-clienti/newsletter" className="mt-2">
            Newsletter
          </Link>
        </div>
      </div>
      <div className="md:hidden sm:hidden">
        <FooterMB />
      </div>
      <div className="flex justify-center gap-10 p-10">
        <AiFillFacebook />
        <AiOutlineTwitter />
        <AiOutlineInstagram />
        <AiFillYoutube />
      </div>

      <div className="w-[70%] m-auto flex justify-center text-center">
        <p>
          Eiusmod sint pariatur irure ullamco aliquip occaecat magna adipisicing
          laborum tempor ea veniam. Quis in voluptate velit consectetur ad.
          Laborum magna et fugiat dolore ut adipisicing qui cupidatat excepteur
          voluptate sit quis.
        </p>
      </div>
      <div className="justify-center flex">
        <p className="font-[600]">© claudia</p>
      </div>
      <div className="text-[2.5rem] font-stardom flex justify-center p-10">
        e-commerce.
      </div>
    </footer>
  );
};

export default Footer;
