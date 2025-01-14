import React from "react";
import { FaTicketAlt } from "react-icons/fa"; // Import the ticket icon
import { Link } from "react-router-dom";
import GetUserBookings from "../Trips/GetUserBookings";

const Bookings = () => {
  // Example booking data
  const bookingsCount = 0; // Change this as needed

  return (
    <div>

      <GetUserBookings />
    </div>
  );
};

export default Bookings;
