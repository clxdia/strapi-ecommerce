"use client";
import React, { useState } from "react";
import { AiOutlineMinus } from "react-icons/ai";
import { BsPlus } from "react-icons/bs";

const Dropdown = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="w-[90%] m-auto flex-col">
      <div
        className="flex justify-between items-center pb-4 pt-4 "
        onClick={() => setIsActive(!isActive)}
      >
        <div className=" font-[500]">{title}</div>
        <div>{isActive ? <AiOutlineMinus /> : <BsPlus size={21} />}</div>
      </div>
      {isActive && (
        <div className="text-[0.9rem] w-[95%] m-auto">{content}</div>
      )}
    </div>
  );
};

export default Dropdown;
