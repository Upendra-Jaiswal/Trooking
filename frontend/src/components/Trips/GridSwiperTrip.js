import React, { useContext } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { TripContext } from "../../context/TripContext";


import img01 from "../../assets/tripsimages/IMG_5854.JPG";
import img02 from "../../assets/tripsimages/IMG_5855.JPG";
import img03 from "../../assets/tripsimages/IMG_5856.JPG";
import img04 from "../../assets/tripsimages/IMG_5857.JPG";

import { useNavigate } from "react-router-dom";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./swiper.css";

// import required modules
import { FreeMode, Pagination, Autoplay } from "swiper/modules";

export default function GridSwiperTrip() {
  const navigate = useNavigate(); // Hook for navigation

  const { trips } = useContext(TripContext);

  const handleBookClick = (trip) => {
    navigate("/bookingbyid", { state: { trip } }); // Pass the selected trip as state
  };

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
            <img
              src={img01}
              alt="kedarnath"
              className="rounded-2xl"
              onClick={() => handleBookClick(trips[0])}
            />
          </SwiperSlide>
          <SwiperSlide className="rounded-2xl">
            <img
              src={img02}
              alt="bramhatal"
              className="rounded-2xl"
              onClick={() => handleBookClick(trips[1])}
            />
          </SwiperSlide>
          <SwiperSlide className="rounded-2xl">
            <img
              src={img03}
              alt="chopatunganath"
              className="rounded-2xl"
              onClick={() => handleBookClick(trips[2])}
            />
          </SwiperSlide>
          <SwiperSlide className="rounded-2xl">
            <img
              src={img04}
              alt="dayrabugyal"
              className="rounded-2xl"
              onClick={() => handleBookClick(trips[3])}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
