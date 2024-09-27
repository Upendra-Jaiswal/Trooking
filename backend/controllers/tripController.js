const Trip = require("../models/tripModel");
const Booking = require("../models/bookingModel");
const User = require("../models/userModel");

// Get all available trips
const getAllTrips = async (req, res) => {
  try {
    const trips = await Trip.find();
    res.status(200).json({ success: true, data: trips });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// Add a new trip (admin functionality)
const addTrip = async (req, res) => {
  try {
    const { name, cost } = req.body;
    const newTrip = new Trip({ name, cost });
    await newTrip.save();
    res.status(201).json({ success: true, data: newTrip });
  } catch (error) {
    res.status(400).json({ success: false, message: "Invalid data" });
  }
};

// // Book Trip Controller
// const bookTrip = async (req, res) => {
//   try {
//     const { tripId } = req.body; // Extract tripId from request body
//     const userId = req.user.id; // Assuming user ID is stored in req.user after authentication

//     // Validate the trip existence
//     const trip = await Trip.findById(tripId);
//     if (!trip) {
//       return res
//         .status(404)
//         .json({ success: false, message: "Trip not found" });
//     }

//     // Validate the user existence
//     const user = await User.findById(userId);
//     if (!user) {
//       return res
//         .status(404)
//         .json({ success: false, message: "User not found" });
//     }

//     // Create a new booking
//     const newBooking = new Booking({
//       user: userId,
//       trip: tripId,
//     });

//     await newBooking.save(); // Save the booking to the database

//     res.status(201).json({ success: true, data: newBooking });
//   } catch (error) {
//     res
//       .status(400)
//       .json({
//         success: false,
//         message: "Booking failed",
//         error: error.message,
//       });
//   }
// };

const bookTrip = async (req, res) => {
  try {
    const { tripId } = req.body; // Extract tripId from request body
    const userId = req.user.id; // Assuming user ID is stored in req.user after authentication

    // Validate the trip existence
    const trip = await Trip.findById(tripId);
    if (!trip) {
      return res
        .status(404)
        .json({ success: false, message: "Trip not found" });
    }

    // Validate the user existence
    const user = await User.findById(userId);
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    // Check if the user has already booked this trip
    const existingBooking = await Booking.findOne({
      user: userId,
      trip: tripId,
    });
    if (existingBooking) {
      return res
        .status(400)
        .json({ success: false, message: "Trip already booked" });
    }

    // Create a new booking
    const newBooking = new Booking({
      user: userId,
      trip: tripId,
    });

    await newBooking.save(); // Save the booking to the database

    res.status(201).json({ success: true, data: newBooking });
  } catch (error) {
    // Log the error for debugging purposes
    console.error("Booking error:", error);

    res.status(500).json({
      success: false,
      message: "Booking failed",
      error: error.message, // Consider removing this in production
    });
  }
};
const getUserBookings = async (req, res) => {
  try {
    const userId = req.user.id; // Assuming user ID is stored in req.user after authentication

    // Fetch all bookings associated with the user and populate trip details
    const bookings = await Booking.find({ user: userId })
      .populate("trip") // Populate trip details
      .populate("user", "name"); // Populate user details (specifying to only get the name)

    if (!bookings.length) {
      return res
        .status(404)
        .json({ success: false, message: "No bookings found" });
    }

    // Format the response to include user name and trip name
    const formattedBookings = bookings.map((booking) => ({
    //   bookingId: booking._id,
      userName: booking.user.name,
      tripName: booking.trip.name,
      tripCost: booking.trip.cost, // Optionally include cost or other trip details
    }));

    res.status(200).json({ success: true, data: formattedBookings });
  } catch (error) {
    console.error("Fetching bookings error:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

module.exports = {
  getAllTrips,
  addTrip,
  bookTrip,
  getUserBookings,
};
