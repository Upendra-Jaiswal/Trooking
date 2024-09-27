// const User = require("../models/userModel.js"); // Import User model
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// require("dotenv").config(); // Load environment variables

// //dotenv.config();

// const JWT_SECRET = process.env.JWT_SECRET;

// // Sign-up controller
// const signUp = async (req, res) => {
//   const { email, password, name,mobile } = req.body;

//   try {
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: "User already exists" });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const newUser = new User({ email, password: hashedPassword, name, mobile });
//     const savedUser = await newUser.save();

//     const token = jwt.sign({ id: savedUser._id }, JWT_SECRET);

//     res.status(201).json({ token, user: savedUser });
//   } catch (error) {
//     res.status(500).json({ message: "Server error" });
//   }
// };

// // Sign-in controller
// const signIn = async (req, res) => {
//   const { email, password } = req.body;

//   try {

//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(400).json({ message: "Invalid credentials not found user" });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ message: "Invalid credentials" });
//     }

//     const token = jwt.sign({ id: user._id }, JWT_SECRET);

//     res.status(200).json({ token, user });
//   } catch (error) {
//     res.status(500).json({ message: "Server error" });
//   }
// };

// module.exports = {
//   signUp,
//   signIn,
// };

const User = require("../models/userModel"); // Import User model
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config(); // Load environment variables

const JWT_SECRET = process.env.JWT_SECRET; // Access JWT secret from environment variables
const JWT_EXPIRES_IN = "1h"; // Token expiration time

// Sign Up Function
const signUp = async (req, res) => {
  const { email, password, name, mobile } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({ email, password: hashedPassword, name, mobile });
    const savedUser = await newUser.save();

    // Generate JWT
    const token = jwt.sign({ userId: savedUser._id }, JWT_SECRET, {
      // expiresIn: JWT_EXPIRES_IN,
      expiresIn: "1h",
    });

    res.status(201).json({ token, user: savedUser });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Sign In Function
const signIn2 = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Generate JWT
    const token = jwt.sign({ userId: user._id }, JWT_SECRET, {
      // expiresIn: JWT_EXPIRES_IN,
      expiresIn: "1h",
    });

    res.cookie("jwt", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "strict",
      maxAge: 3 * 60 * 1000, // 60 seconds
      //   maxAge: 30 * 24 * 60 * 60 * 1000, //30days
    });

    res.status(200).json({ token, user });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// const signIn2 = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // Find the user by email
//     const user = await User.findOne({ email });

//     // If user not found
//     if (!user) {
//       return res.status(401).json({ message: "Invalid email or password" });
//     }

//     // Compare the provided password with the hashed password in the database
//     const isMatch = await bcrypt.compare(password, user.password);

//     // If password does not match
//     if (!isMatch) {
//       return res.status(400).json({ message: "Invalid credentials" });
//     }

//     // Generate a JWT token
//     const token = jwt.sign({ userId: user._id }, JWT_SECRET, {
//       expiresIn: "1h", // Token expires in 1 hour
//     });

//     // Set the JWT token as an HTTP-only cookie
//     // res.cookie("jwt", token, {
//     //   httpOnly: true,
//     // //  secure: false, // Set to true in production
//     // //  sameSite: "lax",
//     //  // maxAge: 1 * 60 * 60 * 1000, // Cookie expires in 30 days
//     // });

//     res.cookie("jwt", token, { maxAge: 86400 * 1000, httpOnly: true });
//     //res.json({ message: "loggedin" });

//     // Send response with user details
//     res.json({
//       _id: user._id,
//       name: user.name,
//       email: user.email,
//       isAdmin: user.isAdmin, // Include other user details if needed
//     });
//   } catch (error) {
//     // Handle errors
//     res.status(500).json({ message: "Server error", error: error.message });
//   }
// };

// const logoutUser = (req, res) => {
//   res.clearCookie("jwt");
//   res.status(200).json({ message: "Logged out successfully" });
// };

const logout = (req, res) => {
  try {
    // Clear the JWT cookie
    // res.cookie("jwt", "", {
    //   maxAge: 0, // Set the expiration to 0 to immediately expire the cookie
    //   httpOnly: true,
    //   secure: process.env.NODE_ENV === "production", // Set to true in production
    //   sameSite: "lax", // Adjust based on your needs
    // });
    res.clearCookie("jwt", {
      httpOnly: true,
    //  secure: process.env.NODE_ENV === "production", // Set to true in production
      sameSite: "lax", // Adjust based on your needs
    });
    // Send success response
    res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    // Handle errors
    res.status(500).json({ message: "Server error during logout" });
  }
};

const verifyAuth = (req, res) => {
  try {
    const token = req.cookies.jwt; // Retrieve token from cookies

    // if (!token) {
    //   return res.status(401).json({ message: "Unauthorized" });
    // }

    // Verify the token
    // const decoded = jwt.verify(token, JWT_SECRET);

    if (!token) {
      res.status(401).json({ message: "no jwt cookie" });
    }
    // If the token is valid, send user data
    // res.status(200).json({
    //   userId: decoded.userId,
    //   message: "Authenticated",
    // });
    res.status(200).json({
      message: "Authenticated",
    });
  } catch (error) {
    res.status(401).json({ message: "Unauthorized", error: error.message });
  }
};

const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });

    // If user not found
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Compare the provided password with the hashed password in the database
    const isMatch = await bcrypt.compare(password, user.password);

    // If password does not match
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Generate a JWT token
    const token = jwt.sign({ userId: user._id }, JWT_SECRET, {
      expiresIn: "1h", // Token expires in 1 hour
    });

    // Set the JWT token as an HTTP-only cookie
    res.cookie("jwt", token, {
      maxAge: 86400 * 1000, // Cookie expires in 1 day
      httpOnly: true,
    //  secure: process.env.NODE_ENV === "production", // Set to true in production
      sameSite: "lax", // Adjust based on your needs
    });

    // Send response with user details
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin, // Include other user details if needed
    });
  } catch (error) {
    // Handle errors
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  signUp,
  signIn,
  logout,
  verifyAuth,
};
