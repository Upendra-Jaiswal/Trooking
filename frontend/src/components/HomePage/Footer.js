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
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        <div>
          <h3 className="text-lg font-bold mb-4">Trooking</h3>

          <div className="space-y-4">
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-400 font-poppins">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-gray-400 font-poppins">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-gray-400 font-poppins">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-gray-400 font-poppins">
                <FaYoutube />
              </a>
              <a href="#" className="hover:text-gray-400 font-poppins">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400 font-poppins">
                About Us
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400 font-poppins">
                Contact Us
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400 font-poppins">
                Our Blogs
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400 font-poppins">
                Career With Us
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400 font-poppins">
                Payment Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Trips */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Trips</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400 font-poppins">
                Backpacking Trips
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400 font-poppins">
                Treks
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400 font-poppins">
                Weekend Getaways
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400 font-poppins">
                Biking Trips
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400 font-poppins">
                Upcoming Trips
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Customized Tour */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Customized Tour</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400 font-poppins">
                Domestic Tour Packages
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400 font-poppins">
                International Getaways
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400 font-poppins">
                Corporate Tours
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400 font-poppins">
                Ladakh Trips
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400 font-poppins">
                Spiti Trips
              </a>
            </li>
          </ul>
        </div>

        {/* Column 5: Contact Information */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="mb-2">B-42, 2nd Floor, Tower- B,</p>
          <p className="mb-2">The Corenthum, Block A, Sector 62, Noida,</p>
          <p className="mb-2">Uttar Pradesh 201301</p>
          <p className="mb-2">+91-8810 457 631</p>
        </div>
      </div>

      <div className="container mx-auto text-center mt-10">
        <p className="text-gray-500">
          &copy; {new Date().getFullYear()} Trooking. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
