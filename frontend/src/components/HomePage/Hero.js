import React, { useEffect, useState } from "react";
import HeroImage from "../../assets/HeroImage.jpg";

import { FaStar, FaPlane, FaUsers, FaClock } from "react-icons/fa"; // Import icons

import "./Hero.css";

const reviews = [
  {
    id: 1,
    image: HeroImage,
    text: "Amazing experience! Everything was well organized and fun!",
    author: "John D.",
    rating: 5,
  },
  {
    id: 2,
    image: HeroImage,
    text: "A fantastic trip! The guides were knowledgeable and friendly.",
    author: "Alice S.",
    rating: 4,
  },
  {
    id: 3,
    image: HeroImage,
    text: "Loved every moment! The scenery was breathtaking.",
    author: "Mark T.",
    rating: 5,
  },
  {
    id: 4,
    image: HeroImage,
    text: "An unforgettable adventure! Highly recommend to everyone.",
    author: "Sarah P.",
    rating: 5,
  },
  {
    id: 5,
    image: HeroImage,
    text: "Great service and beautiful locations. Will definitely return!",
    author: "Michael R.",
    rating: 4,
  },
  {
    id: 6,
    image: HeroImage,
    text: "A wonderful getaway! Everything exceeded my expectations.",
    author: "Emma L.",
    rating: 5,
  },
];

const Hero = () => {
  const [currentReviewIndices, setCurrentReviewIndices] = useState([0, 1, 2]);
  const [isSlidingOut, setIsSlidingOut] = useState(false);

  const locations = ["Spiti", "Himachal", "Uttarakhand"];
  const [currentLocation, setCurrentLocation] = useState(locations[0]);
  const [slideOut, setSlideOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideOut(true);
      setTimeout(() => {
        setCurrentLocation((prev) => {
          const currentIndex = locations.indexOf(prev);
          return locations[(currentIndex + 1) % locations.length];
        });
        setSlideOut(false);
      }, 500); // Match the animation duration
    }, 3000); // Change location every 3 seconds
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const reviewInterval = setInterval(() => {
      setIsSlidingOut(true);
      setTimeout(() => {
        setCurrentReviewIndices((prev) => {
          const nextIndex = (prev[0] + 1) % reviews.length;
          return [
            nextIndex,
            (nextIndex + 1) % reviews.length,
            (nextIndex + 2) % reviews.length,
          ];
        });
        setIsSlidingOut(false);
      }, 500); // Match this with the duration of the slide-out animation
    }, 5000); // Change review every 5 seconds

    return () => {
      clearInterval(reviewInterval);
    };
  }, []);

  return (
    <section className="relative bg-gray-100 py-16 h-screen overflow-hidden flex">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${HeroImage})` }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 flex items-center justify-start p-6 lg:justify-start h-3/4 w-1/2">
        <div className="max-w-md lg:max-w-lg p-4">
          {/* <h1 className="text-8xl font-bold text-white mb-4">Book Your <span>Trip to </span>  </h1> */}
          {/* <h1 className="text-8xl font-bold text-white mb-4">
            Book Your Trip to{" "}
            <span className={slideOut ? "review-slide-out" : "review-slide-in"}>
              {currentLocation}
            </span>
          </h1> */}
          <h1 className="text-8xl font-bold text-white mb-4 leading-none">
            <span>Book Your</span> <br />
            <span>
              Trip to{" "}
              <span
                className={`${
                  slideOut ? "review-slide-out" : "review-slide-in"
                } text-green-500`}
              >
                {currentLocation}
              </span>
            </span>
          </h1>
          <p className="text-lg text-white mb-6">
            <span className="text-green-600">Wander</span> | Travel |{" "}
            <span className="text-green-600">Connect</span> | Repeat
          </p>
          <a
            href="#learn-more"
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
          >
            Book Now
          </a>
        </div>
      </div>

      <div className="relative z-10 flex items-center justify-end p-6 gap-5 w-1/2">
        <div className="max-w-md lg:max-w-lg p-4 bg-gray-800 bg-opacity-80 text-white rounded-lg">
          <div className="review-container">
            {currentReviewIndices.map((index, i) => (
              <div
                key={reviews[index].id}
                className={`flex mb-4 p-4 border border-gray-700 rounded-lg transition-all duration-500 ${
                  i === 0 && isSlidingOut ? "review-slide-out" : ""
                } ${i > 0 && !isSlidingOut ? "review-slide-in" : ""}`}
              >
                <div className="w-1/3 flex-shrink-0">
                  <img
                    src={reviews[index].image}
                    alt="Reviewer"
                    className="w-12 h-12 rounded-full"
                  />
                </div>
                <div className="w-2/3 pl-4">
                  <div className="flex mb-2">
                    {[...Array(reviews[index].rating)].map((_, starIndex) => (
                      <FaStar
                        key={starIndex}
                        className="w-5 h-5 text-yellow-500"
                      />
                    ))}
                  </div>
                  <p className="text-lg">{reviews[index].text}</p>
                  <p className="text-gray-400">— {reviews[index].author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        {/* Statistics Section */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-transparent text-white grid grid-cols-1 md:grid-cols-4 gap-2 h-1/6">
          <div className="flex items-center">
            <div className="w-1/4 flex items-center justify-center">
              <FaStar className="text-xl" />
            </div>
            <div className="w-3/4 flex flex-col items-start ml-1">
              <p className="text-xs">7095+</p>
              <p className="text-xs">Reviews</p>
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-1/4 flex items-center justify-center">
              <FaPlane className="text-xl" />
            </div>
            <div className="w-3/4 flex flex-col items-start ml-1">
              <p className="text-xs">50+</p>
              <p className="text-xs">Destinations</p>
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-1/4 flex items-center justify-center">
              <FaUsers className="text-xl" />
            </div>
            <div className="w-3/4 flex flex-col items-start ml-1">
              <p className="text-xs">50,000+</p>
              <p className="text-xs">Satisfied Travelers</p>
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-1/4 flex items-center justify-center">
              <FaClock className="text-xl" />
            </div>
            <div className="w-3/4 flex flex-col items-start ml-1">
              <p className="text-xs">7 years+</p>
              <p className="text-xs">Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
