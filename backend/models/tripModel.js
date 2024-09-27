const mongoose = require("mongoose");

// Trip Schema
const tripSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  cost: {
    type: Number,
    required: true,
  },
});

const Trip = mongoose.model("Trip", tripSchema);
module.exports = Trip;
