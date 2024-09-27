import React, { useState } from "react";
import axios from "axios";

const BookingForm = ({ trip, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // The token in the cookie will automatically be sent with this request
      const response = await axios.post(
        `http://localhost:3001/api/booktrip`,
        {
          tripId: trip._id, // Only pass the trip ID, userId will be handled by the backend
        },
        {
          withCredentials: true, // Ensures cookies are sent along with the request
        }
      );

      setMessage("Booking successful!");
    } catch (error) {
      setMessage("Error booking the trip. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Book Trip: {trip.name}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <BookingInput label="Name:" type="text" required />
          <BookingInput label="Email:" type="email" required />
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none"
          >
            {loading ? "Booking..." : "Confirm Booking"}
          </button>
        </form>

        {message && <p className="text-green-600 mt-4">{message}</p>}

        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Close
        </button>
      </div>
    </div>
  );
};

// Modular Input Component
const BookingInput = ({ label, type, required }) => (
  <div>
    <label className="block text-gray-700">{label}</label>
    <input
      type={type}
      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-green-500"
      required={required}
    />
  </div>
);

export default BookingForm;
