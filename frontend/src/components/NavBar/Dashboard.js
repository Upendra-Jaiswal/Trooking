import React, { useState } from "react";
import Bookings from "./Bookings"; // Adjust the import path as needed
import MyBookings from "./MyBookings"; // Import your MyBookings component

const Dashboard = () => {
  const [showMyBookings, setShowMyBookings] = useState(false);

  const handleBookingsClick = () => {
    setShowMyBookings(true);
  };

  return (
    <div>
      {showMyBookings ? (
        <MyBookings />
      ) : (
        <Bookings onBookingsClick={handleBookingsClick} />
      )}
    </div>
  );
};

export default Dashboard;
