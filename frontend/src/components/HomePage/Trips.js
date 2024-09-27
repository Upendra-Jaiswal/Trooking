import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import tripSlierLower1 from "../../assets/tripSlierLower1.jpeg";
import tripSlierLower2 from "../../assets/tripSlierLower2.png";
import tripSlierUpper1 from "../../assets/tripSlierUpper1.jpeg";
import tripSlierUpper2 from "../../assets/tripSlierUpper2.jpeg";

const Trips = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedTrips, setSelectedTrips] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 2000); // Change image every 2 seconds
    return () => clearInterval(interval);
  }, []);

  const imageUrls = [
    tripSlierLower1,
    tripSlierLower2,
    tripSlierUpper1,
    tripSlierUpper2,
    // Add more image paths as needed
  ];

  const tripTypes = [
    "Adventure",
    "Beach",
    "City",
    "Mountain",
    "Cultural",
    "Relaxation",
    "Historical",
    "Wildlife",
  ];

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    setSelectedTrips((prevSelectedTrips) =>
      checked
        ? [...prevSelectedTrips, value]
        : prevSelectedTrips.filter((trip) => trip !== value)
    );
  };

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-12 gap-4">
        {/* First Column */}
        <div className="col-span-4 bg-gray-100 p-4 rounded-2xl shadow-md">
          <h2 className="text-xl font-bold mb-4">Select Trip Types</h2>
          <div className="space-y-2">
            {tripTypes.map((type) => (
              <label
                key={type}
                className={`flex items-center space-x-2 p-3 border rounded-2xl cursor-pointer hover:bg-gray-200 ${
                  selectedTrips.includes(type)
                    ? "bg-blue-500 text-white border-blue-500"
                    : "bg-white border-gray-300"
                }`}
              >
                <input
                  type="checkbox"
                  value={type}
                  checked={selectedTrips.includes(type)}
                  onChange={handleCheckboxChange}
                  className="form-checkbox"
                />
                <span>{type}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Second Column */}
        <div className="col-span-8 grid grid-rows-2 gap-4">
          {/* Row 1 */}
          <div className="flex gap-4">
            <div className="flex-1 overflow-hidden rounded-2xl shadow-md">
              <Link to="/bookingbyid">
                {" "}
                <img
                  src={imageUrls[currentImageIndex]}
                  alt="Slide 1"
                  className="w-full h-64 object-cover"
                />
              </Link>
            </div>
            <div className="flex-1 overflow-hidden rounded-2xl shadow-md">
              <Link to="/bookingbyid">
                {" "}
                <img
                  src={imageUrls[(currentImageIndex + 1) % imageUrls.length]}
                  alt="Slide 2"
                  className="w-full h-64 object-cover"
                />
              </Link>
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex gap-4">
            <div className="flex-1 overflow-hidden rounded-2xl shadow-md">
              <Link to="/bookingbyid">
                {" "}
                <img
                  src={imageUrls[(currentImageIndex + 2) % imageUrls.length]}
                  alt="Slide 3"
                  className="w-full h-64 object-cover"
                />
              </Link>
            </div>
            <div className="flex-1 overflow-hidden rounded-2xl shadow-md">
              <Link to="/bookingbyid">
                {" "}
                <img
                  src={imageUrls[(currentImageIndex + 3) % imageUrls.length]}
                  alt="Slide 4"
                  className="w-full h-64 object-cover"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trips;
