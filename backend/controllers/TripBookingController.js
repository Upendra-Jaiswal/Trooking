const TripBooking = require("../models/TripBooking");
const Trip = require("../models/tripModel");
const User = require("../models/userModel");

// const createBooking = async () => {
//   try {
//     const newTripBooking = new TripBooking(tripBookingData);
//     await newTripBooking.save();
//     console.log("Trip Booking Created Successfully:", newTripBooking);
//   } catch (error) {
//     console.error("Error creating trip booking:", error);
//   }
// };

const createBooking = async (req, res) => {
  try {
    const { merchantTransactionId, name, bookingDetails, amount } = req.body;

    // Create a new trip booking object using the data from the request body
    const newTripBooking = new TripBooking({
      merchantTransactionId,
      name,
      bookingDetails,
      amount,
      status: "confirmed", // Default status as "pending"
    });

    // Save the new trip booking to the database
    await newTripBooking.save();

    // Log success
    console.log("Trip Booking Created Successfully:", newTripBooking);

    // Send a successful response back to the client
    res.status(201).json({
      success: true,
      booking: newTripBooking,
    });
  } catch (error) {
    // Log error
    console.error("Error creating trip booking:", error);

    // Send an error response back to the client
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Create a new trip booking
// const createBooking2 = async (req, res) => {
//   try {
//     const { tripId, numberOfPassengers } = req.body;

//     // Check if the trip exists
//     const trip = await Trip.findById(tripId);
//     if (!trip) {
//       return res
//         .status(404)
//         .json({ success: false, message: "Trip not found" });
//     }

//     // Calculate total price
//     //const totalPrice = trip.price * numberOfPassengers;

//     // Create a new booking
//     // const booking = await TripBooking.create({
//     //   user: req.user.id, // Assuming user ID is in the request object from authentication middleware
//     //   trip: tripId,
//     //   numberOfPassengers,
//     //   totalPrice,
//     // });

//     const booking = await TripBooking.create({
//       // Merchant Transaction ID: T1736274289655
//       // Name: UJ
//       // Booking Details: {"tripId":"66f6c5b48c509088d250432d","tripName":"Kunwari Pass","route":"Haridwar to Haridwar","duration":"6 Days / 5 Nights","numberOfPersons":1}
//       // Amount: 1050000,

//       merchnat

//       user: req.user.id, // Assuming user ID is in the request object from authentication middleware
//       trip: tripId,
//       numberOfPassengers,
//       totalPrice,
//     });

//     res.status(201).json({ success: true, data: booking });
//   } catch (error) {
//     console.error("Error creating booking:", error);
//     res.status(500).json({ success: false, message: "Server Error" });
//   }
// };

// Get all trip bookings
const getAllBookings = async (req, res) => {
  try {
    //  console.log("data",req.user);
    const bookings = await TripBooking.find().populate("user trip"); // Populate user and trip details
    res.status(200).json({ success: true, data: bookings });
  } catch (error) {
    console.error("Error fetching bookings:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// Get bookings by user ID
const getUserBookings = async (req, res) => {
  try {
    //  console.log(req.user)

    const userId = req.user.id;

    // Find bookings that match the user's ID from the request
    const bookings = await TripBooking.find({ user: userId }).populate("trip");

    // If no bookings are found, return an appropriate message
    if (!bookings || bookings.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "No bookings found for this user." });
    }

    // Respond with success and the retrieved bookings
    res.status(200).json({ success: true, data: bookings });
  } catch (error) {
    // Log the error and respond with a server error message
    console.error("Error fetching user bookings:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// Get booking by ID
const getBookingById = async (req, res) => {
  try {
    const booking = await TripBooking.findById(req.params.id).populate(
      "trip user"
    );
    if (!booking) {
      return res
        .status(404)
        .json({ success: false, message: "Booking not found" });
    }
    res.status(200).json({ success: true, data: booking });
  } catch (error) {
    console.error("Error fetching booking:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// Update a booking
const updateBooking = async (req, res) => {
  try {
    const { numberOfPassengers, status } = req.body;

    const booking = await TripBooking.findById(req.params.id);
    if (!booking) {
      return res
        .status(404)
        .json({ success: false, message: "Booking not found" });
    }

    // Only update if the user is the owner of the booking
    if (booking.user.toString() !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: "Not authorized to update this booking",
      });
    }

    booking.numberOfPassengers =
      numberOfPassengers !== undefined
        ? numberOfPassengers
        : booking.numberOfPassengers;
    booking.status = status || booking.status;

    await booking.save();
    res.status(200).json({ success: true, data: booking });
  } catch (error) {
    console.error("Error updating booking:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// Delete a booking
const deleteBooking = async (req, res) => {
  try {
    const booking = await TripBooking.findById(req.params.id);
    if (!booking) {
      return res
        .status(404)
        .json({ success: false, message: "Booking not found" });
    }

    // Only delete if the user is the owner of the booking
    if (booking.user.toString() !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: "Not authorized to delete this booking",
      });
    }

    await booking.remove();
    res
      .status(200)
      .json({ success: true, message: "Booking deleted successfully" });
  } catch (error) {
    console.error("Error deleting booking:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

module.exports = {
  createBooking,
  getAllBookings,
  getUserBookings,
  getBookingById,
  updateBooking,
  deleteBooking,
};
