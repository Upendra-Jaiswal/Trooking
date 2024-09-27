import React from "react";
import Slider from "react-slick";
import testimonailsuser1 from "../../assets/testimonialsuser1.jpg";
import testimonailsuser2 from "../../assets/testimonialsuser2.jpeg";
import testimonailsuser3 from "../../assets/testimonialsuser3.avif";
import testimonailsuser4 from "../../assets/testimonialsuser4.jpeg";
import testimonailsuser5 from "../../assets/testimonialsuser5.jpg";
import testimonailsuser6 from "../../assets/testimonialsuser6.jpeg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Reviews data
const reviews = [
  {
    userName: "Sai Gayathri",
    reviewText:
      "My Kashmir winter trip with JW was an amazing experience. The trip lead Omar, the stays and food were just beyond expectation. I had a lot of fun on the trip and will definitely look forward to tripping more with JustWravel.",
    tripName: "Kashmir Winter Trip",
    starRating: 5,
    userImage: testimonailsuser1,
  },
  {
    userName: "Mini Mathew",
    reviewText:
      "Just got back 😁 from a week-long 20-26th January, all-girls tour package of Manali-Kasol-Jibhi, headed by Geetanjali and Divya. The team was truly enjoyable and memorable, especially for me as the youngest at 56! The trip leaders were capable, sporty, and encouraging.",
    tripName: "All Girls Himachal Backpacking Trip",
    starRating: 4.8,
    userImage: testimonailsuser2,
  },
  {
    userName: "G Chanakya",
    reviewText:
      "I recently went for a Spiti valley biking trip and it was the most amazing journey. The bike conditions were top-notch, and the entire experience with JustWravel was beyond words. Kudos to the team for making it unforgettable!",
    tripName: "Spiti Valley Biking Trip",
    starRating: 5,
    userImage: testimonailsuser3,
  },
  {
    userName: "Anurag Bhardwaj",
    reviewText:
      "The Kashmir Great Lake Trek with Just Wravel was an absolute dream come true. Words can't fully capture the emotions I felt while exploring the mesmerizing landscapes. This journey touched my heart in ways I never expected.",
    tripName: "Kashmir Great Lakes Trek",
    starRating: 5,
    userImage: testimonailsuser4,
  },
  {
    userName: "Shriti Chatterjee",
    reviewText:
      "I recently did a trip to Leh Ladakh with JustWravel, and it was a lifetime experience! The trip leaders were fantastic, and the accommodations were great. Everything was well-organized, making the trip memorable and amazing.",
    tripName: "All Girls Ladakh Trip",
    starRating: 4.9,
    userImage: testimonailsuser5,
  },
  {
    userName: "Apeksha Godre",
    reviewText:
      "Had visited Spiti valley in August with a very experienced trip lead Namit. Despite the tough weather conditions, Namit ensured our safety. The arrangements were great, and I had a wonderful time. Highly recommended!",
    tripName: "Spiti Valley Backpacking Trip",
    starRating: 4.7,
    userImage: testimonailsuser6,
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Enable auto-slide
    autoplaySpeed: 3000, // Speed of auto-slide (3 seconds)
    pauseOnHover: true, // Pause on hover
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col items-center p-9 mb-8 h-[600px] bg-gray-100">
      {/* Title */}
      <div className="flex flex-col items-center mb-4">
        <h2 className="text-sm text-gray-500">Reviews</h2>
        <h2 className="text-6xl font-bold text-gray-800 text-center">
          What Our Clients Say About Us
        </h2>
      </div>

      {/* Review Slider */}
      <Slider {...settings} className="w-full h-96">
        {reviews.map((review, index) => (
          <div key={index} className="p-4 h-96">
            <div className="flex flex-col bg-white h-72 shadow-md rounded-lg p-4">
              <div className="mb-2">
                <p className="text-sm text-gray-700 text-center">
                  {review.reviewText}
                </p>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src={review.userImage}
                  alt={`${review.userName}'s profile`}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div className="flex flex-col">
                  <div className="flex mb-1">
                    {Array(Math.floor(review.starRating))
                      .fill()
                      .map((_, i) => (
                        <span key={i} className="text-yellow-500">
                          ★
                        </span>
                      ))}
                    {review.starRating % 1 !== 0 && (
                      <span className="text-yellow-500">☆</span>
                    )}
                  </div>
                  <p className="text-md text-gray-600">— {review.userName}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
