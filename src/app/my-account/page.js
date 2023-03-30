import Link from "next/link";
import React from "react";

import EmptyPage from "../../ui/EmptyPage";

const MyAccount = () => {
  return (
    <main className="w-full m-auto">
      <h1 className="md:text-[2rem] text-center md:text-left font-work text-[20px]">
        Il mio account
      </h1>
      <h2 className="mt-2 text-center md:text-left md:text-[15px] text-[13px] ">
        Da qui puoi gestire i tuoi ordini, resi e preferiti.
      </h2>
      <EmptyPage />
    </main>
  );
};

export default MyAccount;
