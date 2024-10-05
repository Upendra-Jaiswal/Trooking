import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import Bramhatal from "../../../assets/verticalslider/Brahmtal.jpg";

import ChopaTungnath from "../../../assets/verticalslider/Chopta Tungnath.jpg";
import DayraBugyal from "../../../assets/verticalslider/Dayra Bugyal.jpg";
import GulabiKantha from "../../../assets/verticalslider/Gulabi Kantha.jpg";
import Kedarnatha from "../../../assets/verticalslider/Kedarkantha.jpg";
import Kunwaripass from "../../../assets/verticalslider/Kunwari Pass.jpg";
import NagTibba from "../../../assets/verticalslider/Nag Tibba.jpg";




import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./swiper.css";


import { FreeMode, Pagination, Autoplay } from "swiper/modules";

export default function App() {
  return (
    <div className="bg-white">
      <div className="bg-white ml-11 font-2xl">
        <h1>
          <span className="font-poppins"> BackPacking Tour </span>
        </h1>
      </div>
      <div className="mt-5 p-11 bg-white">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
            renderBullet: () => "",
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[FreeMode, Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide className="rounded-2xl">
            <img src={Kedarnatha} alt="kedarnath" className="rounded-2xl" />
          </SwiperSlide>
          <SwiperSlide className="rounded-2xl">
            <img src={Bramhatal} alt="bramhatal" className="rounded-2xl" />
          </SwiperSlide>
          <SwiperSlide className="rounded-2xl">
            <img
              src={ChopaTungnath}
              alt="chopatunganath"
              className="rounded-2xl"
            />
          </SwiperSlide>
          <SwiperSlide className="rounded-2xl">
            <img src={DayraBugyal} alt="dayrabugyal" className="rounded-2xl" />
          </SwiperSlide>
          <SwiperSlide className="rounded-2xl">
            <img
              src={GulabiKantha}
              alt="gulabikantha"
              className="rounded-2xl"
            />
          </SwiperSlide>
          <SwiperSlide className="rounded-2xl">
            <img src={Kunwaripass} alt="kunwaripass" className="rounded-2xl" />
          </SwiperSlide>
          <SwiperSlide className="rounded-2xl">
            <img src={NagTibba} alt="nagtibba" className="rounded-2xl" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
