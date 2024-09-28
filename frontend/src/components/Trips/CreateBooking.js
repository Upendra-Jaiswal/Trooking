import React from "react";
import { useLocation } from "react-router-dom";

const CreateBooking = () => {
  const location = useLocation();
  const { trip } = location.state || {}; // Get the trip info from the passed state

  if (!trip) {
    return <div>No trip information available.</div>; // Handle case where no trip is provided
  }

  const handleBooking = () => {
    // Handle booking logic (e.g., API call)
    console.log("Booking created for trip:", trip);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Booking for {trip.name}</h1>
      <p>Price: ${trip.price}</p>
      <p>Route: {trip.route}</p>
      <p>Duration: {trip.duration}</p>
      {/* Add input fields for booking details here */}
      <button
        onClick={handleBooking}
        className="mt-4 px-4 py-2 bg-green-600 text-white font-semibold rounded hover:bg-green-700 transition duration-200"
      >
        Confirm Booking
      </button>
    </div>
  );
};

export default CreateBooking;
