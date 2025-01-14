import React, { useContext } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { TripContext } from "../../context/TripContext";

import { useNavigate } from "react-router-dom";
import img01 from "../../assets/tripsimages/IMG_5854.JPG";

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

export default function GridSwiperTripLower() {
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
              src={img05}
              alt="kedarnath"
              className="rounded-2xl"
              onClick={() => handleBookClick(trips[4])}
            />
          </SwiperSlide>
          <SwiperSlide className="rounded-2xl">
            <img
              src={img06}
              alt="bramhatal"
              className="rounded-2xl"
              onClick={() => handleBookClick(trips[5])}
            />
          </SwiperSlide>
          <SwiperSlide className="rounded-2xl">
            <img
              src={img07}
              alt="chopatunganath"
              className="rounded-2xl"
              onClick={() => handleBookClick(trips[6])}
            />
          </SwiperSlide>
          <SwiperSlide className="rounded-2xl">
            <img
              src={img01}
              alt="dayrabugyal"
              className="rounded-2xl"
              onClick={() => handleBookClick(trips[0])}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
