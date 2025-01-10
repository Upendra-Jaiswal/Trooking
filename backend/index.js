const express = require("express");
const connectDB = require("./config/db");
const loadEnv = require("./config/env");
const cookieParser = require("cookie-parser");
const crypto = require("crypto");
const axios = require("axios");
const bodyParser = require("body-parser");

const TripBooking = require("./models/TripBooking");

const authRoutes = require("./routes/authRoutes"); //authroutes
const userRoutes = require("./routes/userRoutes");
const tripBookingRoutes = require("./routes/TripBookingRoutes");
// const user1Routes = require("./routes/user1Routes");
const taxiBookingRoutes = require("./routes/taxiBookingRoutes");
const authMiddleware = require("./middlewares/authMiddleware");
const tripRoutes = require("./routes/tripRoutes");
// const bookingRoutes = require("./routes/bookingRoutes");
const { protect, admin, protected } = require("./middlewares/authMiddleware");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3001;
require("dotenv").config(); // Load environment variables

let salt_key = "96434309-7796-489d-8924-ab56988a6076";

const MERCHANT_KEY = "96434309-7796-489d-8924-ab56988a6076";
let merchant_id = "PGTESTPAYUAT86";

// Load environment variables
loadEnv();

// Connect to the database
connectDB();

// Middleware
app.use(express.json());
// app.use(cors());
app.use(cookieParser());

app.use(bodyParser.json()); // Parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies

const allowedOrigins = process.env.ORIGIN;

const corsOptions = {
  origin: allowedOrigins,
  methods: ["POST", "GET"],
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

// app.use(cors());
// app.use(
//   cors({
//     origin: ["http://localhost:3000"],
//     methods: ["POST", "GET"],
//     credentials: true,
//     optionSuccessStatus: 200,
//   })
// );

// Global error handler (optional)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Server Error");
});

app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", protected, taxiBookingRoutes);

app.use("/api", protected, tripRoutes);
// app.use("/api", bookingRoutes);
app.use("/api", protected, tripBookingRoutes);
//app.use("/api", userRoutes);
//app.use("/api", authMiddleware, user1Routes);
//app.use("/api", authMiddleware, userRoutes);
app.get("/set-cookie", (req, res) => {
  // Set a cookie with name "name" and value "somename"
  res.cookie("name", "somename", { maxAge: 86400 * 1000, httpOnly: true }); // 86400 seconds = 1 day
  res.send("Cookie has been set");
});

// app.get('/get-cookie', (req, res) => {
//   const cookieValue = req.cookies.name;
//   res.send(`Cookie value: ${cookieValue}`);
// });

app.get("/get-cookie", (req, res) => {
  const cookieValue = req.cookies.jwt;
  res.send(`Cookie value: ${cookieValue}`);
});

// let salt_key = '099eb0cd-02cf-4e2a-8aca-3e6c6aff0399'
// let merchant_id = 'PGTESTPAYUAT'

// app.get("/", (req, res) => {
//   res.send("server running!", req);
// });
app.get("/", protected, (req, res) => {
  res.json({
    message: "Server running!",
    user: req.user || null, // Include user information if available
  });
});

const successUrl = `${process.env.ORIGIN}/payment-success`;

// const successUrl = "http://localhost:3000/payment-success";

app.post("/order", async (req, res) => {
  // console.log(req.body);
  try {
    let merchantTransactionId = req.body.transactionId;

    const data = {
      merchantId: merchant_id,
      merchantTransactionId: merchantTransactionId,
      name: req.body.name,
      amount: req.body.amount * 100,
      bookingDetails: req.body.bookingDetails,
      // redirectUrl: `http://localhost:3001/status?id=${merchantTransactionId}`,
      redirectUrl: `${
        process.env.BACKEND
      }/status?id=${merchantTransactionId}&name=${encodeURIComponent(
        req.body.name
      )}&bookingDetails=${encodeURIComponent(
        JSON.stringify(req.body.bookingDetails)
      )}&amount=${encodeURIComponent(req.body.amount * 100)}`,
      redirectMode: "POST",
      mobileNumber: req.body.phone,
      paymentInstrument: {
        type: "PAY_PAGE",
      },
    };

    const payload = JSON.stringify(data);
    const payloadMain = Buffer.from(payload).toString("base64");
    const keyIndex = 1;
    const string = payloadMain + "/pg/v1/pay" + salt_key;
    const sha256 = crypto.createHash("sha256").update(string).digest("hex");
    const checksum = sha256 + "###" + keyIndex;

    // const prod_URL = "https://api.phonepe.com/apis/hermes/pg/v1/pay"
    const prod_URL =
      "https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay";

    const options = {
      method: "POST",
      url: prod_URL,
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        "X-VERIFY": checksum,
      },
      data: {
        request: payloadMain,
      },
    };

    await axios(options)
      .then(function (response) {
        // //console.log(response.data);

        // const url = "http://localhost:3000/payment-success";
        const url = `${process.env.ORIGIN}/payment-success`;

        // return res.redirect(url);
        return res.json(response.data);
      })
      .catch(function (error) {
        //console.log(error);
      });
  } catch (error) {
    //console.log(error);
  }
});

