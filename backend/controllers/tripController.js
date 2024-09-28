const Trip = require("../models/TripModel");

const User = require("../models/UserModel");

// Get all available trips
const getAllTrips = async (req, res) => {
  try {
    const trips = await Trip.find();
    res.status(200).json({ success: true, data: trips });
  } catch (error) {
    console.error("Error fetching trips:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// Add a new trip (admin functionality)
const addTrip = async (req, res) => {
  try {
    const { name, price, duration, route } = req.body; // Adjusted to include duration and route
    const newTrip = new Trip({ name, price, duration, route });
    await newTrip.save();
    res.status(201).json({ success: true, data: newTrip });
  } catch (error) {
    console.error("Error adding trip:", error);
    res.status(400).json({ success: false, message: "Invalid data" });
  }
};

// Book a trip
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
    const newBooking = new Booking({ user: userId, trip: tripId });
    await newBooking.save(); // Save the booking to the database

    res.status(201).json({ success: true, data: newBooking });
  } catch (error) {
    console.error("Booking error:", error);
    res.status(500).json({ success: false, message: "Booking failed" });
  }
};

// Get all bookings for a user
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
      userName: booking.user.name,
      tripName: booking.trip.name,
      tripPrice: booking.trip.price, // Include trip price
      duration: booking.trip.duration, // Include trip duration
      route: booking.trip.route, // Include trip route
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
