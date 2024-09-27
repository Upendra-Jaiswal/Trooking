const express = require("express");
const router = express.Router();
const tripController = require("../controllers/tripController");

const {
  getAllTrips,
  addTrip,
  bookTrip,
  getUserBookings,
} = require("../controllers/tripController");

// Route to get all trips
router.get("/trips", getAllTrips);

// Route to add a new trip (admin functionality)
router.post("/addtrips", addTrip);

// Route to book a trip
router.post("/booktrip", bookTrip);
router.get("/getuserbookings", getUserBookings);

module.exports = router;
