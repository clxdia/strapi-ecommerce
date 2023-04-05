"use client";

import { React, useEffect, useState } from "react";
import Image from "next/image";

import pic1 from "../images/mobile/slideMB1.png";
import pic2 from "../images/mobile/slideMB2.png";
import pic3 from "../images/mobile/slideMB3.png";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const SwiperComponentMB = () => {
  const sliders = [pic1, pic2, pic3];
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className="md:hidden sm:hidden block h-auto overflow-x-hidden w-[100%] relative">
      <div
        className="w-[300vw] max-w-[300vw] max-h-[100vw] flex h-fit -translate-x-[100vw] transition-all ease-out duration-[1s]"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <Image src={sliders[0]} alt="" className="w-[100%] h-full" />
        <Image src={sliders[1]} alt="" className="w-[100%] h-[100%]" />
        <Image src={sliders[2]} alt="" className="w-[100%] h-[100%]" />
      </div>

      <div className="absolute left-0 top-[40%] p-4 cursor-pointer">
        <BsChevronLeft
          onClick={prevSlide}
          size={30}
          className={"stroke-[1px] cursor-pointer stroke-white"}
        />
      </div>
      <div className="absolute right-0 top-[40%] p-4">
        <BsChevronRight
          onClick={nextSlide}
          size={30}
          className={"stroke-[1px] cursor-pointer stroke-white"}
        />
      </div>
    </div>
  );
};

export default SwiperComponentMB;
