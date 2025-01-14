
import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const backendUrl = process.env.REACT_APP_BACKEND_URL;
  // Fetch all bookings
  const fetchBookings = async () => {
    try {

      const response = await axios.get(`${backendUrl}/api/bookings`);
      if (response.data.success) {
        setBookings(response.data.data);
      } else {
        setError("No bookings found.");
      }
    } catch (err) {
      setError("Failed to fetch bookings.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  if (loading) return <div>Loading...</div>;

  if (error) return <div>{error}</div>;

  return (
    <div>
      <h2>All Bookings</h2>
      {bookings.length === 0 ? (
        <p>No bookings available</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>User Name</th>
              <th>Trip Name</th>
              <th>Price</th>
              <th>Duration</th>
              <th>Route</th>
              <th>Booking Date</th>
              <th>People</th>
              <th>Total Price</th>
              <th>Special Requests</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={index}>
                <td>{booking.userName}</td>
                <td>{booking.tripName}</td>
                <td>{booking.tripPrice}</td>
                <td>{booking.tripDuration}</td>
                <td>{booking.tripRoute}</td>
                <td>{new Date(booking.bookingDate).toLocaleDateString()}</td>
                <td>{booking.numberOfPeople}</td>
                <td>{booking.totalPrice}</td>
                <td>{booking.specialRequests || "None"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminBookings;
