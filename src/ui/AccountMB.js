import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { TfiPackage } from "react-icons/tfi";
import { GiStarsStack } from "react-icons/gi";
import { RiRefund2Line } from "react-icons/ri";
import { IoMailOpenOutline } from "react-icons/io5";
import Link from "next/link";
import { FiHeart } from "react-icons/fi";

const AccountMB = () => {
  return (
    <section className="w-[100%] gap-2 grid-cols-2 md:hidden grid">
      <div className=" pt-5 pb-5 pr-2 pl-3 bg-white   ">
        <Link href="/my-account" className="flex gap-2 justify-center">
          <TfiPackage size={23} />
          <p>I miei ordini</p>
        </Link>
      </div>
      <div className=" pt-5 pb-5 pr-2 pl-3 bg-white">
        <Link
          href="/my-account/preferiti"
          className="flex gap-2  justify-center"
        >
          <FiHeart size={23} />
          <p>Preferiti</p>
        </Link>
      </div>
      <div className=" pt-5 pb-5 pr-2 pl-3 bg-white">
        <Link href="/my-account/resi" className="flex gap-2  justify-center">
          <RiRefund2Line size={23} />
          <p>Resi e Rimborsi</p>
        </Link>
      </div>
      <div className=" pt-5 pb-5 pr-2 pl-3 bg-white">
        <Link
          href="/servizio-clienti/newsletter"
          className="flex gap-2  justify-center"
        >
          <IoMailOpenOutline size={23} />
          <p>Newsletter</p>
        </Link>
      </div>
    </section>
  );
};

export default AccountMB;
