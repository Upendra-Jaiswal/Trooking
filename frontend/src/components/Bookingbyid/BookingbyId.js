import React, { useState, useEffect } from "react";

import bookbyidimgbiggest from "../../assets/bookbyidimgbiggest.jpg";
import bookbyidimgbig from "../../assets/bookbyidimgbig.jpg";
import bookbyidimgsmall11 from "../../assets/bookbyidimgsmall11.jpg";
import bookbyidimgsmall12 from "../../assets/bookbyidimgsmall12.jpg";
import user1 from "../../assets/blogsBig.png";
import user2 from "../../assets/biketrip.jpeg";
import user3 from "../../assets/blogssmall2.png";
import user4 from "../../assets/bookbyidimgbig.jpg";
import "./MyComponent.css";

import { Link, useNavigate, useLocation } from "react-router-dom";

import Footer from "../HomePage/Footer";
const reviewsData = [
  {
    reviewText:
      "Pangarchulla was my first trek with Just Wravel. Had an amazing time, the entire staff and the guides were exceptional. Made new friends, had a fabulous experience overall.",
    userName: "John Doe",
    userPhoto: user1, // Path to user image
    rating: 5,
  },
  {
    reviewText:
      "The Kashmir Great Lake Trek with Just Wravel was an absolute dream come true. Words can't fully capture the emotions I felt while exploring the mesmerizing landscapes and immersing myself in the...",

    userName: "Sarah Johnson",
    userPhoto: user2,
    rating: 5,
  },
  {
    reviewText:
      "Just Wravel made my trekking experience unforgettable! The team was incredibly supportive, and the views were breathtaking. I highly recommend them for anyone looking to explore the great outdoors.",
    userName: "Michael Smith",
    userPhoto: user3,
    rating: 4,
  },
  {
    reviewText:
      "My trek to Roopkund with Just Wravel was a life-changing adventure. The scenery was stunning, and the guides were knowledgeable and friendly. I can't wait for my next trek with them!",
    userName: "Emily Davis",
    userPhoto: user4,
    rating: 5,
  },
];

