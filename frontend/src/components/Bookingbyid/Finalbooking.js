import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Finalbooking = () => {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);
  const backendUrl = process.env.REACT_APP_BACKEND_URL;
  const navigate = useNavigate(); // Initialize the useNavigate hook

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const response = await fetch(`${backendUrl}/api/trips`, {
          method: "GET",
          credentials: "include", // This is crucial to send cookies
        });
        const data = await response.json();
        if (data.success) {
          setTrips(data.data);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching trips:", error);
        setLoading(false);
      }
    };

    fetchTrips();
  }, []);

  const handleBookClick = (trip) => {
    navigate("/createbooking", { state: { trip } }); // Pass the selected trip as state
  };

  if (loading) {
    return <div className="text-center text-lg font-semibold">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Available Trips</h1>
      {trips.length === 0 ? (
        <div className="text-center text-lg font-semibold">
          No trips available.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {trips.map((trip) => (
            <div
              key={trip._id}
              className="p-6 bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            >
              <h2 className="text-xl font-semibold mb-2">{trip.name}</h2>
              <p className="text-gray-600">Route: {trip.route}</p>
              <p className="text-gray-600">Duration: {trip.duration}</p>
              <p className="text-gray-600 font-bold">Price: ${trip.price}</p>
              <button
                onClick={() => handleBookClick(trip)} // Navigate on button click
                className="mt-4 px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition duration-200"
              >
                Book
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Finalbooking;
