"use client";

import Link from "next/link";
import React, { useContext, useEffect } from "react";
import { useState } from "react";
import Cart from "./Cart";

import { HiOutlineShoppingBag, HiOutlineUser } from "react-icons/hi";

import { IoMdHeartEmpty } from "react-icons/io";
import { CartContext } from "../app/CartContext";

const HeaderComponent = () => {
  const [bgColor, setBgColor] = useState("transparent");

  const { cartOpen } = useContext(CartContext);
  const { handleMouseEnter } = useContext(CartContext);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setBgColor("white");
      } else {
        setBgColor("transparent");
      }
    });
  }, []);

  return (
    <header
      className="font-alpino md:block bg-white fixed w-[100%] z-[99] h-[5rem] hidden transition-all ease-out duration-[1s]"
      style={{ backgroundColor: bgColor }}
    >
      <div className="md:flex w-full h-[5rem] justify-between items-center">
        <nav className="w-[100%] flex flex-col h-[5rem] ">
          <ul className="flex justify-between w-[95%] m-auto items-center text-[13px]">
            <li className="flex gap-3 text-[15px]">
              <Link
                className="decoration-black no-underline hover:underline decoration-solid decoration-1 underline-offset-4"
                href="/"
              >
                Home
              </Link>
              <Link
                className="decoration-black no-underline hover:underline decoration-solid decoration-1 underline-offset-4"
                href="/view-all"
              >
                Vedi tutto
              </Link>
              <Link
                className="decoration-black no-underline hover:underline decoration-solid decoration-1 underline-offset-4"
                href="/servizio-clienti"
              >
                Servizio Clienti
              </Link>
            </li>
            <li className="mr-[8.3rem] text-[2.5rem] font-stardom">
              <Link href="/" className="text-center md:block">
                <span className="text-redish">e-</span>
                commerce.
              </Link>
            </li>
            <li className="flex gap-3 text-[16px]">
              <Link
                className="decoration-black no-underline hover:underline decoration-solid decoration-1 underline-offset-4"
                href="/my-account/preferiti"
                aria-label="Preferiti"
              >
                <IoMdHeartEmpty />
              </Link>
              <div className="decoration-black no-underline hover:underline decoration-solid decoration-1 underline-offset-4">
                <Link href="/my-account/carrello" aria-label="Carrello">
                  <HiOutlineShoppingBag onMouseEnter={handleMouseEnter} />
                </Link>
              </div>
              <Link
                className="decoration-black no-underline hover:underline decoration-solid decoration-1 underline-offset-4"
                href="/my-account"
                aria-label="Profilo"
              >
                <HiOutlineUser className="decoration-black no-underline hover:underline decoration-solid decoration-1 underline-offset-4" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {cartOpen && <Cart onClick={() => setOpen(!open)} />}
    </header>
  );
};

export default HeaderComponent;
