"use client";

import Link from "next/link";
import React from "react";

const shoppingLink = [];
shoppingLink.push([
  <div className="font-[300] hover:text-redish">
    <Link href="/abbigliamento">Abbigliamento</Link>
  </div>,
  <div className="mt-2 font-[300] hover:text-redish ">
    <Link href="/uomo">Uomo</Link>
  </div>,
  <div className="mt-2 font-[300] hover:text-redish ">
    <Link href="/donna">Donna</Link>
  </div>,
  <div className="mt-2 font-[300] hover:text-redish ">
    <Link href="/accessori">Accessori</Link>
  </div>,
  <div className="mt-2 font-[300] hover:text-redish ">
    <Link href="/elettronica">Elettronica</Link>
  </div>,
]);

const magazineLink = [];
magazineLink.push([
  <div className="mt-2">
    <Link href="/servizio-clienti/magazine">Ultime News</Link>
  </div>,
]);

const newsletterLink = [];
newsletterLink.push([
  <div className="mt-2">
    <Link href="/servizio-clienti/newsletter">Newsletter</Link>
  </div>,
]);

const accordionData = [
  {
    id: 1,
    title: "MENU",
    children: [
      {
        id: "1A",
        title: "Shopping",
        children: [{ id: "", title: shoppingLink }],
      },
      {
        id: "1B",
        title: "Magazine",
        children: [{ id: "", title: magazineLink }],
      },
      {
        id: "1C",
        title: "Contatti",
        children: [{ id: "", title: newsletterLink }],
      },
    ],
  },
  {
    id: 2,
    title: "AIUTO",
    children: [
      {
        id: "2A",
        title: "Pit",
        children: [{ id: "", title: "From t top mid" }],
      },
    ],
  },
];

const SubLevelComp = ({ item, renderNestedLevels }) => {
  const [selected, setselected] = React.useState("");

  const toggle = () => {
    setselected(selected === "" ? "active" : "");
  };

  const hasChildren = (item) => {
    return Array.isArray(item.children) && item.children.length > 0;
  };

  return (
    <div className="bg-background w-[100%] flex flex-col justify-between md:hidden ">
      <div className="bg-white w-[100%] m-auto flex justify-between mt-1 pb-4 pt-4">
        <p
          onClick={() => toggle()}
          style={{ cursor: hasChildren(item) ? "pointer" : "" }}
          className="ml-6 font-work "
        >
          {item.title}{" "}
        </p>
        <p>
          {hasChildren(item) && (
            <span className="mr-7">{selected === "active" ? "-" : "+"}</span>
          )}
        </p>
      </div>
      {selected && (
        <div className="">
          {hasChildren(item) && renderNestedLevels(item.children)}
        </div>
      )}
    </div>
  );
};

function Accordion() {
  const renderNestedLevels = (data) => {
    return data.map((item, itemIndex) => (
      <SubLevelComp
        item={item}
        renderNestedLevels={renderNestedLevels}
        key={itemIndex}
      />
    ));
  };

  return renderNestedLevels(accordionData);
}

export default Accordion;
