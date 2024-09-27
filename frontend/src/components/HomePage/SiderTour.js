// import React, { useState, useEffect } from "react";

// import tour1 from "../../assets/index.jpeg";
// import tour2 from "../../assets/Manali-Kasol-Kheerganga-Backpacking-Trip-JustWravel-1693816185.jpg";
// import tour3 from "../../assets/Himachal-Backpacking-Trip-to-Manali-Kasol-Jibhi-JustWravel-1663342430.jpg";
// import tour4 from "../../assets/JustWravel-1708447826-Goa-(2).png";
// import tour5 from "../../assets/biketrip.jpeg";
// import tour6 from "../../assets/spitibackpack.jpeg";
// import tour7 from "../../assets/Spiti-Backpacking-Trip-JustWravel-1690460620.jpg";
// import tour8 from "../../assets/manali..backapck.jpeg";

// const Carousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const slides = [
//     [
//       { id: 1, image: tour1 },
//       { id: 2, image: tour2 },
//       { id: 3, image: tour3 },
//       { id: 4, image: tour4 },
//     ],
//     [
//       { id: 2, image: tour2 },
//       { id: 3, image: tour3 },
//       { id: 4, image: tour4 },
//       { id: 5, image: tour5 },
//     ],
//     [
//       { id: 3, image: tour3 },
//       { id: 4, image: tour4 },
//       { id: 5, image: tour5 },
//       { id: 6, image: tour6 },
//     ],
//     [
//       { id: 4, image: tour4 },
//       { id: 5, image: tour5 },
//       { id: 6, image: tour6 },
//       { id: 7, image: tour7 },
//     ],
//     [
//       { id: 5, image: tour5 },
//       { id: 6, image: tour6 },
//       { id: 7, image: tour7 },
//       { id: 8, image: tour8 },
//     ],
//     [
//       { id: 6, image: tour6 },
//       { id: 7, image: tour7 },
//       { id: 8, image: tour8 },
//       { id: 1, image: tour1 },
//     ],
//     [
//       { id: 7, image: tour7 },
//       { id: 8, image: tour8 },
//       { id: 1, image: tour1 },
//       { id: 2, image: tour2 },
//     ],
//     [
//       { id: 8, image: tour8 },
//       { id: 1, image: tour1 },
//       { id: 2, image: tour2 },
//       { id: 3, image: tour3 },
//     ],
//   ];

//   const goToPrevious = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? slides.length - 1 : prevIndex - 1
//     );
//   };

//   const goToNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === slides.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       goToNext();
//     }, 1500); // Change slide every 1500ms

//     return () => clearInterval(interval); // Cleanup on component unmount
//   }, [currentIndex]); // Add currentIndex to the dependency array to re-run effect on index change

//   return (
//     <div className="relative w-full  mx-auto mt-8 p-4">
//       <div className="relative overflow-hidden rounded-lg shadow-lg">
//         <div
//           className="carousel-container flex"
//           style={{
//             transform: `translateX(-${currentIndex * 100}%)`,
//             transition: "transform 0.5s ease-in-out",
//           }}
//         >
//           {slides.map((slide, slideIndex) => (
//             <div
//               key={slideIndex}
//               className="carousel-slide flex-none w-full flex grid-cols-4 grid-rows-2 gap-4 rounded-lg"
//             >
//               {slide.map((item) => (
//                 <div
//                   key={item.id}
//                   className="relative w-full h-full aspect-w-1 aspect-h-1"
//                 >
//                   <img
//                     src={item.image}
//                     alt={`Slide ${item.id}`}
//                     className="object-cover w-full h-full"
//                   />
//                 </div>
//               ))}
//             </div>
//           ))}
//         </div>
//         <button
//           onClick={goToPrevious}
//           className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200"
//           aria-label="Previous Slide"
//         >
//           &lt;
//         </button>
//         <button
//           onClick={goToNext}
//           className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200"
//           aria-label="Next Slide"
//         >
//           &gt;
//         </button>
//       </div>
//       <div className="flex  rounded-lgjustify-center mt-4">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentIndex(index)}
//             className={`mx-1 w-3 h-3 rounded-lg ${
//               index === currentIndex ? "bg-blue-500" : "bg-gray-300"
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Carousel;

import React, { useState, useEffect } from "react";

