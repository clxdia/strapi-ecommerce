import Link from "next/link";
import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { TfiPackage } from "react-icons/tfi";

import { RiRefund2Line } from "react-icons/ri";
import { IoMailOpenOutline } from "react-icons/io5";
import aside from "../images/accountAside.png";
import Image from "next/image";
import { HiHeart } from "react-icons/hi";
import { FiHeart } from "react-icons/fi";

const AccountAside = () => {
  return (
    <aside className="w-auto">
      <Image
        src={aside}
        alt="/"
        className="w-[400px] h-auto mb-5 hidden md:block"
      />
      <ul className="md:block hidden">
        <li className="items-center pt-5 pb-5 pr-2 pl-3 bg-white">
          <Link
            href="/my-account"
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-2">
              <TfiPackage size={23} />
              <p>I miei ordini</p>
            </div>
            <BsArrowRightShort size={20} />
          </Link>
        </li>
        <li className="items-center pt-5 pb-5 pr-2 pl-3">
          <Link
            href="/my-account/preferiti"
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-2">
              <FiHeart size={23} />
              <p>Preferiti</p>
            </div>
            <BsArrowRightShort size={20} />
          </Link>
        </li>
        <li className="items-center pt-5 pb-5 pr-2 pl-3 bg-white">
          <Link
            href="/my-account/resi"
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-2">
              <RiRefund2Line size={23} />
              <p>Resi e rimborsi</p>
            </div>
            <BsArrowRightShort size={20} />
          </Link>
        </li>
        <li className="items-center pt-5 pb-5 pr-2 pl-3">
          <Link
            href="/servizio-clienti/newsletter"
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-2">
              <IoMailOpenOutline size={23} />
              <p>Newsletter</p>
            </div>
            <BsArrowRightShort size={20} />
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default AccountAside;
