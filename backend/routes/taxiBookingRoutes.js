// routes/taxiBookingRoutes.js
const express = require("express");
const router = express.Router();
const {
  taxibooking,
  gettaxibooking,
} = require("../controllers/taxiBookingController");

router.post("/taxibooking", taxibooking);

router.get("/gettaxibooking", gettaxibooking);
module.exports = router;
