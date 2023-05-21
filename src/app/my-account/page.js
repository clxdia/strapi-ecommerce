import React from "react";

import EmptyPage from "../../ui/EmptyPage";

export const metadata = {
  title: "E-Commerce | Il mio account",
};

const MyAccount = () => {
  return (
    <main className="w-[100%] md:w-[95%] mx-auto md:h-screen">
      <h1 className="md:text-[2rem] text-center md:text-left font-clash font-medium text-[20px]">
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
