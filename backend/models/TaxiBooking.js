// models/TaxiBooking.js
const mongoose = require("mongoose");

const taxiBookingSchema = new mongoose.Schema({
  vehicleType: { type: String, required: true },
  fromDate: { type: Date, required: true },
  toDate: { type: Date, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  travelFrom: { type: String, required: true },
  travelTo: { type: String, required: true }, // Added Travel To field
  createdAt: { type: Date, default: Date.now },
});

const TaxiBooking = mongoose.model("TaxiBooking", taxiBookingSchema);
module.exports = TaxiBooking;
