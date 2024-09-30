import React, { useEffect, useState } from "react";
import img01 from "../../assets/tripsimages/IMG_5854.JPG";
import img02 from "../../assets/tripsimages/IMG_5855.JPG";
import img03 from "../../assets/tripsimages/IMG_5856.JPG";
import img04 from "../../assets/tripsimages/IMG_5857.JPG";
import img05 from "../../assets/tripsimages/IMG_5858.JPG";
import img06 from "../../assets/tripsimages/IMG_5859.JPG";
import img07 from "../../assets/tripsimages/IMG_5860.JPG";

const videoData = [
  {
    id: 1,
    title: "Kedarkantha",
    imgSrc: img01,
    link: "#",
  },
  {
    id: 2,
    title: "Tawang",
    imgSrc: img02,
    link: "#",
  },
  {
    id: 3,
    title: "Pack Your Bags",
    imgSrc: img03,
    link: "#",
    isZoomed: true, // Identify the zoomed image
  },
  {
    id: 4,
    title: "Bhutan",
    imgSrc: img04,
    link: "#",
  },
  {
    id: 5,
    title: "Bhutan",
    imgSrc: img05,
    link: "#",
  },
  {
    id: 6,
    title: "New Destination",
    imgSrc: img06,
    link: "#",
  },
  {
    id: 7,
    title: "Another Adventure",
    imgSrc: img07,
    link: "#",
  },
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Move to the next index, and if it's the last index, go to the first index
      setCurrentIndex((prevIndex) => (prevIndex + 1) % (videoData.length + 1));
    }, 1000); // Change image every 1 second

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  // Calculate the indices for the images to display
  const displayedImages = [
    videoData[currentIndex % videoData.length],
    videoData[(currentIndex + 1) % videoData.length],
    videoData[(currentIndex + 2) % videoData.length],
  ];

  return (
    <div className="App">
      <section className="p-8 bg-white">
        <h2 className="text-4xl font-bold mb-6 text-center">
          Memories For Life
        </h2>
        <div className="overflow-hidden relative">
          <div className="flex transition-transform duration-500">
            {displayedImages.map((video) => (
              <div key={video.id} className="gap-2 p-4">
                <a href={video.link}>
                  <img
                    src={video.imgSrc}
                    alt={video.title}
                    className="rounded-2xl"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold">{video.title}</h3>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
