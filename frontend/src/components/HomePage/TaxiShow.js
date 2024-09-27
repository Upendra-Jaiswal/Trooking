import React, { useEffect, useState } from "react";
import "./TaxiShow.css"; // Import the CSS file for animations

const TaxiShow = () => {
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState(null);
  const [selectedBooking, setSelectedBooking] = useState(null);

  const fetchBookings = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/gettaxibooking");
      if (!response.ok) {
        throw new Error("Failed to fetch bookings");
      }
      const data = await response.json();
      setBookings(data);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const handleShowDetails = (booking) => {
    setSelectedBooking(booking);
  };

  const handleCloseDetails = () => {
    setSelectedBooking(null);
  };

  if (error) {
    return <div className="text-red-500 text-center mt-4">{error}</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">
        Taxi Booking Details
      </h2>

      {bookings.length === 0 ? (
        <p className="text-center text-gray-500">No bookings found.</p>
      ) : (
        bookings.map((booking, index) => (
          <div key={index}>
            <div
              className="mb-4 p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <h3 className="text-xl font-semibold text-blue-500">
                {booking.name}'s Booking
              </h3>
              <p className="text-gray-700">
                <strong>Vehicle Type:</strong> {booking.vehicleType}
              </p>
              <p className="text-gray-700">
                <strong>From Date:</strong> {formatDate(booking.fromDate)}
              </p>
              <p className="text-gray-700">
                <strong>To Date:</strong> {formatDate(booking.toDate)}
              </p>
              <button
                onClick={() => handleShowDetails(booking)}
                className="mt-2 text-blue-600 underline hover:text-blue-800"
              >
                See Full Details
              </button>
            </div>

            {selectedBooking === booking && (
              <div className="fade-in mb-5">
                <h3 className="text-2xl font-bold text-gray-800">
                  Full Booking Details
                </h3>
                <div className="mt-2 space-y-2">
                  <p>
                    <strong>Vehicle Type:</strong> {selectedBooking.vehicleType}
                  </p>
                  <p>
                    <strong>From Date:</strong> {formatDate(selectedBooking.fromDate)}
                  </p>
                  <p>
                    <strong>To Date:</strong> {formatDate(selectedBooking.toDate)}
                  </p>
                  <p>
                    <strong>Name:</strong> {selectedBooking.name}
                  </p>
                  <p>
                    <strong>Email:</strong> {selectedBooking.email}
                  </p>
                  <p>
                    <strong>Phone:</strong> {selectedBooking.phone}
                  </p>
                  <p>
                    <strong>Traveling From:</strong> {selectedBooking.travelFrom}
                  </p>
                </div>
                <button
                  onClick={handleCloseDetails}
                  className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors duration-200"
                >
                  Close Details
                </button>
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default TaxiShow;
