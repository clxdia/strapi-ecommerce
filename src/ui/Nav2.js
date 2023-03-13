import Link from "next/link";
import React from "react";
import navStyles from "../styles/Nav.module.css";
import { HiOutlineUser, HiOutlineShoppingBag } from "react-icons/hi";
import { IoMdHeartEmpty } from "react-icons/io";

const Nav2 = () => {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href="/my-account/preferiti" className={navStyles.li}>
            <IoMdHeartEmpty />
          </Link>
        </li>
        <li>
          <p className={navStyles.li}>
            <HiOutlineShoppingBag />
          </p>
        </li>
        <li>
          <Link href="/my-account" className={navStyles.li}>
            <HiOutlineUser />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav2;
