import React, { useState, useEffect } from "react";
import InfoBookById from "./InfoBookById";
import bookbyidimgbiggest from "../../assets/bookbyidimgbiggest.jpg";
import bookbyidimgbig from "../../assets/bookbyidimgbig.jpg";
import bookbyidimgsmall11 from "../../assets/bookbyidimgsmall11.jpg";
import bookbyidimgsmall12 from "../../assets/bookbyidimgsmall12.jpg";
import user1 from "../../assets/blogsBig.png";
import user2 from "../../assets/biketrip.jpeg";
import user3 from "../../assets/blogssmall2.png";
import user4 from "../../assets/bookbyidimgbig.jpg";
import "./MyComponent.css";
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

  return (
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
      <div>
        <InfoBookById />
      </div>
    </div>
  );
};

export default MyComponent;
