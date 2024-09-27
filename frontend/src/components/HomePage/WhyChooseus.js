import React from "react";
import {
  FaUsers,
  FaFemale,
  FaHiking,
  FaSmile,
  FaBus,
  FaUserFriends,
} from "react-icons/fa"; // Importing icons

import whoChooseUsSmall1 from "../../assets/whoChooseUsSmall1.png";
import whoChooseUsSmall2 from "../../assets/whoChooseUsSmall2.png";
import whoChooseUsSmall3 from "../../assets/whoChooseUsSmall3.png";
import whoChooseUsBig1 from "../../assets/whoChooseUsBig1.png";
import whoChooseUsBig2 from "../../assets/whoChooseUsBig2.png";

const WhyChooseUs = () => {
  return (
    <div className="flex h-full">
      {/* Left Column - 4/12 width */}
      <div className="w-5/12 p-4 bg-white-100">
        <div className="flex h-screen">
          {/* Left Column with 2 rows */}
          <div className="w-6/12 p-4 bg-white-100 flex flex-col">
            {/* Row 1 */}
            <div className="flex-1 bg-white-300 rounded-lg mb-4">
              <img
                src={whoChooseUsBig1}
                alt="Who Choose Us Big 1"
                className="rounded-2xl"
              />
            </div>
            {/* Row 2 */}
            <div className="flex-1 bg-white-300">
              <img
                src={whoChooseUsBig2}
                alt="Who Choose Us Big 2"
                className="rounded-2xl"
              />
            </div>
          </div>

          {/* Right Column with 3 rows */}
          <div className="w-6/12 p-4 bg-white-200 flex flex-col">
            {/* Row 1 */}
            <div className="flex-[0.66] bg-white-400 mb-4">
              <img
                src={whoChooseUsSmall1}
                alt="Who Choose Us Small 1"
                className="rounded-2xl"
              />
            </div>
            {/* Row 2 */}
            <div className="flex-[0.66] bg-white-400 mb-4">
              <img
                src={whoChooseUsSmall2}
                alt="Who Choose Us Small 2"
                className="rounded-2xl"
              />
            </div>
            {/* Row 3 */}
            <div className="flex-[0.66] bg-white-400">
              <img
                src={whoChooseUsSmall3}
                alt="Who Choose Us Small 3"
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Right Column - 8/12 width */}
      <div className="w-7/12 p-4 bg-white-400 flex flex-col">
        {/* Row 1 - Contains Two Sub-Rows */}
        <div className="flex flex-col">
          {/* Sub-Row 1 */}
          <div className="h-4 bg-white-200 flex items-center">
            <p className="text-sm font-bold text-gray-500">WHY CHOOSE US</p>
          </div>

          {/* Sub-Row 2 */}
          <div className="h-24 bg-white-300 flex items-center">
            <p className="text-5xl font-bold text-white-600">Why JustWravel</p>
          </div>
        </div>

        {/* Row 2 - Contains Three Sub-Rows */}
        <div className="flex flex-col mb-4">
          {/* Sub-Row 1 */}
          <div className="h-24 bg-white-200 mb-2 p-4">
            <p className="text-lg font-semibold text-white-700">
              "You are not living, if you are not dreaming"
            </p>
          </div>

          {/* Sub-Row 2 */}
          <div className="h-24 bg-white-300 mb-2 p-4">
            <p className="text-md text-white-600">
              Years ago, when Justwravel organized its first trip, we had the
              opportunity to turn other people's dreams into reality. We became
              the bridge that narrowed the gap between individuals and their
              travel dreams.
            </p>
          </div>

          {/* Sub-Row 3 */}
          <div className="h-24 bg-white-400 p-4">
            <p className="text-md text-white-600">
              With over 7 years of experience and the sole aim of creating a
              community of like-minded travelers,
            </p>
          </div>
        </div>

        {/* Row 3 - 2 Rows, 3 Columns Each */}
        <div className="grid grid-cols-3 gap-4">
          {/* Element 1 */}
          <div className="flex flex-col items-center bg-white-200 p-4">
            <FaUsers className="text-4xl text-gray-600 mb-2  bg-blue-300 p-2" />
            <div className="text-white-800 font-bold text-2xl mb-2">
              50,000+
            </div>
            <div className="text-white-700">Satisfied Travelers</div>
          </div>

          {/* Element 2 */}
          <div className="flex flex-col items-center bg-white-300 p-4">
            <FaFemale className="text-4xl text-gray-600 mb-2  bg-blue-300 p-2" />
            <div className="text-white-800 font-bold text-2xl mb-2">152</div>
            <div className="text-white-700">All Girls Trip</div>
          </div>

          {/* Element 3 */}
          <div className="flex flex-col items-center bg-white-400 p-4">
            <FaHiking className="text-4xl text-gray-600 mb-2  bg-blue-300 p-2" />
            <div className="text-white-800 text-2xl font-bold mb-2 ">1,200</div>
            <div className="text-white-700">Adventure Trips</div>
          </div>

          {/* Element 4 */}
          <div className="flex flex-col items-center bg-white-500 p-4">
            <FaSmile className="text-4xl text-gray-600 mb-2  bg-blue-300 p-2" />
            <div className="text-white-800 text-2xl font-bold mb-2">3,500+</div>
            <div className="text-white-700">Happy Clients</div>
          </div>

          {/* Element 5 */}
          <div className="flex flex-col items-center bg-white-600 p-4">
            <FaBus className="text-4xl text-gray-600 mb-2  bg-blue-300 p-2" />
            <div className="text-white-800 text-2xl font-bold mb-2">700</div>
            <div className="text-white-700">Group Tours</div>
          </div>

          {/* Element 6 */}
          <div className="flex flex-col items-center bg-white-700 p-4">
            <FaUserFriends className="text-4xl text-gray-600 bg-blue-300 p-2 mb-2" />
            <div className="text-white-800 text-2xl font-bold mb-2">1,000</div>
            <div className="text-white-700">Solo Travelers</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
