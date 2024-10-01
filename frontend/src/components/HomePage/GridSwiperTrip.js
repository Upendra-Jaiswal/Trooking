import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import Bramhatal from "../../assets/verticalslider/Brahmtal.jpg";
import ChopaTungnath from "../../assets/verticalslider/Chopta Tungnath.jpg";
import DayraBugyal from "../../assets/verticalslider/Dayra Bugyal.jpg";
import GulabiKantha from "../../assets/verticalslider/Gulabi Kantha.jpg";
import Kedarnatha from "../../assets/verticalslider/Kedarkantha.jpg";
import Kunwaripass from "../../assets/verticalslider/Kunwari Pass.jpg";
import NagTibba from "../../assets/verticalslider/Nag Tibba.jpg";

import img01 from "../../assets/tripsimages/IMG_5854.JPG";
import img02 from "../../assets/tripsimages/IMG_5855.JPG";
import img03 from "../../assets/tripsimages/IMG_5856.JPG";
import img04 from "../../assets/tripsimages/IMG_5857.JPG";
import img05 from "../../assets/tripsimages/IMG_5858.JPG";
import img06 from "../../assets/tripsimages/IMG_5859.JPG";
import img07 from "../../assets/tripsimages/IMG_5860.JPG";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./swiper.css";

// import required modules
import { FreeMode, Pagination, Autoplay } from "swiper/modules";

export default function GridSwiperTrip() {
  return (
    <div className="">
      <div className="font-2xl"></div>
      <div className="mt-1 p-1 ">
        <Swiper
          slidesPerView={2}
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
            <img src={img01} alt="kedarnath" className="rounded-2xl" />
          </SwiperSlide>
          <SwiperSlide className="rounded-2xl">
            <img src={img02} alt="bramhatal" className="rounded-2xl" />
          </SwiperSlide>
          <SwiperSlide className="rounded-2xl">
            <img src={img03} alt="chopatunganath" className="rounded-2xl" />
          </SwiperSlide>
          <SwiperSlide className="rounded-2xl">
            <img src={img04} alt="dayrabugyal" className="rounded-2xl" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
