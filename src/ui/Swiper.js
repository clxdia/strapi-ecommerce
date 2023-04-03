"use client";

import React, { use, useState } from "react";
import { Navigation, Pagination, Autoplay } from "swiper";
import Image from "next/image";

import pic1 from "../images/desktop/slide6.png";
import pic2 from "../images/desktop/slide5.png";
import pic3 from "../images/desktop/slide4.png";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Image by https://www.freepik.com/free-vector/flat-design-clothing-store-logo-design_28815161.htm#query=clothes%20store%20logo&position=38&from_view=search&track=sph

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css";

import SwiperStyles from "../styles/Swiper.module.css";
import { TbPoint, TbPointFilled, TbSettingsFilled } from "react-icons/tb";
// import required modules

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
    // <div className={SwiperStyles.html}>
    //   <div className={SwiperStyles.body}>
    //     <Swiper
    //       spaceBetween={30}
    //       centeredSlides={true}
    //       autoplay={{
    //         delay: 5000,
    //         disableOnInteraction: false,
    //       }}
    //       pagination={{
    //         clickable: true,
    //       }}
    //       navigation={true}
    //       modules={[Autoplay, Pagination, Navigation]}
    //       className={SwiperStyles.swiper}
    //     >
    //       <SwiperSlide className={SwiperStyles.swiper_slide}>
    //         <Image src={pic1} alt="/" width="auto" height="600"></Image>
    //       </SwiperSlide>
    //       <SwiperSlide className={SwiperStyles.swiper_slide}>
    //         <Image src={pic2} alt="/" width="auto" height="600"></Image>
    //       </SwiperSlide>
    //       <SwiperSlide className={SwiperStyles.swiper_slide}>
    //         <Image src={pic3} alt="/" width="auto" height="650"></Image>
    //       </SwiperSlide>
    //     </Swiper>
    //   </div>
    // </div>
    <div className="md:block hidden h-auto overflow-x-hidden w-[100%] relative">
      <div
        className="w-[300vw] flex h-fit -translate-x-[100vw] transition-all ease-out duration-[1s]"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <Image src={sliders[2]} alt="" className="w-[100%] h-full" />
        <Image src={sliders[1]} alt="" className="w-[100%] h-[100%]" />
        <Image src={sliders[0]} alt="" className="w-[100%] h-[100%]" />
      </div>
      <div className="absolute right-0 left-0 m-auto justify-center gap-2 w-[100px] flex bottom-[50px]">
        {/* <AiOutlineArrowLeft onClick={prevSlide} />
        <AiOutlineArrowRight onClick={nextSlide} /> */}
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
