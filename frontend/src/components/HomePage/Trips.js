// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import tripSlierLower1 from "../../assets/tripSlierLower1.jpeg";
// import tripSlierLower2 from "../../assets/tripSlierLower2.png";
// import tripSlierUpper1 from "../../assets/tripSlierUpper1.jpeg";
// import tripSlierUpper2 from "../../assets/tripSlierUpper2.jpeg";

// import img01 from "../../assets/tripsimages/IMG_5854.JPG";
// import img02 from "../../assets/tripsimages/IMG_5855.JPG";
// import img03 from "../../assets/tripsimages/IMG_5856.JPG";
// import img04 from "../../assets/tripsimages/IMG_5857.JPG";
// import img05 from "../../assets/tripsimages/IMG_5858.JPG";
// import img06 from "../../assets/tripsimages/IMG_5859.JPG";
// import img07 from "../../assets/tripsimages/IMG_5860.JPG";

// const Trips = () => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [selectedTrips, setSelectedTrips] = useState([]);

//   const [trips, setTrips] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const backendUrl = process.env.REACT_APP_BACKEND_URL;

//   const imageUrls = [
//     tripSlierLower1,
//     tripSlierLower2,
//     tripSlierUpper1,
//     tripSlierUpper2,

//     img01,
//     img02,
//     img03,
//     img04,
//     img05,
//     img06,
//     img07,
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
//     }, 2000); // Change image every 2 seconds
//     return () => clearInterval(interval);
//   }, []);
//   useEffect(() => {
//     const fetchTrips = async () => {
//       try {
//         const response = await fetch(`${backendUrl}/api/trips`, {
//           method: "GET",
//           credentials: "include", // This is crucial to send cookies
//         });
//         const data = await response.json();
//         if (data.success) {
//           setTrips(data.data);
//         }
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching trips:", error);
//         setLoading(false);
//       }
//     };

//     fetchTrips();
//   }, []);
//   if (loading) {
//     return <div className="text-center text-lg font-semibold">Loading...</div>;
//   }

//   const tripTypes = [
//     "Adventure",
//     "Beach",
//     "City",
//     "Mountain",
//     "Cultural",
//     "Relaxation",
//     "Historical",
//     "Wildlife",
//   ];

//   const handleCheckboxChange = (event) => {
//     const { value, checked } = event.target;
//     setSelectedTrips((prevSelectedTrips) =>
//       checked
//         ? [...prevSelectedTrips, value]
//         : prevSelectedTrips.filter((trip) => trip !== value)
//     );
//   };

//   return (
//     <div className="container mx-auto p-6">
//       <div className="grid grid-cols-12 gap-4">
//         {/* First Column */}
//         <div className="col-span-4 bg-gray-100 p-4 rounded-2xl shadow-md">
//           <h2 className="text-xl font-bold mb-4">Select Trip Types</h2>
//           <div className="space-y-2">
//             {tripTypes.map((type) => (

//               <label
//                 key={type}
//                 className={`flex items-center space-x-2 p-3 border rounded-2xl cursor-pointer hover:bg-gray-200 ${
//                   selectedTrips.includes(type)
//                     ? "bg-blue-500 text-white border-blue-500"
//                     : "bg-white border-gray-300"
//                 }`}
//               >
//                 <input
//                   type="checkbox"
//                   value={type}
//                   checked={selectedTrips.includes(type)}
//                   onChange={handleCheckboxChange}
//                   className="form-checkbox"
//                 />
//                 <span>{type}</span>
//               </label>
//             ))}
//           </div>
//         </div>

//         {/* Second Column */}
//         <div className="col-span-8 grid grid-rows-2 gap-4">
//           {/* Row 1 */}
//           <div className="flex gap-4">
//             <div className="flex-1 overflow-hidden rounded-2xl shadow-md">
//               <Link to="createbooking">
//                 {" "}
//                 <img
//                   src={imageUrls[currentImageIndex]}
//                   alt="Slide 1"
//                   className="w-full h-64 object-cover"
//                 />
//               </Link>
//             </div>
//             <div className="flex-1 overflow-hidden rounded-2xl shadow-md">
//               <Link to="createbooking">
//                 {" "}
//                 <img
//                   src={imageUrls[(currentImageIndex + 1) % imageUrls.length]}
//                   alt="Slide 2"
//                   className="w-full h-64 object-cover"
//                 />
//               </Link>
//             </div>
//           </div>

