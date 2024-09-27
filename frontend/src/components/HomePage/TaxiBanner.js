import React from "react";
import texibanner from "../../assets/taxi-service-vector-banner-poster-260nw-1470629312.jpg.webp";
import { Link } from "react-router-dom";

const TaxiBanner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative w-[900px] h-[500px]">
        {/* Dimming Overlay */}
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

        {/* Taxi Image */}
        <img
          src={texibanner}
          alt="taxi"
          className="w-full h-full object-cover z-0"
        />

        {/* Overlay Book Now Button */}
        <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition z-20">
          <Link to="/taxi-booking"> Book Now </Link>
        </button>
      </div>
    </div>
  );
};

export default TaxiBanner;
