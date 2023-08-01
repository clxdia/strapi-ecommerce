"use client";

import React from "react";
import { Navigation, Pagination, Autoplay } from "swiper";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css";

import pic1 from "../images/mobile/slideMB1.png";
import pic2 from "../images/mobile/slideMB2.png";
import pic3 from "../images/mobile/slideMB3.png";

import SwiperStyles from "../styles/Swiper.module.css";

const SwiperComponent = () => {
  const sliders = [pic1, pic2, pic3];

  return (
    <div className={SwiperStyles.html} aria-hidden="true">
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
            <Image src={pic1} alt="/" width="auto" height="700"></Image>
          </SwiperSlide>
          <SwiperSlide className={SwiperStyles.swiper_slide}>
            <Image src={pic2} alt="/" width="auto" height="700"></Image>
          </SwiperSlide>
          <SwiperSlide className={SwiperStyles.swiper_slide}>
            <Image src={pic3} alt="/" width="auto" height="700"></Image>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default SwiperComponent;
