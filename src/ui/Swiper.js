"use client";

import { React, useEffect, useState } from "react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../styles/swiper.css";

import pic1 from "../images/desktop/slide1.png";
import pic2 from "../images/desktop/slide2.png";
import pic3 from "../images/desktop/slide3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

const SwiperComponent = () => {
  const sliders = [pic1, pic2, pic3];
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image src={pic1} alt="/" width="1000" height="1000"></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={pic2} alt="/" width="1000" height="1000"></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={pic3} alt="/" width="1000" height="1000"></Image>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SwiperComponent;
