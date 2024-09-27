// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const TripsList = () => {
//   const [trips, setTrips] = useState([]); // State for trips
//   const [bookings, setBookings] = useState([]); // State for booked trips
//   const [loading, setLoading] = useState(true); // Loading state
//   const [error, setError] = useState(null); // Error state

//   useEffect(() => {
//     const fetchTrips = async () => {
//       try {
//         const response = await axios.get("http://localhost:3001/api/trips", {
//           withCredentials: true,
//         });
//         setTrips(response.data.data); // Extract trip data
//       } catch (err) {
//         setError(err.response ? err.response.data : "Error fetching trips");
//       } finally {
//         setLoading(false); // End loading state
//       }
//     };

//     fetchTrips(); // Fetch trips on component mount
//   }, []);

// //   const handleBookTrip = async (tripId) => {
// //     try {
// //       const response = await axios.post(
// //         "http://localhost:3001/api/bookings", // Assuming this is your booking endpoint
// //         { tripId },
// //         { withCredentials: true } // Send cookies for authentication
// //       );

// //       // Update bookings state with the newly booked trip
// //       setBookings((prevBookings) => [...prevBookings, response.data]); // Assuming response contains the booked trip data
// //     } catch (err) {
// //       setError(err.response ? err.response.data : "Error booking trip");
// //     }
// //   };

//   if (loading) return <div className="text-center mt-4">Loading...</div>;
//   if (error)
//     return <div className="text-red-500 text-center mt-4">{error}</div>;

//   return (
//     <div className="max-w-lg mx-auto mt-10 bg-white p-6 rounded-lg shadow-md">
//       <h2 className="text-2xl font-semibold mb-6 text-center">Available Trips</h2>
//       <ul className="space-y-4">
//         {trips.map((trip) => (
//           <li key={trip._id} className="flex justify-between p-4 border-b">
//             <span className="font-medium">{trip.name}</span>
//             <div className="flex items-center space-x-4">
//               <span className="text-gray-700">₹{trip.cost}</span>
//               <button
//                 // onClick={() => handleBookTrip(trip._id)} // Call booking function on click
//                 className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600"
//               >
//                 Book
//               </button>
//             </div>
//           </li>
//         ))}
//       </ul>

//     </div>
//   );
// };

// export default TripsList;

import React, { useEffect, useState } from "react";
import axios from "axios";

const TripsList = () => {
  const [trips, setTrips] = useState([]); // State for trips
  const [bookings, setBookings] = useState([]); // State for booked trips
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const backendUrl = process.env.REACT_APP_BACKEND_URL;
        const response = await axios.get(api/trips", {
          withCredentials: true,
        });
        setTrips(response.data.data); // Extract trip data
      } catch (err) {
        setError(err.response ? err.response.data : "Error fetching trips");
      } finally {
        setLoading(false); // End loading state
      }
    };

    fetchTrips(); // Fetch trips on component mount
  }, []);

  const handleBookTrip = async (tripId) => {
    try {
      const response = await axios.post(
         `${backendUrl}/api/booktrip`, // Booking endpoint
        { tripId },
        { withCredentials: true } // Send cookies for authentication
      );

      // Update bookings state with the newly booked trip
      setBookings((prevBookings) => [...prevBookings, response.data.data]); // Assuming response contains the booked trip data
      alert("Booking successful!"); // Optionally alert user
    } catch (err) {
      setError(err.response ? err.response.data : "Error booking trip");
    }
  };

  if (loading) return <div className="text-center mt-4">Loading...</div>;
  if (error)
    return <div className="text-red-500 text-center mt-4">{error}</div>;

  return (
    <div className="max-w-lg mx-auto mt-10 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Available Trips
      </h2>
      <ul className="space-y-4">
        {trips.map((trip) => (
          <li key={trip._id} className="flex justify-between p-4 border-b">
            <span className="font-medium">{trip.name}</span>
            <div className="flex items-center space-x-4">
              <span className="text-gray-700">₹{trip.cost}</span>
              <button
                onClick={() => handleBookTrip(trip._id)} // Call booking function on click
                className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600"
              >
                Book
              </button>
            </div>
          </li>
        ))}
      </ul>
      {bookings.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold">Your Bookings</h3>
          <ul className="space-y-2">
            {bookings.map((booking) => (
              <li
                key={booking._id}
                className="flex justify-between p-2 border-b"
              >
                <span>{booking.trip.name}</span>
                <span className="text-gray-700">₹{booking.trip.cost}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TripsList;
