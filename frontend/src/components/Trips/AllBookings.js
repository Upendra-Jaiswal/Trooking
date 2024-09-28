// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const Bookings = () => {
//   const [trips, setTrips] = useState([]); // State for available trips
//   const [bookings, setBookings] = useState([]); // State for user bookings
//   const [allBookings, setAllBookings] = useState([]); // State for all bookings (admin view)
//   const [loading, setLoading] = useState(true); // Loading state
//   const [error, setError] = useState(null); // Error state
//   const [isAdmin, setIsAdmin] = useState(false); // Check if user is admin
//   const [newBooking, setNewBooking] = useState({
//     tripId: "",
//     numberOfPeople: "",
//     totalPrice: "",
//     specialRequests: "",
//   }); // State for new booking

//   const backendUrl = process.env.REACT_APP_BACKEND_URL;

// //   // Fetch available trips and user bookings
// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const [tripsResponse, bookingsResponse] = await Promise.all([
// //           axios.get(`${backendUrl}api/trips`, { withCredentials: true }),
// //           axios.get(`${backendUrl}api/my-bookings`, { withCredentials: true }),
// //         ]);

// //         setTrips(tripsResponse.data.data);
// //         setBookings(bookingsResponse.data.data);
// //       } catch (err) {
// //         setError(err.response ? err.response.data : "Error fetching data");
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchData(); // Fetch data on component mount
// //   }, [backendUrl]);

//   // Check if user is admin (this logic may vary)
// //   useEffect(() => {
// //     const checkAdmin = async () => {
// //       try {
// //         const response = await axios.get(`${backendUrl}api/check-admin`, {
// //           withCredentials: true,
// //         });
// //         setIsAdmin(response.data.isAdmin);
// //       } catch (err) {
// //         console.error("Error checking admin status:", err);
// //       }
// //     };

// //     checkAdmin(); // Check if user is admin
// //   }, [backendUrl]);

// //   // Create a new booking
// //   const handleBookingChange = (e) => {
// //     const { name, value } = e.target;
// //     setNewBooking((prev) => ({ ...prev, [name]: value }));
// //   };

// //   const handleCreateBooking = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const response = await axios.post(
// //         `${backendUrl}/api/createbooking`,
// //         newBooking,
// //         { withCredentials: true }
// //       );
// //       setBookings((prev) => [...prev, response.data.data]); // Add new booking to user bookings
// //       alert("Booking created successfully!");
// //       setNewBooking({
// //         tripId: "",
// //         numberOfPeople: "",
// //         totalPrice: "",
// //         specialRequests: "",
// //       }); // Reset form
// //     } catch (err) {
// //       setError(err.response ? err.response.data : "Error creating booking");
// //     }
// //   };

//   // Fetch all bookings for admin
//   const fetchAllBookings = async () => {
//     try {
//       const response = await axios.get(`${backendUrl}/api/bookings`, {
//         withCredentials: true,
//       });
//       setAllBookings(response.data.data);
//     } catch (err) {
//       setError(
//         err.response ? err.response.data : "Error fetching all bookings"
//       );
//     }
//   };

//   useEffect(() => {
// //     if (isAdmin) {
//      fetchAllBookings(); // Fetch all bookings if admin
// //     }
//   }, []);

//   if (loading) return <div className="text-center mt-4">Loading...</div>;
//   if (error)
//     return <div className="text-red-500 text-center mt-4">{error}</div>;

//   return (
//     <div className="max-w-lg mx-auto mt-10 bg-white p-6 rounded-lg shadow-md">
//       <h2 className="text-2xl font-semibold mb-6 text-center">Book a Trip</h2>
//       <form onSubmit={handleCreateBooking} className="mb-6">
//         <select
//           name="tripId"
//           value={newBooking.tripId}
//           onChange={handleBookingChange}
//           required
//           className="w-full p-2 mb-4 border rounded"
//         >
//           <option value="">Select a Trip</option>
//           {trips.map((trip) => (
//             <option key={trip._id} value={trip._id}>
//               {trip.name} - ₹{trip.price}
//             </option>
//           ))}
//         </select>
//         <input
//           type="number"
//           name="numberOfPeople"
//           value={newBooking.numberOfPeople}
//           onChange={handleBookingChange}
//           placeholder="Number of People"
//           required
//           className="w-full p-2 mb-4 border rounded"
//         />
//         <input
//           type="number"
//           name="totalPrice"
//           value={newBooking.totalPrice}
//           onChange={handleBookingChange}
//           placeholder="Total Price"
//           required
//           className="w-full p-2 mb-4 border rounded"
//         />
//         <textarea
//           name="specialRequests"
//           value={newBooking.specialRequests}
//           onChange={handleBookingChange}
//           placeholder="Special Requests"
//           className="w-full p-2 mb-4 border rounded"
//         ></textarea>
//         <button
//           type="submit"
//           className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
//         >
//           Create Booking
//         </button>
//       </form>

//       {isAdmin && allBookings.length > 0 && (
//         <div className="mt-6">
//           <h3 className="text-lg font-semibold">All Bookings</h3>
//           <ul className="space-y-2">
//             {allBookings.map((booking) => (
//               <li
//                 key={booking._id}
//                 className="flex justify-between p-2 border-b"
//               >
//                 <span>
//                   {booking.userName} booked {booking.tripName}
//                 </span>
//                 <span>₹{booking.tripPrice}</span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}

//       {bookings.length > 0 && (
//         <div className="mt-6">
//           <h3 className="text-lg font-semibold">Your Bookings</h3>
//           <ul className="space-y-2">
//             {bookings.map((booking) => (
//               <li
//                 key={booking._id}
//                 className="flex justify-between p-2 border-b"
//               >
//                 <span>{booking.tripName}</span>
//                 <span>₹{booking.tripPrice}</span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Bookings;
import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const backendUrl = process.env.REACT_APP_BACKEND_URL;
  // Fetch all bookings
  const fetchBookings = async () => {
    try {

      const response = await axios.get(`${backendUrl}/api/bookings`);
      if (response.data.success) {
        setBookings(response.data.data);
      } else {
        setError("No bookings found.");
      }
    } catch (err) {
      setError("Failed to fetch bookings.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  if (loading) return <div>Loading...</div>;

  if (error) return <div>{error}</div>;

  return (
    <div>
      <h2>All Bookings</h2>
      {bookings.length === 0 ? (
        <p>No bookings available</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>User Name</th>
              <th>Trip Name</th>
              <th>Price</th>
              <th>Duration</th>
              <th>Route</th>
              <th>Booking Date</th>
              <th>People</th>
              <th>Total Price</th>
              <th>Special Requests</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={index}>
                <td>{booking.userName}</td>
                <td>{booking.tripName}</td>
                <td>{booking.tripPrice}</td>
                <td>{booking.tripDuration}</td>
                <td>{booking.tripRoute}</td>
                <td>{new Date(booking.bookingDate).toLocaleDateString()}</td>
                <td>{booking.numberOfPeople}</td>
                <td>{booking.totalPrice}</td>
                <td>{booking.specialRequests || "None"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminBookings;
