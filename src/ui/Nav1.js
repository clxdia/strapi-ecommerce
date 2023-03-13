import Link from "next/link";
import React from "react";
import navStyles from "../styles/Nav.module.css";

const Nav1 = () => {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link className="text-[13px]" href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="text-[13px]" href="view-all">
            Vedi tutto
          </Link>
        </li>
        <li>
          <Link className="text-[13px]" href="servizio-clienti">
            Servizio Clienti
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav1;
