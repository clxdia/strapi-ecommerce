import Link from "next/link";
import React from "react";
import Dropdown from "./Dropdown";
import bannerMB from "../images/mobile/bannerMB.png";
import Image from "next/image";

const FooterMB = () => {
  const repartoLink = [];
  repartoLink.push(
    <div className="mt-2">
      <Link href="/abbigliamento">Abbigliamento</Link>
    </div>
  );
  repartoLink.push(
    <div className="mt-4">
      <Link href="/donna">Donna</Link>
    </div>
  );
  repartoLink.push(
    <div className="mt-4">
      <Link href="/uomo">Uomo</Link>
    </div>
  );
  repartoLink.push(
    <div className="mt-4">
      <Link href="/accessori">Accessori</Link>
    </div>
  );

  const aiutoLink = [];
  aiutoLink.push(
    <div className="mt-2">
      <Link href="/servizio-clienti">Traccia i miei ordini</Link>
    </div>
  );
  aiutoLink.push(
    <div className="mt-4">
      <Link href="/">Magazine</Link>
    </div>
  );

  const profiloLink = [];
  profiloLink.push(
    <div className="mt-2">
      <Link href="./my-account">Ordini</Link>
    </div>
  );
  profiloLink.push(
    <div className="mt-4">
      <Link href="./my-account/resi">Resi e Rimborsi</Link>
    </div>
  );
  profiloLink.push(
    <div className="mt-4">
      <Link href="./my-account/preferiti">Preferiti</Link>
    </div>
  );
  profiloLink.push(
    <div className="mt-4">
      <Link href="./my-account/carrello">Carrello</Link>
    </div>
  );

  const iscrivitiLink = [];
  iscrivitiLink.push(
    <Link href="./servizio-clienti/newsletter">Newsletter</Link>
  );

  const accordionData = [
    {
      title: "Reparto",
      content: repartoLink,
      key: 1,
    },
    {
      title: "Servizio Clienti",
      content: aiutoLink,
      key: 2,
    },
    {
      title: "Profilo",
      content: profiloLink,
      key: 3,
    },
    {
      title: "Iscriviti Ora",
      content: iscrivitiLink,
      key: 4,
    },
  ];

  return (
    <div className="w-[100%] flex-col">
      <Image
        src={bannerMB}
        alt="/"
        className="md:hidden sm:block block mt-10"
      />
      <div>
        {accordionData.map(({ title, content, key }) => (
          <Dropdown title={title} content={content} key={key} />
        ))}
      </div>
    </div>
  );
};

export default FooterMB;
