import Link from "next/link";
import React from "react";

import EmptyPage from "../../ui/EmptyPage";

const MyAccount = () => {
  return (
    <main className="w-[95%] m-auto">
      <h1 className="text-[2rem] font-work">Il mio account</h1>
      <h2 className="mt-2">
        Dal tuo account puoi gestire i tuoi ordini, resi e dati di contatto.
      </h2>
      <EmptyPage />
    </main>
  );
};

export default MyAccount;
