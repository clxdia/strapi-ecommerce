"use client";

import Link from "next/link";
import React, { useContext, useEffect, useRef } from "react";
import { useState } from "react";
import Cart from "./Cart";

import { HiOutlineShoppingBag, HiOutlineUser } from "react-icons/hi";

import { IoMdHeartEmpty } from "react-icons/io";
import { CartContext } from "../app/CartContext";

const HeaderComponent = () => {
  const [nav, setNav] = useState(false);

  const { cartOpen } = useContext(CartContext);
  const [open, setOpen] = useState(false);
  const componentRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        componentRef.current &&
        !componentRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [componentRef]);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleLinkClick = () => {
    setNav(false);
  };

  return (
    <header className="bg-white md:block fixed w-[100%] z-[99] h-[9rem] hidden">
      <div className="md:flex w-[100%] max-w-[1800px] m-auto h-[9rem] justify-between items-center relative">
        <nav className="w-[100%] flex flex-col h-[9rem] ">
          <ul className="flex justify-between w-[95%] m-auto items-center text-[13px]">
            <li className="flex gap-3">
              <Link
                className="decoration-black no-underline hover:underline decoration-solid decoration-1 underline-offset-4"
                href="/"
              >
                Home
              </Link>
              <Link
                className="decoration-black no-underline hover:underline decoration-solid decoration-1 underline-offset-4"
                href="view-all"
              >
                Vedi tutto
              </Link>
              <Link
                className="decoration-black no-underline hover:underline decoration-solid decoration-1 underline-offset-4"
                href="servizio-clienti"
              >
                Servizio Clienti
              </Link>
            </li>
            <li className="mr-28 text-[2.5rem] font-[600]">
              <Link href="/" className="text-center md:block">
                <span className="text-redish font-[200]">e-</span>
                commerce.
              </Link>
            </li>
            <li className="flex gap-3 text-[16px]">
              <Link
                className="decoration-black no-underline hover:underline decoration-solid decoration-1 underline-offset-4"
                href="/my-account/preferiti"
              >
                <IoMdHeartEmpty />
              </Link>
              <div className="decoration-black no-underline hover:underline decoration-solid decoration-1 underline-offset-4">
                <HiOutlineShoppingBag onMouseEnter={() => setOpen(!open)} />
              </div>
              <Link
                className="decoration-black no-underline hover:underline decoration-solid decoration-1 underline-offset-4"
                href="/my-account"
              >
                <HiOutlineUser className="decoration-black no-underline hover:underline decoration-solid decoration-1 underline-offset-4" />
              </Link>
            </li>
          </ul>
          <ul className="flex justify-center font-work font-[300] mt-5 mb-3">
            <li className="flex gap-10">
              <Link
                className="decoration-black no-underline hover:underline decoration-solid decoration-1 underline-offset-4"
                href="/abbigliamento"
              >
                Abbigliamento
              </Link>
              <Link
                className="decoration-black no-underline hover:underline decoration-solid decoration-1 underline-offset-4"
                href="/uomo"
              >
                Uomo
              </Link>
              <Link
                className="decoration-black no-underline hover:underline decoration-solid decoration-1 underline-offset-4"
                href="/donna"
              >
                Donna
              </Link>
              <Link
                className="decoration-black no-underline hover:underline decoration-solid decoration-1 underline-offset-4"
                href="/accessori"
              >
                Accessori
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {cartOpen && <Cart ref={componentRef} onClick={() => setOpen(!open)} />}
    </header>
  );
};

export default HeaderComponent;
