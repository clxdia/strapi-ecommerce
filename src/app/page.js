"use client";
import React from "react";

import "../styles/globals.css";
import { useEffect } from "react";

import Deals from "../ui/Deals";
import SwiperMB from "../ui/SwiperMB";
import SwiperComponent from "../ui/Swiper";
import Categories from "../ui/Categories";
import Articles from "../ui/Articles";
import NewArrivals from "../ui/NewArrivals";

export default function Home() {
  useEffect(() => {
    const wakeUpServer = async () => {
      try {
        await fetch(process.env.NEXT_PUBLIC_SERVER);
        console.log("Server woke up!");
      } catch (error) {
        console.error("Error waking up server:", error);
      }
    };

    wakeUpServer();
    const interval = setInterval(wakeUpServer, 900000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div>
      <div className="md:block sm:block hidden">
        <SwiperComponent />
      </div>
      <div className="md:hidden sm:hidden block">
        <SwiperMB />
      </div>
      <NewArrivals />
      <Deals />
      <Categories />
      <Articles />
    </div>
  );
}
