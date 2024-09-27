import React, { useState, useEffect } from "react";

const ImageSlider = ({ images, interval = 1500 }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
    //  setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 2);
    }, interval);

    return () => clearInterval(slideInterval);
//   }, [images.length, interval]);
}, [images, interval]);

  return (
    <div className="flex overflow-hidden rounded-lg shadow-md">
      {/* {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          className={`w-full h-64 object-cover transition-opacity duration-1000 ease-in-out ${
            currentImageIndex === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))} */}
    </div>
  );
};

export default ImageSlider;
