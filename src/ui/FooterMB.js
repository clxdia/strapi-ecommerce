import Link from "next/link";
import React from "react";
import Dropdown from "./Dropdown";

const FooterMB = () => {
  const repartoLink = [];
  repartoLink.push(
    <div className="mt-2">
      <Link href="/abbigliamento">Abbigliamento</Link>
    </div>
  );
  repartoLink.push(
    <div className="mt-4">
      <Link href="/">Elettronica</Link>
    </div>
  );
  repartoLink.push(
    <div className="mt-4">
      <Link href="/">Accessori</Link>
    </div>
  );

  const aiutoLink = [];
  aiutoLink.push(
    <div className="mt-2">
      <Link href="/servizio-clienti">Servizio Clienti</Link>
    </div>
  );
  aiutoLink.push(
    <div className="mt-4">
      <Link href="/">Spedizione</Link>
    </div>
  );
  aiutoLink.push(
    <div className="mt-4">
      <Link href="/">Pagamenti</Link>
    </div>
  );
  const accordionData = [
    {
      title: "Reparto",
      content: repartoLink,
      key: 1,
    },
    {
      title: "Aiuto",
      content: aiutoLink,
      key: 2,
    },
  ];

  return (
    <div className="w-[100%] flex-col">
      <div>
        {accordionData.map(({ title, content, key }) => (
          <Dropdown title={title} content={content} key={key} />
        ))}
      </div>
    </div>
  );
};

export default FooterMB;
