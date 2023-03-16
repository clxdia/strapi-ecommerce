"use client";

import React from "react";
import { Navigation, Pagination, Autoplay } from "swiper";
import Image from "next/image";

import pic1 from "../images/slide1.png";
import pic2 from "../images/slide2.png";
import pic3 from "../images/slide3.png";

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
            <Image src={pic1} alt="/" width="auto" height="600"></Image>
          </SwiperSlide>
          <SwiperSlide className={SwiperStyles.swiper_slide}>
            <Image src={pic2} alt="/" width="auto" height="600"></Image>
          </SwiperSlide>
          <SwiperSlide className={SwiperStyles.swiper_slide}>
            <Image src={pic3} alt="/" width="auto" height="650"></Image>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default SwiperComponent;
