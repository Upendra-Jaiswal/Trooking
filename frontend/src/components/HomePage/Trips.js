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
import SwiperGrid from "../../components/HomePage/SwiperGrid";
import GridSwiperTrip from "./GridSwiperTrip";
import GridSwiperTripLower from "./GridSwiperTripLower";

const TripSelection = () => {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(false);
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
         {
          loading ? (
            <p>Loading trips...</p>
          ) : (
            <div>
              <GridSwiperTrip />
              <div className="m-2 ">
                <img
                  src={Offerbanner}
                  alt="offerbanner"
                  className=" rounded-2xl"
                />
              </div>
              <GridSwiperTripLower />
            </div>
            // <div>
            //   {/* Row 1 */}
            //   <div className="shrink-0">
            //     <div className="swiper swiper-initialized swiper-horizontal swiper-backface-hidden">
            //       <div className="flex">
            //         <div className="w-1/2  p-2">
            //           {" "}
            //           <img
            //             src={imageUrls[currentImageIndex]}
            //             alt="Slide 1"
            //             className="w-full h-64 object-cover cursor-pointer rounded-2xl"
            //             onClick={() =>
            //               handleBookClick(trips[currentImageIndex])
            //             } // Navigate on image click
            //           />
            //         </div>
            //         <div className="w-1/2  p-2">
            //           <img
            //             src={
            //               imageUrls[
            //                 (currentImageIndex + 1) % imageUrls.length
            //               ]
            //             }
            //             alt="Slide 2"
            //             className="w-full h-64 object-cover cursor-pointer rounded-2xl"
            //             onClick={() =>
            //               handleBookClick(
            //                 trips[(currentImageIndex + 2) % trips.length]
            //               )
            //             }
            //           />
            //         </div>
            //       </div>
            //     </div>
            //   </div>
            //   <div className="shrink-0">
            //     <div class="swiper swiper-initialized swiper-horizontal swiper-backface-hidden">
            //       <div className="w-full h-64 object-cover cursor-pointer">
            //         <img
            //           src={Offerbanner}
            //           alt="offer"
            //           className="rounded-2xl"
            //         />
            //       </div>
            //     </div>
            //   </div>
            //   <div className="shrink-0">
            //     <div class="swiper swiper-initialized swiper-horizontal swiper-backface-hidden">
            //       <div className="flex">
            //         <div className="w-1/2  p-2">
            //           <img
            //             src={imageUrls[currentImageIndex]}
            //             alt="Slide 1"
            //             className="w-full h-64 object-cover cursor-pointer rounded-2xl"
            //             onClick={() =>
            //               handleBookClick(trips[currentImageIndex])
            //             } // Navigate on image click
            //           />
            //         </div>

            //         <div className="w-1/2  p-2">
            //           <img
            //             src={
            //               imageUrls[
            //                 (currentImageIndex + 2) % imageUrls.length
            //               ]
            //             }
            //             alt="Slide 2"
            //             className="w-full h-64 object-cover cursor-pointer rounded-2xl"
            //             onClick={() =>
            //               handleBookClick(
            //                 trips[(currentImageIndex + 3) % trips.length]
            //               )
            //             }
            //           />
            //         </div>
            //       </div>
            //     </div>
            //   </div>
            // </div>
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
