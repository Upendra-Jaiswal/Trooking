// // import React, { useContext, useState, useEffect } from "react";
// // import { Link, useNavigate } from "react-router-dom";
// // import ProfileImage from "../../assets/blogsSmall1.jpeg";
// // import BrandImage from "../../assets/biketrip.jpeg";
// // import { AuthContext } from "../../context/AuthContext"; // Adjust the path
// // import axios from "axios";

// // const NavBar = () => {
// //   const {
// //     isAuthenticated,
// //     userName,
// //     setIsAuthenticated,
// //     setUserName,
// //     userData,
// //     isAdmin,
// //     setIsAdmin,
// //   } = useContext(AuthContext);
// //   const [isProfileOpen, setIsProfileOpen] = useState(false);
// //   const navigate = useNavigate();

// //   const toggleProfileDropdown = () => {
// //     setIsProfileOpen((prev) => !prev);
// //   };

// //   const closeDropdown = () => {
// //     setIsProfileOpen(false);
// //   };
// //   const checkauthenticated = async () => {
// //     console.log(isAuthenticated);
// //     console.log(userName, "username");
// //     console.log(userData, "userData");
// //   };

// //   useEffect(() => {
// //     checkauthenticated();
// //   }, []);

// //   const logout = async () => {
// //     const backendUrl = process.env.REACT_APP_BACKEND_URL;

// //     await axios
// //       .post(`${backendUrl}/api/logout`, {}, { withCredentials: true })
// //       .then((response) => {
// //         setIsAuthenticated(false);
// //         setUserName(null);
// //         navigate("/");
// //         console.log("Logged out", response.data);
// //       })
// //       .catch((error) => {
// //         console.log(error);
// //       });
// //   };

// //   return (
// //     <nav className="bg-white shadow-lg">
// //       <div className="container mx-auto px-4 py-4 flex justify-between items-center">
// //         <div className="flex items-center">
// //           <img src={BrandImage} alt="Logo" className="h-10 w-10 rounded-full" />
// //           <span className="ml-2 text-xl font-bold text-gray-800">
// //             BrandName
// //           </span>
// //           {/* <button onClick={checkauthenticated}>checkbutton</button> */}
// //         </div>

// //         <div className="hidden md:flex space-x-6 items-center ml-auto">
// //           {isAuthenticated ? (
// //             <div className="relative flex">
// //               <span className="text-gray-700 mr-2">{userName}</span>
// //               <img
// //                 src={ProfileImage}
// //                 alt="Profile"
// //                 className="h-10 w-10 rounded-full cursor-pointer"
// //                 onClick={toggleProfileDropdown}
// //               />
// //               {isProfileOpen && (
// //                 <div className="absolute right-0 mt-2 w-64 bg-white border rounded-lg shadow-lg z-50">
// //                   <Link
// //                     to="/my-profile"
// //                     className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
// //                     onClick={closeDropdown}
// //                   >
// //                     My Profile
// //                   </Link>
// //                   <a
// //                     href="#settings"
// //                     className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
// //                     onClick={closeDropdown}
// //                   >
// //                     Settings
// //                   </a>
// //                   <a
// //                     href="#notifications"
// //                     className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
// //                     onClick={closeDropdown}
// //                   >
// //                     Notifications
// //                   </a>
// //                   <a
// //                     href="#logout"
// //                     className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
// //                     onClick={logout}
// //                   >
// //                     Logout
// //                   </a>
// //                 </div>
// //               )}
// //             </div>
// //           ) : (
// //             <button className="bg-blue-400 p-2 rounded-lg">
// //               <Link to="/signin">LogIn</Link>
// //             </button>
// //           )}
// //         </div>

// //         <div className="md:hidden">
// //           <button
// //             type="button"
// //             className="text-gray-600 hover:text-gray-900 focus:outline-none"
// //           >
// //             <svg
// //               className="w-6 h-6"
// //               fill="none"
// //               stroke="currentColor"
// //               viewBox="0 0 24 24"
// //               xmlns="http://www.w3.org/2000/svg"
// //             >
// //               <path
// //                 strokeLinecap="round"
// //                 strokeLinejoin="round"
// //                 strokeWidth="2"
// //                 d="M4 6h16M4 12h16M4 18h16"
// //               />
// //             </svg>
// //           </button>
// //         </div>
// //       </div>
// //     </nav>
// //   );
// // };

// // export default NavBar;
// import React, { useContext, useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import ProfileImage from "../../assets/blogsSmall1.jpeg";
// import BrandImage from "../../assets/biketrip.jpeg";
// import { AuthContext } from "../../context/AuthContext"; // Adjust the path
// import axios from "axios";

// const NavBar = () => {
//   const {
//     isAuthenticated,
//     userName,
//     setIsAuthenticated,
//     setUserName,
//     userData,
//     isAdmin,
//     setIsAdmin,
//   } = useContext(AuthContext);
//   const [isProfileOpen, setIsProfileOpen] = useState(false);
//   const [isMoreOpen, setIsMoreOpen] = useState(false); // For More dropdown
//   const navigate = useNavigate();

