import React, { useContext, useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import ProfileImage from "../../assets/blogsSmall1.jpeg";
import BrandImage from "../../assets/biketrip.jpeg";
import { AuthContext } from "../../context/AuthContext";
import { AuthContextApp } from "../../App";
import { useSelector } from "react-redux";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NavBar = () => {
  const { token, userData, isAdmin } = useContext(AuthContext);
  const { userInfo } = useSelector((state) => state.auth);
  const { state } = useContext(AuthContextApp);
  const username = state.userInfo?.name;

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigate = useNavigate();
  const profileRef = useRef(null);
  const moreRef = useRef(null);

  const toggleProfileDropdown = () => {
    setIsProfileOpen((prev) => !prev);
  };

  const toggleMoreDropdown = () => {
    setIsMoreOpen((prev) => !prev);
  };

  const closeDropdown = () => {
    setIsProfileOpen(false);
    setIsMoreOpen(false);
  };

  const logout = async () => {
    const backendUrl = process.env.REACT_APP_BACKEND_URL;

    await axios
      .post(`${backendUrl}/api/logout`, {}, { withCredentials: true })
      .then((response) => {
        navigate("/");
        console.log("Logged out", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target) &&
        moreRef.current &&
        !moreRef.current.contains(event.target)
      ) {
        closeDropdown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed left-0 top-0 z-30 w-full bg-white shadow-md h-[72px] lg:h-[4rem] 2xl:h-[5.625rem] mb-9">
      <div className="container flex items-center justify-between px-6 py-2 lg:px-12">
        {/* Brand Section */}
        <div className="flex items-center">
          <img src={BrandImage} alt="Logo" className="h-10 w-10 rounded-full" />
          <Link to="/" className="ml-2 text-xl font-bold text-gray-800">
            Trooking
          </Link>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <div className="lg:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-800 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex lg:items-center lg:gap-6">
          <Link to="/backpacking-trips" className="font-normal">
            Backpacking Trips
          </Link>
          <Link to="/treks" className="font-normal">
            Treks
          </Link>
          <Link to="/weekend-gateways" className="font-normal">
            Weekend Getaways
          </Link>

          {/* More Dropdown */}
          {/* <div className="relative" ref={moreRef}>
            <div className="absolute left-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-50">
              <Link
                to="/adventure"
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={closeDropdown}
              >
                Girl's Trip
              </Link>
              <Link
                to="/corporate-trip"
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={closeDropdown}
              >
                Corporate Trip
              </Link>
              <Link
                to="/about"
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={closeDropdown}
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={closeDropdown}
              >
                Contact
              </Link>
              <Link
                to="/newsletter"
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={closeDropdown}
              >
                Newsletter
              </Link>
            </div>
          </div> */}

          {/* Profile or Login */}
          {userInfo ? (
            <div className="relative flex items-center" ref={profileRef}>
              <span className="mr-2 text-gray-700">{userInfo.name}</span>
              <img
                src={ProfileImage}
                alt="Profile"
                className="h-10 w-10 rounded-full cursor-pointer"
                onClick={toggleProfileDropdown}
              />
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white border rounded-lg shadow-lg z-50">
                  <Link
                    to="/my-profile"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={closeDropdown}
                  >
                    My Profile
                  </Link>
                  <a
                    href="#settings"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={closeDropdown}
                  >
                    Settings
                  </a>
                  <a
                    href="#logout"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={logout}
                  >
                    Logout
                  </a>
                </div>
              )}
            </div>
          ) : (
            <Link
              to="/signin"
              className="bg-blue-600 px-6 py-2 text-white rounded-xl"
            >
              Log In
            </Link>
          )}
        </div>

        {/* Mobile Menu (Sidebar) */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-40">
            {/* Sidebar on the right */}
            <div className="fixed right-0 top-0 h-full bg-white w-64 z-50 flex flex-col py-4 shadow-lg">
              {/* Close button */}
              <button
                onClick={toggleMobileMenu}
                className="text-gray-800 self-end pr-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Sidebar Links */}
              <Link to="/backpacking-trips" className="py-2 px-4 w-full">
                Backpacking Trips
              </Link>
              <Link to="/treks" className="py-2 px-4 w-full">
                Treks
              </Link>
              <Link to="/weekend-gateways" className="py-2 px-4 w-full">
                Weekend Getaways
              </Link>

              <div className="flex flex-col px-4">
                <Link
                  to="/adventure"
                  className="block py-2 hover:bg-gray-100"
                  onClick={closeDropdown}
                >
                  Girl's Trip
                </Link>
                <Link
                  to="/corporate-trip"
                  className="block py-2 hover:bg-gray-100"
                  onClick={closeDropdown}
                >
                  Corporate Trip
                </Link>
                <Link
                  to="/about"
                  className="block py-2 hover:bg-gray-100"
                  onClick={closeDropdown}
                >
                  About Us
                </Link>
                <Link
                  to="/contact"
                  className="block py-2 hover:bg-gray-100"
                  onClick={closeDropdown}
                >
                  Contact
                </Link>
                <Link
                  to="/newsletter"
                  className="block py-2 hover:bg-gray-100"
                  onClick={closeDropdown}
                >
                  Newsletter
                </Link>
              </div>

              {/* Log In or Profile */}
              {userInfo ? (
                <div className="flex items-center p-4">
                  <img
                    src={ProfileImage}
                    alt="Profile"
                    className="h-10 w-10 rounded-full mr-2"
                  />
                  <span className="text-gray-700">{userInfo.name}</span>
                </div>
              ) : (
                <Link
                  to="/signin"
                  className="bg-blue-600 p-2 m-2 w-[100px] text-center text-white rounded-xl"
                  onClick={toggleMobileMenu}
                >
                  Log In
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