const MyComponent = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const location = useLocation();
  const { trip } = location.state || {};

  const [openDay, setOpenDay] = useState(null); // Tracks the currently open day
  const amount = 1050;

  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);
  const backendUrl = process.env.REACT_APP_BACKEND_URL;

  const sectionsData = [
    { imageUrl: bookbyidimgbiggest },
    { imageUrl: bookbyidimgbig },
    { imageUrl: bookbyidimgsmall11 },
    { imageUrl: bookbyidimgsmall12 },
  ];

  // State for cycling reviews
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [isSlidingOut, setIsSlidingOut] = useState(false);
  const [isSlidingIn, setIsSlidingIn] = useState(false);

  const [numberOfPersons, setNumberOfPersons] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      // Start the slide-out animation
      setIsSlidingOut(true);

      // Change review after the slide-out animation duration
      setTimeout(() => {
        setCurrentReviewIndex((prevIndex) =>
          prevIndex === reviewsData.length - 1 ? 0 : prevIndex + 1
        );
        setIsSlidingOut(false); // Reset slide-out state
        setIsSlidingIn(true); // Start slide-in animation

        // Reset slide-in after animation duration
        setTimeout(() => {
          setIsSlidingIn(false);
        }, 500); // Match with slide-in animation duration
      }, 500); // Match with slide-out animation duration
    }, 4000); // Change review every 4 seconds

    return () => clearInterval(interval); // Clear interval on unmount
  }, []);

  const currentReview = reviewsData[currentReviewIndex];

  useEffect(() => {
    // Set a 5-second delay before showing the content
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 5000); // 5000ms = 5 seconds

    // Cleanup the timeout on component unmount
    return () => clearTimeout(timer);
  }, []);

  const toggleDay = (day) => {
    setOpenDay(openDay === day ? null : day); // Toggle open/close for the selected day
  };

  const arrowStyle = (day) => ({
    transform: openDay === day ? "rotate(180deg)" : "rotate(0)",
    transition: "transform 0.3s ease",
  });

  return (
    <div>
      {!isLoaded ? (
        <div>Loading...</div> // Show loading message while waiting
      ) : (
        <div>
          <div className="min-h-screen p-8">
            <div className="h-[80vh] flex">
              <div className="w-7/12">
                <div className="flex flex-col h-full">
                  <div className="h-[70%] p-4">
                    {sectionsData[0].imageUrl && (
                      <img
                        src={sectionsData[0].imageUrl}
                        alt="First"
                        className="h-full w-full object-cover rounded-2xl"
                      />
                    )}
                  </div>

                  <div className="h-[30%] p-8 mt-8 flex">
                    <div className="w-8/12 p-4">
                      <p
                        className={`text-lg italic ${
                          isSlidingOut ? "review-slide-out" : ""
                        } ${isSlidingIn ? "review-slide-in" : ""}`}
                      >
                        "{currentReview.reviewText}"
                      </p>
                    </div>

                    <div className="w-4/12 flex flex-col p-4">
                      <div className="flex justify-center mb-2">
                        <img
                          src={currentReview.userPhoto}
                          alt={currentReview.userName}
                          className={`w-16 h-16 rounded-full object-cover ${
                            isSlidingOut ? "review-slide-out" : ""
                          } ${isSlidingIn ? "review-slide-in" : ""}`}
                        />
                      </div>

                      <div className="flex justify-center mb-2">
                        <span
                          className={`text-yellow-500 ${
                            isSlidingOut ? "review-slide-out" : ""
                          } ${isSlidingIn ? "review-slide-in" : ""}`}
                        >
                          {"★".repeat(currentReview.rating)}
                          {"☆".repeat(5 - currentReview.rating)}
                        </span>
                      </div>

                      <div className="flex justify-center">
                        <span
                          className={`text-gray-700 font-bold ${
                            isSlidingOut ? "review-slide-out" : ""
                          } ${isSlidingIn ? "review-slide-in" : ""}`}
                        >
                          {currentReview.userName}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-5/12 flex flex-col">
                <div className="h-[40%] flex">
                  {sectionsData.slice(2, 4).map((section, index) => (
                    <div key={index} className="w-6/12 p-4">
                      <img
                        src={section.imageUrl}
                        alt={` ${index + 1}`}
                        className="h-full w-full object-cover rounded-2xl"
                      />
                    </div>
                  ))}
                </div>

                <div className="h-[60%] p-4">
                  <img
                    src={bookbyidimgbig}
                    alt="Second Column - Large "
                    className="h-full w-full object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
          <div>{/* <InfoBookById /> */}</div>
          <div className="flex min-h-screen ">
            {/* First Column - 70% height of the screen */}
            {/* <div className="w-7/12 h-full"> */}

            <div className="w-7/12 flex flex-col h-full rounded-2xl p-8 m-3">
              {/* First Row - Trek Title and Reviews */}
              <div className="h-20 mb-2 p-4 bg-white rounded-2xl flex">
                {/* First Column */}
                <div className="w-8/12">
                  <h3 className="text-lg font-bold"> {trip.name}</h3>
                  <p>(7095+ Reviews) and {trip[0]}</p>
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
                    Elevated at 12,500 ft, Kedarkantha is one of the majestic
                    peaks of the great Himalayan range. As one of the most
                    popular winter treks, Kedarkantha fascinates numerous hikers
                    and trekkers from all over the country. It is perfect for
                    both beginners and experts. This 4-night, 5-day trek is
                    curated to accommodate those who love both the serenity and
                    the adventure that nature, with its unpredictable trails and
                    mystical valleys, can provide.
                    <br />
                    <br />
                    Popular for its spectacular view of snow-capped mountains,
                    the summit offers glimpses of several ranges, including
                    Black Peak, Swargarohini, Gangotri, and Yamunotri. The
                    summit's name translates to “The Throat of Lord Shiva,” and
                    its association with Lord Shiva, along with local myths and
                    folklores, adds to its charm and enriches the experience.
                    <br />
                    <br />
                    We will begin our journey from Dehradun and make our way to
                    the small village of Sankri, which serves as the base camp
                    for this 20 km long trek. We will spend a night at our
                    designated homestay or hotel, introducing ourselves and
                    exchanging stories before retiring for the night. The next
                    day, after a briefing session from our trek leader, we will
                    proceed to our first checkpoint, Juda Ka Taal, where we will
                    spend a leisurely day at the campsite, enjoying lunch and
                    dinner.
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
                        The group will assemble at the pickup point at 06:00 AM.
                        We'll drive towards Sankri village which is the base
                        camp for the Kedarkantha Trek.
                      </p>
                      <p>
                        Upon reaching Sankri, we'll check in to our designated
                        homestay. The rest of the day is at leisure and
                        travelers are advised to rest.
                      </p>
                      <p>
                        In the evening, Dinner will be served followed by an
                        overnight stay in Sankri Village.
                      </p>
                      <p>
                        <strong>Pickup Point:</strong> Nearby Dehradun Railway
                        Station
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
                      2 Day: Trek from Sankri to Juda Ka Taal (4 Kilometers, 4
                      Hours Trek)
                    </h3>
                    <span style={arrowStyle(2)}>V</span>
                  </div>
                  {openDay === 2 && (
                    <div className="pl-4 text-gray-700">
                      <p>
                        After early morning breakfast, a small briefing session
                        will be conducted by the trek leader. We will start our
                        trekking journey through lush green forests of pine
                        trees.
                      </p>
                      <p>
                        We'll reach Juda Ka Taal after four hours of trekking.
                        Lunch will be served at the campsite. The rest of the
                        day is at leisure, followed by dinner and an overnight
                        stay at Juda Ka Taal Campsite.
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
                      3 Day: Juda Ka Taal To Kedarkantha Base Camp (3
                      Kilometers, 3 Hours Trek)
                    </h3>
                    <span style={arrowStyle(3)}>V</span>
                  </div>
                  {openDay === 3 && (
                    <div className="pl-4 text-gray-700">
                      <p>
                        Morning tea will be followed by breakfast, then we’ll
                        proceed towards Kedarkantha Base Camp with a briefing
                        from the trek leader.
                      </p>
                      <p>
                        The 3-4 hour trek will take us to the base camp, where
                        we’ll enjoy lunch and have some leisure time for
                        activities like snowball fights before dinner and an
                        overnight stay.
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
                        Kedarkantha Summit. After enjoying the stunning sunrise
                        and views from the summit, we’ll return to Kedarkantha
                        Base Camp for lunch and a farewell celebration.
                      </p>
                      <p>
                        The overnight stay will be at Juda ka Taal campsite.
                      </p>
                      <p>
                        *Additionally, you get a 360-degree view of the whole
                        Himalayan Region from the Kedarkantha Top. Some of the
                        peaks are Gangotri, Swargarohini, Banderpooch, Kinner
                        Kailash, etc.
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
                      5 Day: Juda ka Taal To Sankri (4 Kilometers, 4 Hours Trek)
                      | Back To Dehradun (8 Hours Drive)
                    </h3>
                    <span style={arrowStyle(5)}>V</span>
                  </div>
                  {openDay === 5 && (
                    <div className="pl-4 text-gray-700">
                      <p>
                        After breakfast, we’ll trek down to Sankri Village,
                        freshen up, have lunch, and then proceed back to
                        Dehradun, arriving by late evening.
                      </p>
                      <p>
                        <strong>Drop-off Timing:</strong> 10:00 PM
                      </p>
                      <p>
                        <strong>Note:</strong> It is recommended to book your
                        return bus after 11:00 PM.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Second Column - Booking Information */}
            <div className="w-5/12 h-full bg-white rounded-2xl shadow-lg p-6 m-3 flex flex-col justify-between">
              {/* Booking Details */}
              <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">
                  Booking for {trip.name}
                  {trip._id}
                </h1>
                <p className="text-gray-600 text-lg mb-1">
                  Price (Per Person):{" "}
                  <span className="font-semibold text-gray-800">
                    ₹{trip.price}
                  </span>
                </p>
                <p className="text-gray-600 text-lg mb-1">
                  Route:{" "}
                  <span className="font-semibold text-gray-800">
                    {trip.route}
                  </span>
                </p>
                <p className="text-gray-600 text-lg">
                  Duration:{" "}
                  <span className="font-semibold text-gray-800">
                    {trip.duration}
                  </span>
                </p>
              </div>

              {/* Starting From Section */}
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-700">
                  Starting From
                </h2>
              </div>

              {/* Dropdown and Total Price */}
              <div className="flex items-center mb-6">
                {/* Dropdown for Number of Persons */}
                <div className="w-6/12">
                  <label
                    htmlFor="persons"
                    className="block text-gray-600 font-medium mb-1"
                  >
                    Number of Persons
                  </label>
                  <select
                    id="persons"
                    className="w-full bg-gray-50 border border-gray-300 text-gray-700 text-lg rounded-lg p-2"
                    onChange={(e) => setNumberOfPersons(e.target.value)}
                  >
                    {[...Array(10).keys()].map((i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Total Price */}
                <div className="w-6/12 text-right">
                  <p className="text-gray-800 text-lg font-bold">
                    Total: ₹{numberOfPersons * trip.price}
                  </p>
                </div>
              </div>

              {/* Book Now Button */}
              <div className="flex justify-center">
                <Link
                  to="/payment"
                  // state={{ amount: numberOfPersons * trip.price }}
                  state={{
                    amount: numberOfPersons * trip.price,
                    bookingDetails: {
                      tripId: trip._id,
                      tripName: trip.name,
                      route: trip.route,
                      duration: trip.duration,
                      numberOfPersons,
                    },
                  }}
                >
                  <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full transition-all duration-200 shadow-md w-full">
                    Book Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <Footer />
          {/* )} */}
        </div>
      )}
    </div>
  );
};

export default MyComponent;
