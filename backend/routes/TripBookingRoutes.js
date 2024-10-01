const express = require("express");
const {
  createBooking,
  getAllBookings,
  getUserBookings,
  getBookingById,
  updateBooking,
  deleteBooking,
} = require("../controllers/tripBookingController");
// const { protect } = require("../middleware/authMiddleware"); // Assuming you have a middleware for protecting routes

const router = express.Router();

// Route to create a new booking
router.post("/createbooking", createBooking);

// Route to get all bookings (Admin only, optional)
router.get("/getallbookings", getAllBookings);

// Route to get bookings by the authenticated user
router.get("/getuserbookings", getUserBookings);

// Route to get a booking by ID
router.get("/:id", getBookingById);

// Route to update a booking
router.put("/:id", updateBooking);

// Route to delete a booking
router.delete("/:id", deleteBooking);

module.exports = router;
