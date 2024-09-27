import React from "react";
import ImageSlider from "./ImageSlider";

const sliderData = [
  {
    id: 1,
    images: [
      "/path/to/image1.jpg",
      "/path/to/image2.jpg",
      "/path/to/image3.jpg",
      "/path/to/image4.jpg",
    ],
  },
  {
    id: 2,
    images: [
      "/path/to/image5.jpg",
      "/path/to/image6.jpg",
      "/path/to/image7.jpg",
      "/path/to/image8.jpg",
    ],
  },
  // Add more slider data as needed
];

const SlidersContainer = () => {
  return (
    <div className="grid grid-cols-1 gap-4 p-6">
      {/* {sliderData.map((slider) => (
        <div key={slider.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
          <ImageSlider images={slider.images} />
        </div>
      ))} */}
    </div>
  );
};

export default SlidersContainer;