//           {/* Row 2 */}
//           <div className="flex gap-4">
//             <div className="flex-1 overflow-hidden rounded-2xl shadow-md">
//               <Link to="createbooking">
//                 {" "}
//                 <img
//                   src={imageUrls[(currentImageIndex + 2) % imageUrls.length]}
//                   alt="Slide 3"
//                   className="w-full h-64 object-cover"
//                 />
//               </Link>
//             </div>
//             <div className="flex-1 overflow-hidden rounded-2xl shadow-md">
//               <Link to="createbooking">
//                 {" "}
//                 <img
//                   src={imageUrls[(currentImageIndex + 3) % imageUrls.length]}
//                   alt="Slide 4"
//                   className="w-full h-64 object-cover"
//                 />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Trips;

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import tripSlierLower1 from "../../assets/tripSlierLower1.jpeg";
// import tripSlierLower2 from "../../assets/tripSlierLower2.png";
// import tripSlierUpper1 from "../../assets/tripSlierUpper1.jpeg";
// import tripSlierUpper2 from "../../assets/tripSlierUpper2.jpeg";
// import img01 from "../../assets/tripsimages/IMG_5854.JPG";
// import img02 from "../../assets/tripsimages/IMG_5855.JPG";
// import img03 from "../../assets/tripsimages/IMG_5856.JPG";
// import img04 from "../../assets/tripsimages/IMG_5857.JPG";
// import img05 from "../../assets/tripsimages/IMG_5858.JPG";
// import img06 from "../../assets/tripsimages/IMG_5859.JPG";
// import img07 from "../../assets/tripsimages/IMG_5860.JPG";

// const Trips = () => {
//   const [trips, setTrips] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const backendUrl = process.env.REACT_APP_BACKEND_URL;
//   const navigate = useNavigate();

//   // Array of image URLs
//   const imageUrls = [
//     tripSlierLower1,
//     tripSlierLower2,
//     tripSlierUpper1,
//     tripSlierUpper2,
//     img01,
//     img02,
//     img03,
//     img04,
//     img05,
//     img06,
//     img07,
//   ];

//   useEffect(() => {
//     const fetchTrips = async () => {
//       try {
//         const response = await fetch(`${backendUrl}/api/trips`, {
//           method: "GET",
//           credentials: "include",
//         });
//         const data = await response.json();
//         if (data.success) {
//           // Assign images randomly to trips
//           const assignedTrips = data.data.map((trip, index) => ({
//             ...trip,
//             imageUrl: imageUrls[index % imageUrls.length], // Assign images in a loop
//           }));
//           setTrips(assignedTrips);
//         }
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching trips:", error);
//         setLoading(false);
//       }
//     };

//     fetchTrips();
//   }, [backendUrl]);

//   const handleBookClick = (trip) => {
//     navigate("/bookingbyid", { state: { trip } }); // Pass selected trip data
//   };

