const TaxiBooking = require("../models/TaxiBooking");

// POST route to create a new booking
const taxibooking = async (req, res) => {
  try {
    const newBooking = new TaxiBooking({
      vehicleType: req.body.vehicleType,
      fromDate: req.body.fromDate,
      toDate: req.body.toDate,
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      travelFrom: req.body.travelFrom,
      travelTo: req.body.travelTo,  // Added Travel To field
    });

    // Save booking to MongoDB
    const savedBooking = await newBooking.save();
    res.status(201).json(savedBooking);
  } catch (error) {
    res.status(400).json({ message: "Error while booking taxi", error });
  }
};

const gettaxibooking = async (req, res) => {
  try {
    const taxibookingdetails = await TaxiBooking.find();
    return res.send(taxibookingdetails);
  } catch (e) {
    res.status(500).send({ message: e.message });
  }
};

module.exports = { taxibooking, gettaxibooking };
