const mongoose = require("mongoose");

// Define the TripBooking schema
const tripBookingSchema = new mongoose.Schema(
  {
    merchantTransactionId: {
      type: String,
      required: true, // Merchant Transaction ID is required
    },
    name: {
      type: String,
      required: true, // Name is required
    },
    bookingDetails: {
      type: Object,
      required: true, // Ensure bookingDetails is always provided
    },
    // bookingDetails: {
    //   tripId: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Trip", // Reference to the Trip model
    //      required: true, // tripId is required
    //   },
    //   tripName: {
    //     type: String,
    //     required: true, // tripName is required
    //   },
    //   route: {
    //     type: String,
    //      required: true, // route is required
    //   },
    //   duration: {
    //     type: String,
    //      required: true, // duration is required
    //   },
    //   numberOfPersons: {
    //     type: Number,
    //       required: true, // numberOfPersons is required
    //     // min: 1, // Minimum of one person
    //   },
    // },
    amount: {
      type: Number,
      required: true, // amount is required
    },
    status: {
      type: String,
      enum: ["confirmed", "canceled", "pending"], // Possible statuses
      default: "pending", // Default to "pending" status
    },
  },
  {
    timestamps: true, // Automatically manage createdAt and updatedAt fields
  }
);

// Create the TripBooking model
const TripBooking = mongoose.model("TripBooking", tripBookingSchema);

module.exports = TripBooking;