//   if (loading) {
//     return <div className="text-center text-lg font-semibold">Loading...</div>;
//   }

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4 text-center">Available Trips</h1>
//       {trips.length === 0 ? (
//         <div className="text-center text-lg font-semibold">
//           No trips available.
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           {trips.map((trip) => (
//             <div
//               key={trip._id}
//               className="p-6 bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
//             >
//               <img
//                 src={trip.imageUrl} // Display the assigned image
//                 alt={trip.name} // Assuming each trip has a name property
//                 className="w-full h-48 object-cover mb-4 rounded"
//               />
//               <h2 className="text-xl font-semibold mb-2">{trip.name}</h2>
//               <p className="text-gray-600">Route: {trip.route}</p>
//               <p className="text-gray-600">Duration: {trip.duration}</p>
//               <p className="text-gray-600 font-bold">Price: ${trip.price}</p>
//               <button
//                 onClick={() => handleBookClick(trip)} // Navigate on button click
//                 className="mt-4 px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition duration-200"
//               >
//                 Book
//               </button>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Trips;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import img01 from "../../assets/tripsimages/IMG_5854.JPG";
import img02 from "../../assets/tripsimages/IMG_5855.JPG";
import img03 from "../../assets/tripsimages/IMG_5856.JPG";
import img04 from "../../assets/tripsimages/IMG_5857.JPG";
import img05 from "../../assets/tripsimages/IMG_5858.JPG";
import img06 from "../../assets/tripsimages/IMG_5859.JPG";
import img07 from "../../assets/tripsimages/IMG_5860.JPG";
import Offerbanner from "../../assets/offerbanner.jpg";

const TripSelection = () => {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedTrips, setSelectedTrips] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate(); // Hook for navigation

  const backendUrl = process.env.REACT_APP_BACKEND_URL;
  const imageUrls = [img01, img02, img03, img04, img05, img06, img07, img06];
  const tripTypes = [
    "Upcoming Trips",
    "Best Sellers",
    "Backpacking Trips",
    "New Launches",
    "Himalayan Treks",
    "Weekend Getaways",
    "International Community Trips",
    "All Girls Trips",
  ];
  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    setSelectedTrips((prevSelectedTrips) =>
      checked
        ? [...prevSelectedTrips, value]
        : prevSelectedTrips.filter((trip) => trip !== value)
    );
  };
  // Fetch trips data from the API
  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const response = await fetch(`${backendUrl}/api/trips`, {
          method: "GET",
          credentials: "include", // This is crucial to send cookies
        });
        const data = await response.json();
        if (data.success) {
          setTrips(data.data);
        }
      } catch (error) {
        console.error("Error fetching trip data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrips();
  }, [backendUrl]);

  // // Handle checkbox changes
  // const handleCheckboxChange = (event) => {
  //   const { value, checked } = event.target;
  //   if (checked) {
  //     setSelectedTrips([...selectedTrips, value]);
  //   } else {
  //     setSelectedTrips(selectedTrips.filter((trip) => trip !== value));
  //   }
  // }; // Handle booking button click
  // const handleBookClick = (trip) => {
  //   // Navigate to the booking page with trip details
  //   navigate(`/createbooking?tripId=${trip._id}`); // Pass trip ID as a query parameter
  // };

  const handleBookClick = (trip) => {
    navigate("/bookingbyid", { state: { trip } }); // Pass the selected trip as state
  };
  return (
   
      <div class="mx-2 my-20 hidden lg:block">
        <div class="grid grid-cols-4 gap-4 2xl:gap-[1.875rem]">
          <div class="col-span-1 rounded-[12px] bg-white p-[1.875rem]">
            <div className="">
              <h2 className="text-2xl font-light font-poppins mb-4">
                Select from our Tours
              </h2>
              <div className="space-y-2">
                {tripTypes.map((type) => (
                  <label
                    key={type}
                    className={`flex items-center space-x-2 p-3 border rounded-2xl cursor-pointer hover:bg-gray-200 ${
                      selectedTrips.includes(type)
                        ? "bg-blue-500 text-white"
                        : "bg-white border-gray-300"
                    }`}
                  >
                    <input
                      type="checkbox"
                      value={type}
                      checked={selectedTrips.includes(type)}
                      onChange={handleCheckboxChange}
                      className="form-checkbox font-medium font-poppins"
                    />
                    <span>{type}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div class="col-span-3 grid grid-cols-1 lg:gap-[1rem] 2xl:gap-[1.875rem]">
            {loading ? (
              <p>Loading trips...</p>
            ) : (
              <div>
                {/* Row 1 */}
                <div className="shrink-0">
                  <div className="swiper swiper-initialized swiper-horizontal swiper-backface-hidden">
                    <div className="flex">
                      <div className="w-1/2  p-2">
                        {" "}
                        <img
                          src={imageUrls[currentImageIndex]}
                          alt="Slide 1"
                          className="w-full h-64 object-cover cursor-pointer rounded-2xl"
                          onClick={() =>
                            handleBookClick(trips[currentImageIndex])
                          } // Navigate on image click
                        />
                      </div>
                      <div className="w-1/2  p-2">
                        <img
                          src={
                            imageUrls[
                              (currentImageIndex + 1) % imageUrls.length
                            ]
                          }
                          alt="Slide 2"
                          className="w-full h-64 object-cover cursor-pointer rounded-2xl"
                          onClick={() =>
                            handleBookClick(
                              trips[(currentImageIndex + 2) % trips.length]
                            )
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="shrink-0">
                  <div class="swiper swiper-initialized swiper-horizontal swiper-backface-hidden">
                    <div className="w-full h-64 object-cover cursor-pointer">
                      <img
                        src={Offerbanner}
                        alt="offer"
                        className="rounded-2xl"
                      />
                    </div>
                  </div>
                </div>
                <div className="shrink-0">
                  <div class="swiper swiper-initialized swiper-horizontal swiper-backface-hidden">
                    <div className="flex">
                      <div className="w-1/2  p-2">
                        <img
                          src={imageUrls[currentImageIndex]}
                          alt="Slide 1"
                          className="w-full h-64 object-cover cursor-pointer rounded-2xl"
                          onClick={() =>
                            handleBookClick(trips[currentImageIndex])
                          } // Navigate on image click
                        />
                      </div>

                      <div className="w-1/2  p-2">
                        <img
                          src={
                            imageUrls[
                              (currentImageIndex + 2) % imageUrls.length
                            ]
                          }
                          alt="Slide 2"
                          className="w-full h-64 object-cover cursor-pointer rounded-2xl"
                          onClick={() =>
                            handleBookClick(
                              trips[(currentImageIndex + 3) % trips.length]
                            )
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>


    // <div className="container mx-auto p-6">
    //   <div className="grid grid-cols-12 gap-4">
    //     {/* First Column */}
    //     <div className="col-span-4 bg-gray-100 p-4 rounded-2xl shadow-md">
    //       <h2 className="text-xl font-bold mb-4">Select Trip Types</h2>
    //       <div className="space-y-2">
    //         {loading ? (
    //           <p>Loading trips...</p>
    //         ) : (
    //           trips.map((trip) => (
    //             <label
    //               key={trip._id}
    //               className={`flex items-center space-x-2 p-3 border rounded-2xl cursor-pointer hover:bg-gray-200 ${
    //                 selectedTrips.includes(trip.name)
    //                   ? "bg-blue-500 text-white border-blue-500"
    //                   : "bg-white border-gray-300"
    //               }`}
    //             >
    //               <input
    //                 type="checkbox"
    //                 value={trip.name}
    //                 checked={selectedTrips.includes(trip.name)}
    //                 onChange={handleCheckboxChange}
    //                 className="form-checkbox"
    //               />
    //               <span>
    //                 {trip.name} - ${trip.price} ({trip.duration})
    //               </span>
    //             </label>
    //           ))
    //         )}
    //       </div>
    //     </div>

    //     <div className="space-y-2">
    //         {loading ? (
    //           <p>Loading trips...</p>
    //         ) : (
    //           trips.map((trip) => (
    //     {/* Second Column */}
    //     <div className="col-span-8 grid grid-rows-2 gap-4">
    //       {/* Row 1 */}
    //       <div className="flex gap-4">
    //         <div className="flex-1 overflow-hidden rounded-2xl shadow-md">
    //           <img
    //             src={imageUrls[currentImageIndex]}
    //             alt="Slide 1"
    //             className="w-full h-64 object-cover cursor-pointer"
    //         //    onClick={() => handleBookClick(trips[currentImageIndex])} // Call the function on image click
    //             onClick={() => handleBookClick(trip)} // Navigate on button click
    //           />
    //         </div>
    //         <div className="flex-1 overflow-hidden rounded-2xl shadow-md">
    //           <img
    //             src={imageUrls[(currentImageIndex + 1) % imageUrls.length]}
    //             alt="Slide 2"
    //             className="w-full h-64 object-cover cursor-pointer"
    //             onClick={() =>
    //               handleBookClick(trips[(currentImageIndex + 1) % trips.length])
    //             } // Call the function on image click
    //           />
    //         </div>
    //       </div>

    //       {/* Row 2 */}
    //       <div className="flex gap-4">
    //         <div className="flex-1 overflow-hidden rounded-2xl shadow-md">
    //           <img
    //             src={imageUrls[(currentImageIndex + 2) % imageUrls.length]}
    //             alt="Slide 3"
    //             className="w-full h-64 object-cover cursor-pointer"
    //             onClick={() =>
    //               handleBookClick(trips[(currentImageIndex + 2) % trips.length])
    //             } // Call the function on image click
    //           />
    //         </div>
    //         <div className="flex-1 overflow-hidden rounded-2xl shadow-md">
    //           <img
    //             src={imageUrls[(currentImageIndex + 3) % imageUrls.length]}
    //             alt="Slide 4"
    //             className="w-full h-64 object-cover cursor-pointer"
    //             onClick={() =>
    //               handleBookClick(trips[(currentImageIndex + 3) % trips.length])
    //             } // Call the function on image click
    //           />
    //         </div>
    //       </div>
    //     </div>
    //     ))
    //   )}</div>
    //   </div>
    // </div>
  );
};

// return (
//   <div className="container mx-auto p-6">
//     <div className="grid grid-cols-12 gap-4">
//       {/* First Column */}
//       <div className="col-span-4 bg-gray-100 p-4 rounded-2xl shadow-md">
//         <h2 className="text-xl font-bold mb-4">Select Trip Types</h2>
//         <div className="space-y-2">
//           {loading ? (
//             <p>Loading trips...</p>
//           ) : (
//             trips.map((trip) => (
//               <label
//                 key={trip._id}
//                 className={`flex items-center space-x-2 p-3 border rounded-2xl cursor-pointer hover:bg-gray-200 ${
//                   selectedTrips.includes(trip.name)
//                     ? "bg-blue-500 text-white border-blue-500"
//                     : "bg-white border-gray-300"
//                 }`}
//               >
//                 <input
//                   type="checkbox"
//                   value={trip.name}
//                   checked={selectedTrips.includes(trip.name)}
//                   onChange={handleCheckboxChange}
//                   className="form-checkbox"
//                 />
//                 <span>
//                   {trip.name} - ${trip.price} ({trip.duration})
//                 </span>
//               </label>
//             ))
//           )}
//         </div>
//       </div>

//       {/* Second Column */}
//       <div className="col-span-8 grid grid-rows-2 gap-4">
//         {/* Row 1 */}
//         <div className="flex gap-4">
//           <div className="flex-1 overflow-hidden rounded-2xl shadow-md">
//             <Link to="createbooking">
//               <img
//                 src={imageUrls[currentImageIndex]}
//                 alt="Slide 1"
//                 className="w-full h-64 object-cover"
//               />
//             </Link>
//           </div>
//           <div className="flex-1 overflow-hidden rounded-2xl shadow-md">
//             <Link to="createbooking">
//               <img
//                 src={imageUrls[(currentImageIndex + 1) % imageUrls.length]}
//                 alt="Slide 2"
//                 className="w-full h-64 object-cover"
//               />
//             </Link>
//           </div>
//         </div>

//         {/* Row 2 */}
//         <div className="flex gap-4">
//           <div className="flex-1 overflow-hidden rounded-2xl shadow-md">
//             <Link to="createbooking">
//               <img
//                 src={imageUrls[(currentImageIndex + 2) % imageUrls.length]}
//                 alt="Slide 3"
//                 className="w-full h-64 object-cover"
//               />
//             </Link>
//           </div>
//           <div className="flex-1 overflow-hidden rounded-2xl shadow-md">
//             <Link to="createbooking">
//               <img
//                 src={imageUrls[(currentImageIndex + 3) % imageUrls.length]}
//                 alt="Slide 4"
//                 className="w-full h-64 object-cover"
//               />
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   );
// };

export default TripSelection;
