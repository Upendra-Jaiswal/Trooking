import React from "react";
import atoia from "../../assets/Recognition-atoI.jpg";
import Bs from "../../assets/Recognition-Bs.png";
import IIMB from "../../assets/recognition-iimb2.webp";
import startup from "../../assets/Recognition-startupindia.png";

const Recognition = () => {
  return (
    <div className="p-6 flex flex-col items-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Recognitions</h1>
        <h2 className="text-lg mt-2">Recognitions By Govt.</h2>
      </div>
      <div className="flex space-x-4 mt-4">
        <div className="flex-1 p-4 bg-gray-100 border border-white-300">
          <div className="grid grid-cols-2 gap-4">
            <img
              src={atoia}
              alt="Recognition 1"
              className="w-full h-auto object-cover"
            />
            <img
              src={Bs}
              alt="Recognition 2"
              className="w-full h-auto object-cover"
            />
            <img
              src={IIMB}
              alt="Recognition 3"
              className="w-full h-auto object-cover"
            />
            <img
              src={startup}
              alt="Recognition 4"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
        <div className="flex-1 p-4 bg-gray-100 border border-gray-300">
          <p>
            In a brief period, JustWravel has achieved significant recognition
            and success. With each new milestone, JustWravel adds a unique
            feather to its cap. As a registered member of ATOAI, we are
            certified tour operators. Our journey has been characterized by
            excellence and trust, as demonstrated by our three-time consecutive
            receipt of the MSME Best Enterprise (Travel & Tourism) award. This
            achievement reflects our unwavering commitment to delivering
            top-tier travel experiences.
          </p>
          <p>
            Additionally, we proudly hold the 2023 TripAdvisor Travelers Choice
            Award, a testament to the consistently outstanding feedback and
            reviews from our satisfied travelers. JustWravel is supported by
            Startup India, underscoring our dedication to innovation and quality
            in the travel industry. We were honored to be part of Uttar Pradesh
            Tourism as an adventure tour operator. Furthermore, JustWravel is
            incubated by IIM Bangalore's NSRCEL, demonstrating our strong
            foundation and support from esteemed educational institutions.
          </p>
          <p>
            We were featured by ANI, South Asia's leading multimedia news
            agency, and Business Standard. These recognitions inspire us to
            continually raise the bar and continue providing exceptional
            journeys for our valued travelers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Recognition;
