import React from "react";
import { FaTicketAlt } from "react-icons/fa"; // Import the ticket icon
import { Link } from "react-router-dom";
import GetUserBookings from "../Trips/GetUserBookings";

const Bookings = () => {
  // Example booking data
  const bookingsCount = 0; // Change this as needed

  return (
    <div>
      {/* <div className="bg-blue-600 h-36 p-6 m-8 flex flex-col justify-center rounded-2xl items-start"> */}
      {/* <Link to="/mybookings">

  
        <div className="flex items-center mb-2">
          <FaTicketAlt className="h-10 w-10 text-white mr-2" />
        </div>

        <h3 className="text-white text-xl font-semibold mb-1">Bookings:</h3>
        <GetUserBookings />
   
        <span className="text-white text-2xl font-bold">{bookingsCount}</span>
      </Link> */}
      <GetUserBookings />
    </div>
  );
};

export default Bookings;
