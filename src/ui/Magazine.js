import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

const Magazine = ({ magazine }) => {
  return (
    <Link
      href="servizio-clienti/magazine/[id]"
      as={`servizio-clienti/magazine/${magazine.id}`}
      className="mb-[20px]"
    >
      <div className="flex md:flex-row mb-5 h-full bg-white sm:flex-row flex-col w-auto max-w-[400px] m-auto sm:max-w-none">
        <div className="w-[100%]">
          <Image src={magazine.pic} alt="/" className="w-[100%]" />
        </div>
        <div className="bg-white p-4 m-auto w-[100%] h-[100%] flex-col justify-center flex">
          <p className="font-work font-[300] text-[0.8rem]">INSIDER</p>
          <p className="font-work text-[1.2rem]">{magazine.title}</p>
          <p className="font-cursive text-[0.9rem]">
            Fugiat ad et ad est deserunt aute aliquip culpa consequat do cillum
            laborum officia.
          </p>
          <p className="font-work flex items-center text-[0.8rem] font-[500]">
            Read the story <BsArrowRightShort size={15} />
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Magazine;
