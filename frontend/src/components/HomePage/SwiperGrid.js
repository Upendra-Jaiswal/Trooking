import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import images
import img01 from "../../assets/tripsimages/IMG_5854.JPG";
import img02 from "../../assets/tripsimages/IMG_5855.JPG";
import img03 from "../../assets/tripsimages/IMG_5856.JPG";
import img04 from "../../assets/tripsimages/IMG_5857.JPG";
import img05 from "../../assets/tripsimages/IMG_5858.JPG";
import img06 from "../../assets/tripsimages/IMG_5859.JPG";
import img07 from "../../assets/tripsimages/IMG_5860.JPG";
import Offerbanner from "../../assets/offerbanner.jpg"; // New Offer Banner

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import "./swipergrid.css";

// import required modules
import { Grid, Pagination, Autoplay } from "swiper/modules";

export default function App() {
  return (
    <div className="">
      <Swiper
        slidesPerView={2}
        grid={{
          rows: 2,
          fill: "row",
        }}
        spaceBetween={40}
        pagination={{
          clickable: true,
          renderBullet: () => "",
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Grid, Pagination, Autoplay]}
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
          <img src={img04} alt="chopatunganath" className="rounded-2xl" />
        </SwiperSlide>
        {/* Offer Banner Slide */}
  
        <div className="bg-blue-400">
          <h1>hello</h1>
        </div>
    
        <SwiperSlide className="rounded-2xl">
          <img src={img05} alt="gulabikantha" className="rounded-2xl" />
        </SwiperSlide>
        <SwiperSlide className="rounded-2xl">
          <img src={img06} alt="kunwaripass" className="rounded-2xl" />
        </SwiperSlide>
        <SwiperSlide className="rounded-2xl">
          <img src={img07} alt="nagtibba" className="rounded-2xl" />
        </SwiperSlide>
        <SwiperSlide className="rounded-2xl">
          <img src={img01} alt="nagtibba" className="rounded-2xl" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
