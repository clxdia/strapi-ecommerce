"use client";

import React from "react";
import { Navigation, Pagination, Autoplay } from "swiper";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Image by https://www.freepik.com/free-vector/flat-design-clothing-store-logo-design_28815161.htm#query=clothes%20store%20logo&position=38&from_view=search&track=sph

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css";

import SwiperStyles from "../styles/Swiper.module.css";

// import required modules

const SwiperComponent = () => {
  return (
    <div className={SwiperStyles.html}>
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
            <Image
              src="https://picsum.photos/3419/1195"
              alt="/"
              width="1000"
              height="1000"
            ></Image>
          </SwiperSlide>
          <SwiperSlide className={SwiperStyles.swiper_slide}>
            <Image
              src="https://picsum.photos/3419/1195"
              alt="/"
              width="1000"
              height="1000"
            ></Image>
          </SwiperSlide>
          <SwiperSlide className={SwiperStyles.swiper_slide}>
            <Image
              src="https://picsum.photos/3419/1195"
              alt="/"
              width="1000"
              height="1000"
            ></Image>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default SwiperComponent;
