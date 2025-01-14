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
    
    </div>
  );
};

export default ImageSlider;
