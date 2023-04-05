"use client";

import Link from "next/link";
import React from "react";

const AsideWA = ({ abbigliamento, acc, donna, uomo }) => {
  return (
    <>
      <Link href="/view-all" className="uppercase font-medium">
        Categorie
      </Link>
      <ul className="ml-3">
        <li className="mt-3">
          <Link
            href="/abbigliamento"
            className="hover:underline-offset-3 hover:underline"
            style={{ color: abbigliamento, textDecorationColor: abbigliamento }}
          >
            Abbigliamento
          </Link>
        </li>
        <li className="mt-2">
          <Link
            href="/donna"
            className="hover:underline-offset-3 hover:underline"
            style={{ color: donna, textDecorationColor: donna }}
          >
            Donna
          </Link>
        </li>
        <li className="mt-2">
          <Link
            href="/uomo"
            className="hover:underline-offset-3 hover:underline"
            style={{ color: uomo, textDecorationColor: uomo }}
          >
            Uomo
          </Link>
        </li>
        <li className="mt-2">
          <Link
            href="/accessori"
            className="hover:underline-offset-3 hover:underline"
            style={{ color: acc, textDecorationColor: acc }}
          >
            Accessori
          </Link>
        </li>
      </ul>
    </>
  );
};

export default AsideWA;
