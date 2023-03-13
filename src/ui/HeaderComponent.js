"use client";

import Link from "next/link";
import React from "react";
import { useState } from "react";
import Nav1 from "./Nav1";
import Nav2 from "./Nav2";
import Cart from "./Cart";
import navStyles from "../styles/Nav.module.css";

import {
  HiOutlineMenuAlt3,
  HiOutlineShoppingBag,
  HiOutlineUser,
} from "react-icons/hi";
import { CgClose } from "react-icons/cg";

import { BsArrowRightShort } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";

const HeaderComponent = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleLinkClick = () => {
    setNav(false);
  };

  const [open, setOpen] = useState(false);

  return (
    <header className="bg-background fixed w-[100%] z-[99]">
      <div className="flex w-[95%] max-w-[1800px] m-auto h-[5rem] justify-between items-center relative">
        <Nav1 />
        <div className="text-[2.5rem] font-[600] absolute m-auto left-0 right-0 w-auto z-[1] ">
          <Link href="/" className="text-center md:block hidden">
            <span className="text-redish font-[200]">e-</span>
            commerce.
          </Link>
          <div className="md:hidden h-[2rem] flex items-center justify-between">
            <Link href="/" className="text-left sm:hidden">
              <span className="text-redish font-[200]">e-</span>
              c.
            </Link>

            <Link href="/" className="text-left md:hidden sm:block hidden ">
              <span className="text-redish font-[200]">e-</span>
              commerce.
            </Link>
            <div className="flex gap-4">
              <p>
                <HiOutlineShoppingBag
                  size={30}
                  onClick={() => setOpen(!open)}
                />
              </p>
              <Link href="/my-account">
                <HiOutlineUser size={30} />
              </Link>

              <div onClick={handleNav} className="md:hidden block z-[100]">
                {nav ? <CgClose size={30} /> : <HiOutlineMenuAlt3 size={30} />}
              </div>
              <div
                className={
                  nav
                    ? "md:hidden fixed top-0 bg-background left-0 right-0 flex w-full h-screen align-items text-center ease-in duration-300"
                    : "md:hidden fixed top-0 left-[-100%] right-0  flex  w-full h-screen  text-center ease-in duration-300"
                }
              >
                <nav className="p-2 w-[100%]">
                  <div className="flex">
                    <h1>
                      <span className="text-redish font-[200]">e-</span>
                      commerce.
                    </h1>
                  </div>
                  <ul className="p-5 text-left text-[1.5rem] font-[400] ">
                    <li className="flex justify-between items-center py-5 hover:text-redish hover:ease-out hover:transition pointer">
                      <Link href="/" onClick={handleLinkClick}>
                        Home
                      </Link>
                      <BsArrowRightShort size={25} />
                    </li>
                    <li className="flex justify-between items-center py-5 hover:text-redish hover:ease-out hover:transition pointer">
                      <Link href="/view-all" onClick={handleLinkClick}>
                        Vedi Tutto
                      </Link>
                      <BsArrowRightShort size={25} />
                    </li>
                    <li className="flex justify-between items-center py-5 hover:text-redish hover:ease-out hover:transition pointer">
                      <Link href="/servizio-clienti" onClick={handleLinkClick}>
                        Servizio Clienti
                      </Link>
                      <BsArrowRightShort size={25} />
                    </li>
                    <li className="flex-col flex  py-5  pointer">
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
            </div>
          </div>
        </div>

        <nav className={navStyles.nav}>
          <ul>
            <li>
              <Link href="/my-account/preferiti" className={navStyles.li}>
                <IoMdHeartEmpty />
              </Link>
            </li>
            <li>
              <p className={navStyles.li}>
                <HiOutlineShoppingBag onClick={() => setOpen(!open)} />
              </p>
            </li>
            <li>
              <Link href="/my-account" className={navStyles.li}>
                <HiOutlineUser />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="max-w-[95%] m-auto md:flex justify-center relative mt-7 mb-5 hidden">
        <div className="flex justify-center font-work font-[300]">
          <div className="flex justify-center gap-6 lg:gap-10 text-[0.9rem] lg:text-[1rem]">
            <Link href="/abbigliamento">Abbigliamento</Link>
            <Link href="/uomo">Uomo</Link>
            <Link href="/donna">Donna</Link>
            <Link href="/accessori">Accessori</Link>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </header>
  );
};

export default HeaderComponent;
