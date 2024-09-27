// import React, { useState, useEffect } from "react";
// import ProfileImage from "../../assets/blogsSmall1.jpeg";
// import BrandImage from "../../assets/biketrip.jpeg";

// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";

// const NavBar = ({ isAuthenticated, userName }) => {
//   const [isProfileOpen, setIsProfileOpen] = useState(false);
//   const navigate = useNavigate();

//   const toggleProfileDropdown = () => {
//     setIsProfileOpen((prev) => !prev);
//     console.log("Profile dropdown toggled");
//   };

//   const closeDropdown = () => {
//     setIsProfileOpen(false);
//   };

//   // useEffect(() => {
//   //   console.log(isAuthenticated);
//   // }, [isAuthenticated]);

//   const logout = async () => {
//     await axios
//       .post("http://localhost:3001/api/logout")
//       .then((response) => {
//         navigate("/");
//         console.log("loggedout", response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   return (
//     <nav className="bg-white shadow-lg">
//       <div className="container mx-auto px-4 py-4 flex justify-between items-center">
//         {/* Logo */}
//         <div className="flex items-center">
//           <img src={BrandImage} alt="Logo" className="h-10 w-10 rounded-full" />
//           <span className="ml-2 text-xl font-bold text-gray-800">
//             BrandName
//           </span>
//         </div>

//         {/* Navigation Links and Profile aligned to the right */}
//         <div className="hidden md:flex space-x-6 items-center ml-auto">
//           {isAuthenticated ? (
//             <div className="relative flex">
//               <span className="text-gray-700 mr-2">{userName}</span>
//               <img
//                 src={ProfileImage}
//                 alt="Profile"
//                 className="h-10 w-10 rounded-full cursor-pointer"
//                 onClick={toggleProfileDropdown} // Toggle dropdown on click
//               />

//               {/* Profile Dropdown */}
//               {isProfileOpen && (
//                 <div
//                   className="absolute right-0 mt-2 w-64 bg-white border rounded-lg shadow-lg z-50" // Increased z-index here
//                   style={{ zIndex: 50 }} // Inline z-index for safety
//                 >
//                   <Link
//                     to="/my-profile"
//                     className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//                     onClick={closeDropdown} // Close dropdown on click
//                   >
//                     My Profile
//                   </Link>
//                   <a
//                     href="#settings"
//                     className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//                     onClick={closeDropdown}
//                   >
//                     Settings
//                   </a>
//                   <a
//                     href="#notifications"
//                     className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//                     onClick={closeDropdown}
//                   >
//                     Notifications
//                   </a>
//                   <a
//                     href="#logout"
//                     className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//                     onClick={logout}
//                   >
//                     Logout
//                   </a>
//                 </div>
//               )}
//             </div>
//           ) : (
//             <button className="bg-blue-400 p-2 rounded-lg">
//               <Link to="/signin">LogIn</Link>
//             </button>
//           )}
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden">
//           <button
//             type="button"
//             className="text-gray-600 hover:text-gray-900 focus:outline-none"
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;

import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ProfileImage from "../../assets/blogsSmall1.jpeg";
import BrandImage from "../../assets/biketrip.jpeg";
import { AuthContext } from "../../context/AuthContext"; // Adjust the path
import axios from "axios";

const NavBar = () => {
  const { isAuthenticated, userName, setIsAuthenticated, setUserName } =
    useContext(AuthContext);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const navigate = useNavigate();

  const toggleProfileDropdown = () => {
    setIsProfileOpen((prev) => !prev);
  };

  const closeDropdown = () => {
    setIsProfileOpen(false);
  };
  const checkauthenticated = async () => {
    console.log(isAuthenticated);
  };

  useEffect(() => {
    checkauthenticated();
  }, []);

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

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src={BrandImage} alt="Logo" className="h-10 w-10 rounded-full" />
          <span className="ml-2 text-xl font-bold text-gray-800">
            BrandName
          </span>
          <button onClick={checkauthenticated}>checkbutton</button>
        </div>

        <div className="hidden md:flex space-x-6 items-center ml-auto">
          {isAuthenticated ? (
            <div className="relative flex">
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
            <button className="bg-blue-400 p-2 rounded-lg">
              <Link to="/signin">LogIn</Link>
            </button>
          )}
        </div>

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
    </nav>
  );
};

export default NavBar;
