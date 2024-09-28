import React, { useEffect, useState } from "react";
import axios from "axios";

const GetUserBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const backendUrl = process.env.REACT_APP_BACKEND_URL;

  useEffect(() => {
    const fetchUserBookings = async () => {
      try {
        const response = await axios.get(`${backendUrl}/api/getuserbookings`, {
          withCredentials: true, // Ensure cookies are sent with the request
        });
        setBookings(response.data.data);
        console.log(response.data.data, "data");
      } catch (err) {
        setError(err.response ? err.response.data.message : "Server Error");
      } finally {
        setLoading(false);
      }
    };

    fetchUserBookings();
  }, []);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My Bookings</h1>
      {bookings.length === 0 ? (
        <div className="text-center">No bookings found.</div>
      ) : (
        <ul className="space-y-4">
          {bookings.map((booking) => (
            <li key={booking._id} className="border p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold">{booking.trip.name}</h2>
              <p>Number of Passengers: {booking.numberOfPassengers}</p>
              <p>Total Price: ${booking.totalPrice.toFixed(2)}</p>
              <p>
                Booking Date: {new Date(booking.createdAt).toLocaleDateString()}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GetUserBookings;
