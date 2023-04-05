"use client";

import Link from "next/link";
import React, { use, useContext } from "react";
import { useState } from "react";
import {
  HiOutlineMenuAlt3,
  HiOutlineShoppingBag,
  HiOutlineUser,
} from "react-icons/hi";
import { CgClose } from "react-icons/cg";

import { BsArrowRightShort } from "react-icons/bs";
import { CartContext } from "../app/CartContext";
import { RiArrowDropDownLine } from "react-icons/ri";

const NavMB = () => {
  const [nav, setNav] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleLinkClick = () => {
    setNav(false);
  };

  const handleLinkClickCategories = () => {
    setDropdown(!dropdown);
  };

  const { notif } = useContext(CartContext);

  return (
    <header className="md:hidden bg-white w-[100%] fixed z-[99] text-[2.5rem] h-[5rem]">
      <nav className="w-[95%] m-auto h-[5rem]">
        <ul className="flex items-center justify-between h-[5rem]">
          <li className="mb-3">
            <Link href="/" className="text-left font-stardom sm:hidden">
              <span className="text-redish ">e-</span>
              c.
            </Link>
            <Link href="/" className="text-left md:hidden sm:block hidden ">
              <h1 className="font-stardom">
                <span className="text-redish ">e-</span>
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
        <nav className="w-[95%] m-auto mt-1">
          <div className="flex">
            <h1 className="font-stardom">
              <span className="text-redish">e-</span>
              commerce.
            </h1>
          </div>
          <ul className="sm:p-5 text-center py-5 px-5 text-[1.5rem] font-clash">
            <li className="flex justify-center py-4 hover:text-redish hover:ease-out hover:transition pointer">
              <Link href="/" onClick={handleLinkClick}>
                Home
              </Link>
            </li>
            <hr></hr>
            <li className="flex justify-center items-center py-4 hover:text-redish hover:ease-out hover:transition pointer">
              <Link href="/view-all" onClick={handleLinkClick}>
                Vedi Tutto
              </Link>
            </li>
            <hr></hr>
            <li className="flex justify-center items-center py-4 hover:text-redish hover:ease-out hover:transition pointer text-center">
              <Link href="/servizio-clienti" onClick={handleLinkClick}>
                Servizio Clienti
              </Link>
            </li>
            <hr></hr>
            <li className="flex-col flex py-4 pointer">
              <div
                className="flex items-center justify-center"
                onClick={handleLinkClickCategories}
              >
                <p>Categorie</p>
                <RiArrowDropDownLine />
              </div>

              {dropdown && (
                <ul className="text-[1.2rem] mt-3">
                  <li className="hover:text-redish py-3 hover:ease-out hover:transition flex justify-center items-center">
                    <Link href="/abbigliamento" onClick={handleLinkClick}>
                      Abbigliamento
                    </Link>
                  </li>
                  <li className="hover:text-redish py-3 hover:ease-out hover:transition flex justify-center items-center">
                    <Link href="/uomo" onClick={handleLinkClick}>
                      Uomo
                    </Link>
                  </li>
                  <li className="hover:text-redish py-3 hover:ease-out hover:transition flex justify-center items-center">
                    <Link href="/donna" onClick={handleLinkClick}>
                      Donna
                    </Link>
                  </li>
                  <li className="hover:text-redish py-3 hover:ease-out hover:transition flex justify-center items-center">
                    <Link href="/accessori" onClick={handleLinkClick}>
                      Accessori
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavMB;
