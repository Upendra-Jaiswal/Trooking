// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const UserBookings = () => {
//   const [bookings, setBookings] = useState([]); // State for user bookings
//   const [loading, setLoading] = useState(true); // Loading state
//   const [error, setError] = useState(null); // Error state

//   useEffect(() => {
//     const fetchUserBookings = async () => {
//       try {
//         const backendUrl = process.env.REACT_APP_BACKEND_URL;

//         const response = await axios.get(`${backendUrl}/api/getuserbookings`, {
//           withCredentials: true, // Include credentials for authentication
//         });
//         setBookings(response.data.data); // Set bookings data
//         // console.log(response.data.data);
//       } catch (err) {
//         setError(err.response ? err.response.data : "Error fetching bookings");
//       } finally {
//         setLoading(false); // End loading state
//       }
//     };

//     fetchUserBookings(); // Fetch user bookings on component mount
//   }, []);

//   if (loading) return <div className="text-center mt-4">Loading...</div>;
//   if (error)
//     return <div className="text-red-500 text-center mt-4">{error}</div>;

//   return (
//     <div className="max-w-lg mx-auto mt-10 bg-white p-6 rounded-lg shadow-md">
//       <h2 className="text-2xl font-semibold mb-6 text-center">Your Bookings</h2>
//       {bookings.length > 0 ? (
//         <ul className="space-y-4">
//           {bookings.map((booking) => (
//             <li
//               key={booking.tripName}
//               className="flex justify-between p-4 border-b"
//             >
//               <div>
//                 <h3 className="font-medium">{booking.tripName}</h3>
//                 <p className="text-gray-600">Price: ₹{booking.tripPrice}</p>
//                 <p className="text-gray-600">Duration: {booking.duration}</p>
//                 <p className="text-gray-600">Route: {booking.route}</p>
//                 <p className="text-gray-600">Booked by: {booking.userName}</p>
//               </div>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p className="text-gray-500 text-center">No bookings found.</p>
//       )}
//     </div>
//     // <div className="max-w-lg mx-auto mt-10 bg-white p-6 rounded-lg shadow-md">
//     //   <h2 className="text-2xl font-semibold mb-6 text-center">My Bookings</h2>
//     //   <ul className="space-y-4">
//     //     {bookings.map((booking) => (
//     //       <li key={booking._id} className="flex justify-between p-4 border-b">
//     //         <div>
//     //           {/* <span className="font-medium">User: {booking.userName}</span> */}
//     //           <br />
//     //           <span className="font-medium">Trip: {booking.tripName}</span>

//     //           <br />
//     //           <span className="text-gray-700">Cost: ₹{booking.tripPrice}</span>
//     //         </div>
//     //       </li>
//     //     ))}
//     //   </ul>
//     // </div>
//   );
// };

// export default UserBookings;

import React, { useEffect, useState } from "react";
import axios from "axios";

const UserBookings = () => {
  const [bookings, setBookings] = useState([]); // State for user bookings
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const backendUrl = process.env.REACT_APP_BACKEND_URL;

  useEffect(() => {
    const fetchUserBookings = async () => {
      try {
        const response = await axios.get(`${backendUrl}/api/getuserbookings`, {
          withCredentials: true, // Send cookies for authentication
        });
        setBookings(response.data.data); // Set fetched booking data
      } catch (err) {
        setError(err.response ? err.response.data : "Error fetching bookings");
      } finally {
        setLoading(false); // End loading state
      }
    };

    fetchUserBookings(); // Fetch bookings on component mount
  }, [backendUrl]);

  if (loading) return <div className="text-center mt-4">Loading...</div>;
  if (error)
    return <div className="text-red-500 text-center mt-4">{error}</div>;

  return (
    <div className="max-w-lg mx-auto mt-10 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-center">Your Bookings</h2>
      {bookings.length > 0 ? (
        <ul className="space-y-4">
          {bookings.map((booking) => (
            <li
              key={booking._id}
              className="flex justify-between p-4 border-b"
            >
              <div>
                <h3 className="font-medium">{booking.tripName}</h3>
                <p className="text-gray-600">Price: ₹{booking.tripPrice}</p>
                <p className="text-gray-600">Duration: {booking.duration}</p>
                <p className="text-gray-600">Route: {booking.route}</p>
                <p className="text-gray-600">Booked by: {booking.userName}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 text-center">No bookings found.</p>
      )}
    </div>
  );
};

export default UserBookings;
