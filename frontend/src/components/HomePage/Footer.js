import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-black py-10">
      {/* Container for content */}
      <div className="container mx-auto flex flex-col items-center">
        {/* Grid for content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
          {/* Trooking Info with Social Media Icons */}
          <div>
            <h3 className="text-lg font-bold mb-4">Trooking</h3>
            <div className="space-y-4">
              <div className="flex justify-center space-x-4">
                <a href="#" className="hover:text-gray-400">
                  <FaFacebookF />
                </a>
                <a href="#" className="hover:text-gray-400">
                  <FaTwitter />
                </a>
                <a href="#" className="hover:text-gray-400">
                  <FaInstagram />
                </a>
                <a href="#" className="hover:text-gray-400">
                  <FaYoutube />
                </a>
                <a href="#" className="hover:text-gray-400">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>

          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-400">About Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">Contact Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">Our Blogs</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">Career With Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">Payment Policy</a>
              </li>
            </ul>
          </div>

          {/* Trips Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Trips</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-400">Backpacking Trips</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">Treks</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">Weekend Getaways</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">Biking Trips</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">Upcoming Trips</a>
              </li>
            </ul>
          </div>

          {/* Customized Tour Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Customized Tour</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-400">Domestic Tour Packages</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">International Getaways</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">Corporate Tours</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">Ladakh Trips</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">Spiti Trips</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="mb-2">B-42, 2nd Floor, Tower- B,</p>
            <p className="mb-2">The Corenthum, Block A, Sector 62, Noida,</p>
            <p className="mb-2">Uttar Pradesh 201301</p>
            <p className="mb-2">+91-8810 457 631</p>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-10">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} Trooking. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
