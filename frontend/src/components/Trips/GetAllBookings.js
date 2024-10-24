import React, { useEffect, useState } from "react";
import axios from "axios";

const GetAllBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const backendUrl = process.env.REACT_APP_BACKEND_URL;

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        // Make a request to the API endpoint to fetch bookings
        const response = await axios.get(`${backendUrl}/api/getallbookings`, {
          withCredentials: true,
        });
        setBookings(response.data.data);
        //console.log(response.data.data);
      } catch (err) {
        console.error("Error fetching bookings:", err);
        setError("Failed to fetch bookings. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  if (loading) return <p>Loading bookings...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Trip Bookings</h1>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4 border-b">User</th>
            <th className="py-2 px-4 border-b">Mobile Number</th>
            <th className="py-2 px-4 border-b">Trip</th>
            <th className="py-2 px-4 border-b">Number of Passengers</th>
            <th className="py-2 px-4 border-b">Total Price</th>
            <th className="py-2 px-4 border-b">Booking Date</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking._id}>
              <td className="py-2 px-4 border-b">{booking.user.name}</td>
              <td className="py-2 px-4 border-b">{booking.user.mobile}</td>
              <td className="py-2 px-4 border-b">{booking.trip.name}</td>
              <td className="py-2 px-4 border-b">
                {booking.numberOfPassengers}
              </td>
              <td className="py-2 px-4 border-b">₹{booking.totalPrice}</td>

              <td className="py-2 px-4 border-b">
                {new Date(booking.createdAt).toLocaleDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GetAllBookings;
