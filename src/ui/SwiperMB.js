"use client";

import React from "react";
import { Navigation, Pagination, Autoplay } from "swiper";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css";

import slide1 from "../images/mobile/slideMB1.png";

import SwiperStyles from "../styles/Swiper.module.css";

// import required modules

const SwiperComponentMobile = () => {
  return (
    <div className="relative h-[100%] max-w-[100%] w-[100%] mb-5 md:hidden sm:hidden z-0">
      <div className={SwiperStyles.body}>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className={SwiperStyles.swiper}
        >
          <SwiperSlide className={SwiperStyles.swiper_slide}>
            <Image src={slide1} alt="/" width="auto" height="700"></Image>
          </SwiperSlide>
          <SwiperSlide className={SwiperStyles.swiper_slide}>
            <Image src={slide1} alt="/" width="auto" height="700"></Image>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default SwiperComponentMobile;