import tour1 from "../../assets/index.jpeg";
import tour2 from "../../assets/Manali-Kasol-Kheerganga-Backpacking-Trip-JustWravel-1693816185.jpg";
import tour3 from "../../assets/Himachal-Backpacking-Trip-to-Manali-Kasol-Jibhi-JustWravel-1663342430.jpg";
import tour4 from "../../assets/JustWravel-1708447826-Goa-(2).png";
import tour5 from "../../assets/biketrip.jpeg";
import tour6 from "../../assets/spitibackpack.jpeg";
import tour7 from "../../assets/Spiti-Backpacking-Trip-JustWravel-1690460620.jpg";
import tour8 from "../../assets/manali..backapck.jpeg";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Define slides with trip data for each image
  const slides = [
    [
      {
        id: 1,
        image: tour1,
        text: "Exploring the Beautiful Valleys of Himachal",
      },
      { id: 2, image: tour2, text: "Manali - The Heart of Himachal" },
      {
        id: 3,
        image: tour3,
        text: "Kheerganga Trek - An Unforgettable Journey",
      },
      { id: 4, image: tour4, text: "Goa Beaches - Fun and Relaxation" },
    ],
    [
      { id: 2, image: tour2, text: "Manali - The Heart of Himachal" },
      {
        id: 3,
        image: tour3,
        text: "Kheerganga Trek - An Unforgettable Journey",
      },
      { id: 4, image: tour4, text: "Goa Beaches - Fun and Relaxation" },
      { id: 5, image: tour5, text: "Exciting Bike Trips" },
    ],
    [
      {
        id: 3,
        image: tour3,
        text: "Kheerganga Trek - An Unforgettable Journey",
      },
      { id: 4, image: tour4, text: "Goa Beaches - Fun and Relaxation" },
      { id: 5, image: tour5, text: "Exciting Bike Trips" },
      { id: 6, image: tour6, text: "Spiti Valley - A Rugged Adventure" },
    ],
    [
      { id: 4, image: tour4, text: "Goa Beaches - Fun and Relaxation" },
      { id: 5, image: tour5, text: "Exciting Bike Trips" },
      { id: 6, image: tour6, text: "Spiti Valley - A Rugged Adventure" },
      { id: 7, image: tour7, text: "Spiti Backpacking - Immersive Experience" },
    ],
    [
      { id: 5, image: tour5, text: "Exciting Bike Trips" },
      { id: 6, image: tour6, text: "Spiti Valley - A Rugged Adventure" },
      { id: 7, image: tour7, text: "Spiti Backpacking - Immersive Experience" },
      { id: 8, image: tour8, text: "Manali - A Serene Escape" },
    ],
    [
      { id: 6, image: tour6, text: "Spiti Valley - A Rugged Adventure" },
      { id: 7, image: tour7, text: "Spiti Backpacking - Immersive Experience" },
      { id: 8, image: tour8, text: "Manali - A Serene Escape" },
      {
        id: 1,
        image: tour1,
        text: "Exploring the Beautiful Valleys of Himachal",
      },
    ],
    [
      { id: 7, image: tour7, text: "Spiti Backpacking - Immersive Experience" },
      { id: 8, image: tour8, text: "Manali - A Serene Escape" },
      {
        id: 1,
        image: tour1,
        text: "Exploring the Beautiful Valleys of Himachal",
      },
      { id: 2, image: tour2, text: "Manali - The Heart of Himachal" },
    ],
    [
      { id: 8, image: tour8, text: "Manali - A Serene Escape" },
      {
        id: 1,
        image: tour1,
        text: "Exploring the Beautiful Valleys of Himachal",
      },
      { id: 2, image: tour2, text: "Manali - The Heart of Himachal" },
      {
        id: 3,
        image: tour3,
        text: "Kheerganga Trek - An Unforgettable Journey",
      },
    ],
  ];

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 1500); // Change slide every 1500ms

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [currentIndex]); // Add currentIndex to the dependency array to re-run effect on index change

  return (
    <div className="relative w-full mx-auto mt-8 p-4">
      <div className="bg-red-600">
        <button
          onClick={goToPrevious}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200"
          aria-label="Previous Slide"
        >
          &lt;
        </button>
        <button
          onClick={goToNext}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200"
          aria-label="Next Slide"
        >
          &gt;
        </button>
      </div>
      <div className="relative overflow-hidden rounded-lg shadow-lg ">
        <div
          className="carousel-container flex "
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: "transform 0.5s ease-in-out",
          }}
        >
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              className="carousel-slide relative flex-none w-full  gap-14 flex"
            >
              {slide.map((item) => (
                <div key={item.id} className="relative w-full h-full">
                  <img
                    src={item.image}
                    alt={`Slide ${item.id}`}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-black bg-opacity-50 p-4">
                    <h2 className="text-xl font-bold">{item.text}</h2>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="flex rounded-lg justify-center mt-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`mx-1 w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-blue-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