//   const toggleProfileDropdown = () => {
//     setIsProfileOpen((prev) => !prev);
//   };

//   const toggleMoreDropdown = () => {
//     setIsMoreOpen((prev) => !prev);
//   };

//   const closeDropdown = () => {
//     setIsProfileOpen(false);
//     setIsMoreOpen(false);
//   };

//   const checkauthenticated = async () => {
//     console.log(isAuthenticated);
//     console.log(userName, "username");
//     console.log(userData, "userData");
//   };

//   useEffect(() => {
//     checkauthenticated();
//   }, []);

//   const logout = async () => {
//     const backendUrl = process.env.REACT_APP_BACKEND_URL;

//     await axios
//       .post(`${backendUrl}/api/logout`, {}, { withCredentials: true })
//       .then((response) => {
//         setIsAuthenticated(false);
//         setUserName(null);
//         navigate("/");
//         console.log("Logged out", response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   return (
//     <nav className="bg-white shadow-lg">
//       <div className="container mx-auto px-4 py-4 flex justify-between items-center">
//         {/* Brand Section */}
//         <div className="flex items-center">
//           <img src={BrandImage} alt="Logo" className="h-10 w-10 rounded-full" />
//           <span className="ml-2 text-xl font-bold text-gray-800">
//             BrandName
//           </span>
//         </div>

//         {/* Middle Section (hello) */}
//         <div className="flex-grow flex justify-center items-center">
//           <span className="text-xl font-bold text-gray-800">Hello</span>
//         </div>

//         {/* Menu Items */}
//         <div className="hidden md:flex space-x-6 items-center ml-auto">
//           <Link to="/backpacking-trips" className="text-gray-700 hover:text-gray-900">
//             Backpacking Trips
//           </Link>
//           <Link to="/treks" className="text-gray-700 hover:text-gray-900">
//             Treks
//           </Link>
//           <Link to="/weekend-getaways" className="text-gray-700 hover:text-gray-900">
//             Weekend Getaways
//           </Link>

//           {/* More Dropdown */}
//           <div className="relative">
//             <button
//               className="text-gray-700 hover:text-gray-900"
//               onClick={toggleMoreDropdown}
//             >
//               More
//             </button>
//             {isMoreOpen && (
//               <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-50">
//                 <Link
//                   to="/adventure"
//                   className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//                   onClick={closeDropdown}
//                 >
//                   Adventure
//                 </Link>
//                 <Link
//                   to="/culture-trips"
//                   className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//                   onClick={closeDropdown}
//                 >
//                   Culture Trips
//                 </Link>
//                 <Link
//                   to="/wildlife-tours"
//                   className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//                   onClick={closeDropdown}
//                 >
//                   Wildlife Tours
//                 </Link>
//               </div>
//             )}
//           </div>

//           {isAuthenticated ? (
//             <div className="relative flex">
//               <span className="text-gray-700 mr-2">{userName}</span>
//               <img
//                 src={ProfileImage}
//                 alt="Profile"
//                 className="h-10 w-10 rounded-full cursor-pointer"
//                 onClick={toggleProfileDropdown}
//               />
//               {isProfileOpen && (
//                 <div className="absolute right-0 mt-2 w-64 bg-white border rounded-lg shadow-lg z-50">
//                   <Link
//                     to="/my-profile"
//                     className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//                     onClick={closeDropdown}
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
  const navigate = useNavigate();

  // Create refs for the dropdowns
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

  const checkauthenticated = async () => {
    console.log(isAuthenticated);
    console.log(userName, "username");
    console.log(userData, "userData");
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
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Brand Section */}
        <div className="flex items-center">
          {" "}
          <img src={BrandImage} alt="Logo" className="h-10 w-10 rounded-full" />
          <Link to="/">
            {" "}
            <span className="ml-2 text-xl font-bold text-gray-800">
              Trippy India
            </span>
          </Link>
        </div>

        {/* Middle Section (Menu Items in the center) */}
        <div className="flex-grow flex justify-center items-center space-x-6">
          <Link
            to="/backpacking-trips"
            className="text-gray-700 hover:text-gray-900"
          >
            Backpacking Trips
          </Link>
          <Link to="/treks" className="text-gray-700 hover:text-gray-900">
            Treks
          </Link>
          <Link
            to="/weekend-getaways"
            className="text-gray-700 hover:text-gray-900"
          >
            Weekend Getaways
          </Link>

          {/* More Dropdown */}
          <div className="relative" ref={moreRef}>
            <button
              className="text-gray-700 hover:text-gray-900"
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

        {/* Profile Section */}
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
            <button className="bg-blue-400 p-2 rounded-lg">
              <Link to="/signin">LogIn</Link>
            </button>
          )}
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
    </nav>
  );
};

export default NavBar;
