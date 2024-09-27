import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import Bookings from "./Bookings";
import BookingCancellation from "./BookinCancellation";
import Admin from "./Admin";
import TaxiShow from "../HomePage/TaxiShow";

const MyProfile = () => {
  const [activeSection, setActiveSection] = useState("Dashboard");

  const renderContent = () => {
    switch (activeSection) {
      case "Dashboard":
        return <Dashboard />;
      case "Profile":
        return <Profile />;
      case "Bookings":
        return <Bookings />;
      case "Booking Cancellation":
        return <BookingCancellation />;
      case "Admin":
        return <Admin />;
      case "TaxiBooking":
        return <TaxiShow />;

      default:
        return null;
    }
  };

  return (
    <div className="p-4  bg-gray-400">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
        {/* Left Column: Navigation */}
        <div className="bg-white p-4 rounded-2xl shadow col-span-3 h-screen">
          <div className="flex items-center mb-4">
            <Link
              to="/"
              className="flex items-center bg-blue-300 p-3 w-4/12 rounded-2xl"
            >
              <FaArrowLeft className="mr-2" />
              Back
            </Link>
          </div>
          <ul className="space-y-2">
            {[
              "Dashboard",
              "Profile",
              "Bookings",
              "Booking Cancellation",
              "Admin",
              "TaxiBooking",
            ].map((section) => (
              <li key={section}>
                <button
                  onClick={() => setActiveSection(section)}
                  className={`text-left w-full text-gray-600 hover:text-gray-900 ${
                    activeSection === section ? "font-bold" : ""
                  } p-2 rounded`}
                >
                  {section}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column: Content Display */}
        <div className="bg-white p-4 rounded-2xl shadow col-span-9">
          {/* <h2 className="text-lg font-bold mb-4">{activeSection}</h2> */}
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
