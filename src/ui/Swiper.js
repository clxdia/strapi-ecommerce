"use client";

import { React, useState } from "react";
import Image from "next/image";

import pic1 from "../images/desktop/slide1.png";
import pic2 from "../images/desktop/slide2.png";
import pic3 from "../images/desktop/slide3.png";

const SwiperComponent = () => {
  const sliders = [pic1, pic2, pic3];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fill, setFill] = useState(null);

  const slideOne = () => {
    // setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
    setCurrentSlide(0);
    setFill(!fill);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className="md:block hidden h-auto overflow-x-hidden w-[100%] relative">
      <div
        className="w-[300vw] flex h-fit -translate-x-[100vw] transition-all ease-out duration-[1s]"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <Image src={sliders[0]} alt="" className="w-[100%] h-full" />
        <Image src={sliders[1]} alt="" className="w-[100%] h-[100%]" />
        <Image src={sliders[2]} alt="" className="w-[100%] h-[100%]" />
      </div>
      <div className="absolute right-0 left-0 m-auto justify-center gap-2 w-[100px] flex bottom-[50px]">
        <input
          type="radio"
          id="slide1"
          name="slider"
          value="slide1"
          className="checked:text-black after:bg-headline"
          onClick={() => setCurrentSlide(0)}
        ></input>
        <input
          type="radio"
          id="slide2"
          name="slider"
          value="slide2"
          onClick={() => setCurrentSlide(1)}
        ></input>
        <input
          type="radio"
          id="slide2"
          name="slider"
          value="slide2"
          onClick={() => setCurrentSlide(2)}
        ></input>
      </div>
    </div>
  );
};

export default SwiperComponent;
