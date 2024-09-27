import React from "react";
import { FaTicketAlt } from "react-icons/fa"; // Import the ticket icon
import { Link } from "react-router-dom";

const Bookings = () => {
  // Example booking data
  const bookingsCount = 0; // Change this as needed

  return (
    <div className="bg-blue-600 h-36 p-6 m-8 flex flex-col justify-center rounded-2xl items-start">
      <Link to="/mybookings">
        {" "}
        {/* Ticket Icon */}
        <div className="flex items-center mb-2">
          <FaTicketAlt className="h-10 w-10 text-white mr-2" />
        </div>
        {/* Booking Title */}
        <h3 className="text-white text-xl font-semibold mb-1">Bookings:</h3>
        {/* Booking Count */}
        <span className="text-white text-2xl font-bold">{bookingsCount}</span>
      </Link>{" "}
    </div>
  );
};

export default Bookings;
