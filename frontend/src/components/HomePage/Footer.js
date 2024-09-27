import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-black py-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {/* Column 1: JustWravel with Social Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">JustWravel</h3>
          {/* Social Links: 2 rows with 5 icons each */}
          <div className="space-y-4">
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-400">
                FB
              </a>
              <a href="#" className="hover:text-gray-400">
                TW
              </a>
              <a href="#" className="hover:text-gray-400">
                IN
              </a>
              <a href="#" className="hover:text-gray-400">
                YT
              </a>
              <a href="#" className="hover:text-gray-400">
                LI
              </a>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-400">
                SC
              </a>
              <a href="#" className="hover:text-gray-400">
                PT
              </a>
              <a href="#" className="hover:text-gray-400">
                WT
              </a>
              <a href="#" className="hover:text-gray-400">
                GP
              </a>
              <a href="#" className="hover:text-gray-400">
                TK
              </a>
            </div>
          </div>
        </div>

        {/* Column 2: Company Information */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
                About Us
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
                Contact Us
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
                Our Blogs
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
                Career With Us
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
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
              <a href="#" className="hover:text-gray-400">
                Backpacking Trips
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
                Treks
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
                Weekend Getaways
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
                Biking Trips
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
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
              <a href="#" className="hover:text-gray-400">
                Domestic Tour Packages
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
                International Getaways
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
                Corporate Tours
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
                Ladakh Trips
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
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
          &copy; {new Date().getFullYear()} JustWravel. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
