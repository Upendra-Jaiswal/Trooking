const express = require("express");
const connectDB = require("./config/db");
const loadEnv = require("./config/env");
const cookieParser = require("cookie-parser");

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const user1Routes = require("./routes/user1Routes");
const taxiBookingRoutes = require("./routes/taxiBookingRoutes");
const authMiddleware = require("./middlewares/authMiddleware");
const tripRoutes = require("./routes/tripRoutes");
const { protect, admin,protected } = require("./middlewares/authMiddleware");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3001;
require("dotenv").config(); // Load environment variables

// Load environment variables
loadEnv();

// Connect to the database
connectDB();

// Middleware
app.use(express.json());
// app.use(cors());
app.use(cookieParser());

const corsOptions = {
  origin: "http://localhost:3000",
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
app.use("/api", taxiBookingRoutes);

app.use("/api", protected, tripRoutes);
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

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
