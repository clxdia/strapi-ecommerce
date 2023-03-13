import React from "react";
import {
  AiFillFacebook,
  AiFillYoutube,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import FooterMB from "./FooterMB";

const Footer = () => {
  return (
    <footer className=" bg-footer">
      <div className="max-w-[1800px] justify-center md:gap-[10rem] gap-[5rem] hidden sm:flex md:flex p-[7rem]">
        <div className="">
          <p className="font-[500] md:mb-5 ">REPARTO</p>
          <p className="mt-2">Donna</p>
          <p className="mt-2">Uomo</p>
          <p className="mt-2">Neonato</p>
          <p className="mt-2">Accessori</p>
          <p className="mt-2">Donna</p>
          <p className="mt-2">Donna</p>
        </div>
        <div>
          <p className="font-[500] mb-5">INFORMAZIONI</p>
          <p className="mt-2">Donna</p>
          <p className="mt-2">Uomo</p>
          <p className="mt-2">Neonato</p>
          <p className="mt-2">Accessori</p>
          <p className="mt-2">Donna</p>
          <p className="mt-2">Donna</p>
        </div>
        <div>
          <p className="font-[500] mb-5">AIUTO</p>
          <p className="mt-2">Donna</p>
          <p className="mt-2">Uomo</p>
          <p className="mt-2">Neonato</p>
          <p className="mt-2">Accessori</p>
          <p className="mt-2">Donna</p>
          <p className="mt-2">Donna</p>
        </div>
        <div>
          <p className="font-[500] mb-5">ISCRIVITI ORA</p>
          <p className="mt-2">Donna</p>
          <p className="mt-2">Uomo</p>
          <p className="mt-2">Neonato</p>
          <p className="mt-2">Accessori</p>
          <p className="mt-2">Donna</p>
          <p className="mt-2">Donna</p>
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
      <div className="text-[2.5rem] font-[600] flex justify-center p-10">
        e-commerce.
      </div>
    </footer>
  );
};

export default Footer;
