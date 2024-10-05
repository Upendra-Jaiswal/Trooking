import React, { useContext, useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import ProfileImage from "../../assets/blogsSmall1.jpeg";
import BrandImage from "../../assets/biketrip.jpeg";
import { AuthContext } from "../../context/AuthContext"; // Adjust the path
import axios from "axios";

const NavBar = () => {
  const {
    isAuthenticated,
    userName,
    setIsAuthenticated,
    setUserName,
    userData,
    isAdmin,
    setIsAdmin,
  } = useContext(AuthContext);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false); // For More dropdown
  const [newdata, setNewData] = useState(false);

  const navigate = useNavigate();

  const [isAuthenticatedNavbar, setIsAuthenticatedNavbar] = useState(false);

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

  const [count, setCount] = useState(0);

  const refreshPage = () => {
    window.location.reload();
  };

  const [loading, setLoading] = useState(true);

  const logout = async () => {
    const backendUrl = process.env.REACT_APP_BACKEND_URL;

    await axios
      .post(`${backendUrl}/api/logout`, {}, { withCredentials: true })
      .then((response) => {
        setIsAuthenticated(false);
        setUserName(null);

        navigate("/");
        console.log("Logged out", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // If the click happens outside of profile or more dropdowns, close them
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
    <div class="fixed left-0 top-0 z-30 hidden w-full items-center bg-white shadow-md h-[72px] lg:flex lg:h-[4rem] 2xl:h-[5.625rem] mb-9">
      <div class="container flex items-center lg:gap-[1.5rem] md:gap-[1.0rem] 2xl:gap-[1.875rem]">
        {/* Brand Section */}
        <div className="flex items-center">
          {" "}
          <img
            src={BrandImage}
            alt="Logo"
            className="h-10 w-10 ml-20 rounded-full"
          />
          <Link to="/">
            {" "}
            <span className="ml-2 text-xl font-bold text-gray-800">
              Trooking
            </span>
          </Link>
        </div>

        <div class="flex grow items-center justify-center gap-6 text-black 2xl:gap-[2.5rem] lg:gap-[1.0rem]">
          <div class="relative flex items-center justify-center"></div>
          <Link
            to="/backpacking-trips"
            className="2xl:text-p-md font-normal font-poppins"
          >
            Backpacking Trips
          </Link>
          <div>
            <Link
              to="/treks"
              className="2xl:text-p-md font-normal font-poppins"
            >
              Treks
            </Link>
          </div>
          <div>
            <Link
              to="/treks"
              className="2xl:text-p-md font-normal font-poppins"
            >
              Weekend Gateaways
            </Link>
          </div>
          {/* More Dropdown */}
          <div className="relative" ref={moreRef}>
            <button
              className="2xl:text-p-md font-normal font-poppins"
              onClick={toggleMoreDropdown}
            >
              More
            </button>
            {isMoreOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-50">
                <Link
                  to="/adventure"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  onClick={closeDropdown}
                >
                  Girl's Trip
                </Link>
                <Link
                  to="/culture-trips"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  onClick={closeDropdown}
                >
                  Corporate Trip
                </Link>
                <Link
                  to="/wildlife-tours"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  onClick={closeDropdown}
                >
                  About US
                </Link>
                <Link
                  to="/wildlife-tours"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  onClick={closeDropdown}
                >
                  Contact
                </Link>
                <Link
                  to="/wildlife-tours"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  onClick={closeDropdown}
                >
                  Newsletter
                </Link>
              </div>
            )}
          </div>
        </div>

        <div class="flex items-center px-[.375rem] lg:gap-[.25rem] 2xl:gap-[.375rem]">
          <div class="rounded-full bg-gray-100 text-h6 shadow-md lg:p-2 2xl:p-3">
            <svg
              xmlns="https://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="#717171"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 00-1.02.24l-2.2 2.2a15.045 15.045 0 01-6.59-6.59l2.2-2.21a.96.96 0 00.25-1A11.36 11.36 0 018.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 12h2a9 9 0 00-9-9v2c3.87 0 7 3.13 7 7zm-4 0h2c0-2.76-2.24-5-5-5v2c1.66 0 3 1.34 3 3z"
              ></path>
            </svg>
          </div>

          <div class="text-gray-dark">
            <p class="text-p-sm leading-4">Call Us</p>
            <a
              href="tel:+919667051161"
              class="block whitespace-nowrap text-p-md font-medium leading-4"
            >
              +919667051161
            </a>
          </div>
          <div class="flex items-center lg:gap-[.75rem] 2xl:gap-[1.25rem]">
            <button class="rounded-full bg-blue shadow-lg lg:p-2 2xl:p-3">
              <svg
                xmlns="https://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="none"
                viewBox="0 0 24 24"
                class="text-h5 text-white"
              >
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M10 3a7 7 0 104.192 12.606l4.101 4.101a1 1 0 001.414-1.414l-4.1-4.1A7 7 0 0010 3zm-5 7a5 5 0 1110 0 5 5 0 01-10 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <div class="trasnition-all duration-300 ease-out "></div>
          </div>
          <div className="hidden md:flex items-center">
            {isAuthenticated ? (
              <div className="relative flex" ref={profileRef}>
                <span className="text-gray-700 mr-2">{userName}</span>
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
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      onClick={closeDropdown}
                    >
                      My Profile
                    </Link>
                    <a
                      href="#settings"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      onClick={closeDropdown}
                    >
                      Settings
                    </a>
                    <a
                      href="#notifications"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      onClick={closeDropdown}
                    >
                      Notifications
                    </a>
                    <a
                      href="#logout"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      onClick={logout}
                    >
                      Logout
                    </a>
                  </div>
                )}
              </div>
            ) : (
              // <button className="bg-blue-400 p-2 rounded-lg">
              //   <Link to="/signin">LogIn</Link>
              // </button>

              <div>
                <Link
                  to="/signin"
                  className="bg-blue-600 px-[26px] py-[12px]  text-white rounded-2xl w-[94px] h-[43px]"
                >
                  LogIn
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            type="button"
            className="text-gray-600 hover:text-gray-900 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
