"use client";

import Link from "next/link";
import React, { useContext } from "react";
import { useState } from "react";
import {
  HiOutlineMenuAlt3,
  HiOutlineShoppingBag,
  HiOutlineUser,
} from "react-icons/hi";
import { CgClose } from "react-icons/cg";

import { BsArrowRightShort } from "react-icons/bs";
import { CartContext } from "../app/CartContext";
import Cart from "./Cart";

const NavMB = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleLinkClick = () => {
    setNav(false);
  };

  const { notif } = useContext(CartContext);

  return (
    <header className="md:hidden bg-white w-[100%] fixed z-[99] text-[2.5rem] font-[600] h-[5rem]">
      <nav className="w-[95%] m-auto h-[5rem]">
        <ul className="flex items-center justify-between h-[5rem]">
          <li className="mb-3">
            <Link href="/" className="text-left sm:hidden">
              <span className="text-redish font-[200]">e-</span>
              c.
            </Link>
            <Link href="/" className="text-left md:hidden sm:block hidden ">
              <h1>
                <span className="text-redish font-[200]">e-</span>
                commerce.
              </h1>
            </Link>
          </li>
          <li className="flex gap-3">
            <Link href="/my-account">
              <HiOutlineUser size={30} />
            </Link>
            <Link href="/my-account/carrello" className="relative pb-1 pr-1">
              <HiOutlineShoppingBag size={30} />
              {notif && (
                <div className="bg-redish w-4 h-4 absolute bottom-0 right-0 rounded-full flex justify-center text-white text-[10px]">
                  {notif}
                </div>
              )}
            </Link>

            <div onClick={handleNav} className="block z-[100]">
              {nav ? <CgClose size={30} /> : <HiOutlineMenuAlt3 size={30} />}
            </div>
          </li>
        </ul>
      </nav>
      <div
        className={
          nav
            ? "fixed top-0 bg-white left-0 right-0 flex w-full h-screen align-items text-center ease-in duration-300"
            : "fixed top-0 left-[-100%] right-0  flex  w-full h-screen  text-center ease-in duration-300"
        }
      >
        <nav className="w-[95%] mx-auto mt-1">
          <div className="flex">
            <h1 className="font-[600]">
              <span className="text-redish font-[200]">e-</span>
              commerce.
            </h1>
          </div>
          <ul className="px-5 sm:p-5 text-left text-[1.5rem] font-[400] ">
            <li className="flex justify-between items-center py-4 hover:text-redish hover:ease-out hover:transition pointer">
              <Link href="/" onClick={handleLinkClick}>
                Home
              </Link>
              <BsArrowRightShort size={25} />
            </li>
            <hr></hr>
            <li className="flex justify-between items-center py-4 hover:text-redish hover:ease-out hover:transition pointer">
              <Link href="/view-all" onClick={handleLinkClick}>
                Vedi Tutto
              </Link>
              <BsArrowRightShort size={25} />
            </li>
            <hr></hr>
            <li className="flex justify-between items-center py-4 hover:text-redish hover:ease-out hover:transition pointer">
              <Link href="/servizio-clienti" onClick={handleLinkClick}>
                Servizio Clienti
              </Link>
              <BsArrowRightShort size={25} />
            </li>
            <hr></hr>
            <li className="flex-col flex  py-4  pointer">
              <p onClick={handleLinkClick} href="/">
                Categorie
              </p>
              <ul className="ml-5 text-[1.2rem] mt-3">
                <li className="hover:text-redish py-3 hover:ease-out hover:transition flex justify-between items-center">
                  <Link href="/abbigliamento" onClick={handleLinkClick}>
                    Abbigliamento
                  </Link>
                  <BsArrowRightShort size={25} />
                </li>
                <li className="hover:text-redish py-3 hover:ease-out hover:transition flex justify-between items-center">
                  <Link href="/uomo" onClick={handleLinkClick}>
                    Uomo
                  </Link>
                  <BsArrowRightShort size={25} />
                </li>

                <li className="hover:text-redish py-3 hover:ease-out hover:transition flex justify-between items-center">
                  <Link href="/donna" onClick={handleLinkClick}>
                    Donna
                  </Link>
                  <BsArrowRightShort size={25} />
                </li>

                <li className="hover:text-redish py-3 hover:ease-out hover:transition flex justify-between items-center">
                  <Link href="/accessori" onClick={handleLinkClick}>
                    Accessori
                  </Link>
                  <BsArrowRightShort size={25} />
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavMB;
