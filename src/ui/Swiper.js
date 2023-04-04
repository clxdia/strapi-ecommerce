"use client";

import { React, useEffect, useState } from "react";
import Image from "next/image";

import pic1 from "../images/desktop/slide1.png";
import pic2 from "../images/desktop/slide2.png";
import pic3 from "../images/desktop/slide3.png";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const SwiperComponent = () => {
  const sliders = [pic1, pic2, pic3];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [stroke, setStroke] = useState("#f07167");

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };
  useEffect(() => {
    if (currentSlide === 2) {
      setStroke("#fdfcdc");
    } else {
      setStroke("#f07167");
    }
  });

  return (
    <div className="md:block sm:block hidden h-auto overflow-x-hidden w-[100%] relative">
      <div
        className="w-[300vw] flex h-fit -translate-x-[100vw] transition-all ease-out duration-[1s]"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <Image src={sliders[0]} alt="" className="w-[100%] h-full" />
        <Image src={sliders[1]} alt="" className="w-[100%] h-[100%]" />
        <Image src={sliders[2]} alt="" className="w-[100%] h-[100%]" />
      </div>

      <div className="absolute md:left-10 left-6 top-1/2 p-4 cursor-pointer">
        <BsChevronLeft
          onClick={prevSlide}
          size={40}
          style={{ stroke: stroke }}
          className={"stroke-[1px] stroke-red-600 cursor-pointer "}
        />
      </div>
      <div className="absolute md:right-10 right-6 top-1/2 p-4">
        <BsChevronRight
          onClick={nextSlide}
          size={40}
          style={{ stroke: stroke }}
          className={"stroke-[1px] cursor-pointer"}
        />
      </div>
    </div>
  );
};

export default SwiperComponent;