app.post("/status", async (req, res) => {
  //console.log("all req req user here", req.user);
  //const merchantTransactionId = req.query.id;
  const merchantId = merchant_id;
  //console.log(req.query);

  const { id: merchantTransactionId, name, bookingDetails, amount } = req.query;

  // If bookingDetails was encoded as JSON, parse it
  // let parsedBookingDetails;
  // try {
  //   parsedBookingDetails = JSON.parse(decodeURIComponent(bookingDetails));
  // } catch (error) {
  //   parsedBookingDetails = bookingDetails; // Fallback to raw value if not JSON
  // }

  // Logging or processing the data
  console.log("Merchant Transaction ID:", merchantTransactionId);
  console.log("Name:", name);
  console.log("Booking Details:", bookingDetails);
  console.log("Amount:", amount);

  const keyIndex = 1;
  // const string =
  //   `/pg/v1/status/${merchantId}/${merchantTransactionId}` + salt_key;

  const string =
    `/pg/v1/status/${merchantId}/${merchantTransactionId}` + MERCHANT_KEY;

  const sha256 = crypto.createHash("sha256").update(string).digest("hex");
  const checksum = sha256 + "###" + keyIndex;

  const options = {
    method: "GET",
    url: `https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/status/${merchantId}/${merchantTransactionId}`,
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
      "X-VERIFY": checksum,
      "X-MERCHANT-ID": `${merchantId}`,
    },
  };

  axios
    .request(options)
    .then(async function (response) {
      if (response.data.success === true) {
        try {
          // const bookingData = {
          //   merchantTransactionId,
          //   name,
          //   bookingDetails,
          //   amount,

          //   // bookingDetails: JSON.parse(bookingDetails), // Assuming bookingDetails is a JSON string
          //   // amount: amount * 100, // Example: converting amount to a smaller unit if needed
          // };

          //  req.body = bookingData; // Simulate the body as if it came from a real POST request

          const newTripBooking = new TripBooking({
            merchantTransactionId,
            name,
            bookingDetails,
            amount,
            status: "confirmed", // Default status as "pending"
          });

          // Save the new trip booking to the database
          await newTripBooking.save();

          // Log success
          console.log("Trip Booking Created Successfully:", newTripBooking);

          // Call the route handler directly
          // return tripBookingRoutes.createBooking(req, res);

          // const booking = await TripBooking.create({
          //   merchantTransactionId,
          //   name,
          //   bookingDetails: {
          //     tripId: tripId,
          //     tripName: trip.name,
          //     route: trip.route,
          //     duration: trip.duration,
          //     numberOfPersons: numberOfPassengers,
          //   },
          //   amount: amount,
          //   status: "pending", // You can modify this if needed
          // });

          // const booking = await TripBooking.create({
          //   user: req.user.id, // Assuming req.user is populated via middleware
          //   trip: tripId,
          //   numberOfPassengers,
          //   totalPrice,
          // });

          //  console.log("Booking created successfully:", booking);

          // Redirect to success URL
          return res.redirect(successUrl);
        } catch (error) {
          console.error("Error creating booking:", error);
          return res
            .status(500)
            .json({ success: false, message: "Booking creation failed" });
        }
      } else {
        return res.redirect(failureUrl);
      }
    })
    .catch(function (error) {
      console.error("Error processing payment:", error);
      return res.redirect(failureUrl);
    });

  // Extract details from the request or payment response
  //   const { tripId, numberOfPassengers } = req.query;
  // console.log("reached here 1", req.body);
  // Check if the trip exists and create booking

  //   const trip = await Trip.findById(tripId);

  //  console.log("reached here 2");
  // if (!trip) {
  //   return res
  //     .status(404)
  //     .json({ success: false, message: "Trip not found" });
  // }
  // console.log("reached here 3");
  // const totalPrice = trip.price * numberOfPassengers;

  // axios
  //   .request(options)
  //   .then(function (response) {
  //     if (response.data.success === true) {
  //       // const url = "http://localhost:5173/success";
  //       // const url = "http://localhost:3000/payment-success";
  //       return res.redirect(successUrl);
  //     } else {
  //       const url = "http://localhost:5173/fail";
  //       return res.redirect(url);
  //     }
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });

  // try {
  //   const response = await axios.request(options);
  //   console.log("status here");
  //   if (response.data.success === true) {
  //     const url = "http://localhost:3000/payment-success";
  //     return res.redirect(url);

  //     // return res.json({ success: true, message: "Payment Successful" });
  //   } else {
  //     const url = "http://localhost:5173/payment-fail";
  //     return res.redirect(url);

  //     // return res.json({ success: false, message: "Payment Failed" });
  //   }
  // } catch (error) {
  //   console.log(error);
  //   res
  //     .status(500)
  //     .json({ success: false, message: "Error processing payment status" });
  // }
});

// Start the server
app.listen(PORT, () => {
  //console.log(`Server is running on port ${PORT}`);
});
