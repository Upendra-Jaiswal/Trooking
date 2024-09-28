// middleware/authMiddleware.js
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const User = require("../models/UserModel");

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

const protect = async (req, res, next) => {
  let token;

  token = req.cookies.jwt;

  //   res.send(token);

  if (token) {
    next();
  } else {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
};

const protected = async (req, res, next) => {
  let token;

  // Check for token in the cookie
  if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }

  // If no token, return unauthorized
  if (!token) {
    return res.status(401).json({ message: "Not authorized, no token" });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, JWT_SECRET);

    // Find user by ID
    req.user = await User.findById(decoded.userId).select("-password"); // Exclude password from user data
    next(); // Proceed to the next middleware/route handler
  } catch (error) {
    res.status(401).json({ message: "Not authorized, token failed" });
  }
};

const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error(`Not authorized as admin`);
  }
};

module.exports = { protect, admin, protected };
