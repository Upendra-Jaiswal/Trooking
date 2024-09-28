const mongoose = require("mongoose");

// Define the TripBooking schema
const tripBookingSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Reference to the User model
      required: true,
    },
    trip: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Trip", // Reference to the Trip model
      required: true,
    },
    bookingDate: {
      type: Date,
      default: Date.now, // Automatically set to the current date
    },
    numberOfPassengers: {
      type: Number,
      required: true,
      min: 1, // At least one passenger
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["confirmed", "canceled", "pending"], // Possible statuses for the booking
      default: "pending", // Default status
    },
  },
  {
    timestamps: true, // Automatically manage createdAt and updatedAt fields
  }
);

// Create the TripBooking model
const TripBooking = mongoose.model("TripBooking", tripBookingSchema);

module.exports = TripBooking;
