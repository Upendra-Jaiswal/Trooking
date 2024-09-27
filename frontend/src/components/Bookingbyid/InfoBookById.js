import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Payment from "./Payment";

const BookingInfoComponent = () => {
  const [openDay, setOpenDay] = useState(null); // Tracks the currently open day
  const amount = 1050;

  const toggleDay = (day) => {
    setOpenDay(openDay === day ? null : day); // Toggle open/close for the selected day
  };

  const arrowStyle = (day) => ({
    transform: openDay === day ? "rotate(180deg)" : "rotate(0)",
    transition: "transform 0.3s ease",
  });
  return (
    <div className="flex min-h-screen ">
      {/* First Column - 70% height of the screen */}
      {/* <div className="w-7/12 h-full"> */}

      <div className="w-7/12 flex flex-col h-full rounded-2xl p-8 m-3">
        {/* First Row - Trek Title and Reviews */}
        <div className="h-20 mb-2 p-4 bg-white rounded-2xl flex">
          {/* First Column */}
          <div className="w-8/12">
            <h3 className="text-lg font-bold">Chandranahan Lake Trek</h3>
            <p>(7095+ Reviews)</p>
          </div>
          {/* Second Column */}
          <div className="w-4/12 flex items-center justify-end">
            <button className="text-blue-500">Share</button>
          </div>
        </div>

        {/* Second Row - Details */}
        <div className="bg-white rounded-2xl p-5 my-4">
          <div className="h-1/4 mb-2 bg-white rounded-2xl p-4">
            {/* First Row - Details Heading */}
            <h4 className="font-bold text-lg mb-2">Details</h4>

            {/* Second Row - Information Columns */}
            <div className="grid grid-cols-5 gap-4">
              <div className="bg-gray-100 p-2 rounded">
                <p className="font-semibold">Pickup & Drop</p>
                <p>Shimla to Shimla</p>
              </div>
              <div className="bg-gray-100 p-2 rounded">
                <p className="font-semibold">Category</p>
                <p>Treks</p>
              </div>
              <div className="bg-gray-100 p-2 rounded">
                <p className="font-semibold">Duration</p>
                <p>5 Days</p>
              </div>
              <div className="bg-gray-100 p-2 rounded">
                <p className="font-semibold">Altitude</p>
                <p>13900 Ft.</p>
              </div>
              <div className="bg-gray-100 p-2 rounded">
                <p className="font-semibold">Difficulty</p>
                <p>Moderate</p>
              </div>
            </div>
          </div>

          {/* Third Row - Trek Length and Inclusions */}
          <div className="h-1/4 mb-2 rounded p-4">
            <div className="grid grid-cols-5 gap-4">
              <div className="bg-gray-100 p-2 rounded ">
                <p className="font-semibold ">Trek Length</p>
                <p>35 Km.</p>
              </div>
              <div className="bg-gray-100 p-2 rounded">
                <p className="font-semibold">Inclusions</p>
                <p>Meals</p>
              </div>
              <div className="bg-gray-100 p-2 rounded">
                <p className="font-semibold">Stays</p>
                <p>Included</p>
              </div>
              <div className="bg-gray-100 p-2 rounded">
                <p className="font-semibold">Transfers</p>
                <p>Included</p>
              </div>
              <div className="bg-gray-100 p-2 rounded">
                <p className="font-semibold">Activities</p>
                <p>Guided Tours</p>
              </div>
            </div>
          </div>

          <h4 className="font-bold text-lg mb-2">Inclusions</h4>

          {/* Second Row - Information Columns */}
          <div className="grid grid-cols-5 gap-4">
            <div className="p-2 rounded bg-gray-100 flex items-center justify-center">
              <p className="font-semibold">Meals</p>
            </div>
            <div className="bg-gray-100 p-2 rounded flex items-center justify-center">
              <p className="font-semibold">Stays</p>
            </div>
            <div className="bg-gray-100 p-2 rounded flex items-center justify-center">
              <p className="font-semibold">Transfers</p>
              {/* <p>5 Days</p> */}
            </div>
            <div className="bg-gray-100 p-2 rounded flex items-center justify-center">
              <p className="font-semibold">Altitude</p>
            </div>
            <div className="bg-gray-100 p-2 rounded flex items-center justify-center">
              <p className="font-semibold">Activities</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-2 my-4">
          <div className="grid grid-cols-5 gap-2 p-4">
            <div className=" p-4 rounded flex items-center justify-center">
              <p className="font-semibold">Overview</p>
            </div>
            <div className=" p-4 rounded flex items-center justify-center">
              <p className="font-semibold">Itinerary</p>
            </div>
            <div className=" p-4 rounded flex items-center justify-center">
              <p className="font-semibold">Inclusions & Exclusions</p>
            </div>
            <div className=" p-4 rounded flex items-center justify-center">
              <p className="font-semibold">Cancellation Policy</p>
            </div>
            <div className=" p-4 rounded flex items-center justify-center">
              <p className="font-semibold">Things To Pack</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-2 my-4">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
            <p className="text-gray-700 leading-relaxed">
              Elevated at 12,500 ft, Kedarkantha is one of the majestic peaks of
              the great Himalayan range. As one of the most popular winter
              treks, Kedarkantha fascinates numerous hikers and trekkers from
              all over the country. It is perfect for both beginners and
              experts. This 4-night, 5-day trek is curated to accommodate those
              who love both the serenity and the adventure that nature, with its
              unpredictable trails and mystical valleys, can provide.
              <br />
              <br />
              Popular for its spectacular view of snow-capped mountains, the
              summit offers glimpses of several ranges, including Black Peak,
              Swargarohini, Gangotri, and Yamunotri. The summit's name
              translates to “The Throat of Lord Shiva,” and its association with
              Lord Shiva, along with local myths and folklores, adds to its
              charm and enriches the experience.
              <br />
              <br />
              We will begin our journey from Dehradun and make our way to the
              small village of Sankri, which serves as the base camp for this 20
              km long trek. We will spend a night at our designated homestay or
              hotel, introducing ourselves and exchanging stories before
              retiring for the night. The next day, after a briefing session
              from our trek leader, we will proceed to our first checkpoint,
              Juda Ka Taal, where we will spend a leisurely day at the campsite,
              enjoying lunch and dinner.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 my-4">
          <h2 className="text-2xl font-bold mb-6">Itinerary</h2>

          {/* Day 1 */}
          <div className="border-b border-gray-300">
            <div
              className="flex justify-between items-center cursor-pointer py-4"
              onClick={() => toggleDay(1)}
            >
              <h3 className="font-semibold">
                1 Day: Drive From Dehradun To Sankri Base Village (198
                Kilometers, 8 Hours Drive)
              </h3>
              <span style={arrowStyle(1)}>V</span>
            </div>
            {openDay === 1 && (
              <div className="pl-4 text-gray-700">
                <p>
                  The group will assemble at the pickup point at 06:00 AM. We'll
                  drive towards Sankri village which is the base camp for the
                  Kedarkantha Trek.
                </p>
                <p>
                  Upon reaching Sankri, we'll check in to our designated
                  homestay. The rest of the day is at leisure and travelers are
                  advised to rest.
                </p>
                <p>
                  In the evening, Dinner will be served followed by an overnight
                  stay in Sankri Village.
                </p>
                <p>
                  <strong>Pickup Point:</strong> Nearby Dehradun Railway Station
                </p>
                <p>
                  <strong>Timing:</strong> 6:30 AM (Tentative)
                </p>
              </div>
            )}
          </div>

          {/* Day 2 */}
          <div className="border-b border-gray-300">
            <div
              className="flex justify-between items-center cursor-pointer py-4"
              onClick={() => toggleDay(2)}
            >
              <h3 className="font-semibold">
                2 Day: Trek from Sankri to Juda Ka Taal (4 Kilometers, 4 Hours
                Trek)
              </h3>
              <span style={arrowStyle(2)}>V</span>
            </div>
            {openDay === 2 && (
              <div className="pl-4 text-gray-700">
                <p>
                  After early morning breakfast, a small briefing session will
                  be conducted by the trek leader. We will start our trekking
                  journey through lush green forests of pine trees.
                </p>
                <p>
                  We'll reach Juda Ka Taal after four hours of trekking. Lunch
                  will be served at the campsite. The rest of the day is at
                  leisure, followed by dinner and an overnight stay at Juda Ka
                  Taal Campsite.
                </p>
              </div>
            )}
          </div>

          {/* Day 3 */}
          <div className="border-b border-gray-300">
            <div
              className="flex justify-between items-center cursor-pointer py-4"
              onClick={() => toggleDay(3)}
            >
              <h3 className="font-semibold">
                3 Day: Juda Ka Taal To Kedarkantha Base Camp (3 Kilometers, 3
                Hours Trek)
              </h3>
              <span style={arrowStyle(3)}>V</span>
            </div>
            {openDay === 3 && (
              <div className="pl-4 text-gray-700">
                <p>
                  Morning tea will be followed by breakfast, then we’ll proceed
                  towards Kedarkantha Base Camp with a briefing from the trek
                  leader.
                </p>
                <p>
                  The 3-4 hour trek will take us to the base camp, where we’ll
                  enjoy lunch and have some leisure time for activities like
                  snowball fights before dinner and an overnight stay.
                </p>
              </div>
            )}
          </div>

          {/* Day 4 */}
          <div className="border-b border-gray-300">
            <div
              className="flex justify-between items-center cursor-pointer py-4"
              onClick={() => toggleDay(4)}
            >
              <h3 className="font-semibold">
                4 Day: Trek To Kedarkantha Peak | Back To Juda ka Taal (9
                Kilometers, 8 Hours Trek)
              </h3>
              <span style={arrowStyle(4)}>V</span>
            </div>
            {openDay === 4 && (
              <div className="pl-4 text-gray-700">
                <p>
                  We’ll wake up at 02:00 AM and begin our trek to the
                  Kedarkantha Summit. After enjoying the stunning sunrise and
                  views from the summit, we’ll return to Kedarkantha Base Camp
                  for lunch and a farewell celebration.
                </p>
                <p>The overnight stay will be at Juda ka Taal campsite.</p>
                <p>
                  *Additionally, you get a 360-degree view of the whole
                  Himalayan Region from the Kedarkantha Top. Some of the peaks
                  are Gangotri, Swargarohini, Banderpooch, Kinner Kailash, etc.
                </p>
              </div>
            )}
          </div>

          {/* Day 5 */}
          <div className="border-b border-gray-300">
            <div
              className="flex justify-between items-center cursor-pointer py-4"
              onClick={() => toggleDay(5)}
            >
              <h3 className="font-semibold">
                5 Day: Juda ka Taal To Sankri (4 Kilometers, 4 Hours Trek) |
                Back To Dehradun (8 Hours Drive)
              </h3>
              <span style={arrowStyle(5)}>V</span>
            </div>
            {openDay === 5 && (
              <div className="pl-4 text-gray-700">
                <p>
                  After breakfast, we’ll trek down to Sankri Village, freshen
                  up, have lunch, and then proceed back to Dehradun, arriving by
                  late evening.
                </p>
                <p>
                  <strong>Drop-off Timing:</strong> 10:00 PM
                </p>
                <p>
                  <strong>Note:</strong> It is recommended to book your return
                  bus after 11:00 PM.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Second Column - 30% width with half of the screen height */}
      <div className="w-5/12 flex flex-col h-full bg-white rounded-2xl p-8 m-3">
        {/* First Row - Starting From Text */}
        <div className="h-1/4 mb-2 p-4 rounded flex items-center">
          <h2 className="text-black font-bold text-xl">Starting From</h2>
        </div>

        {/* Second Row - Pricing Information */}
        <div className="h-1/4 flex mb-2 p-0 rounded">
          {/* First Column - 2/12 width */}
          <div className="w-2/12 text-center p-2">
            <p className="line-through text-red-500 text-lg">11,500</p>
          </div>

          {/* Second Column - 2/12 width */}
          <div className="w-2/12 text-center p-2">
            <p className="text-2xl font-bold text-gray-400">{amount}</p>
          </div>

          {/* Third Column - 8/12 width */}
          <div className="w-8/12 flex justify-end items-center p-2">
            <p className="text-gray-700 bg-blue-200 rounded-2xl px-4 text-center">
              Per Person
            </p>
          </div>
        </div>

        {/* Third Row - Book Now Button */}
        <div className="h-1/2 mb-2 p-4 flex items-center justify-center">
          {/* <Link to="/payment" amount={{ amount }}> */}
          <Link to="/payment" state={{ amount }}>
            {" "}
            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-2xl w-full">
              {/* <Payment amount={amount} />  */}
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookingInfoComponent;
