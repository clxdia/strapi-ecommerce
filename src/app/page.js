import React from "react";

import "../styles/globals.css";

import Deals from "../ui/Deals";
import SwiperMB from "../ui/SwiperMB";
import SwiperComponent from "../ui/Swiper";
import Categories from "../ui/Categories";
import Articles from "../ui/Articles";
import NewArrivals from "../ui/NewArrivals";

export default function Home() {
  return (
    <main>
      <SwiperComponent />
      <SwiperMB />
      <NewArrivals />
      <Deals />
      <Categories />
      <Articles />
    </main>
  );
}
