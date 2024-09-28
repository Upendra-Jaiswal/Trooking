const express = require("express");
const {
  signUp,
  signIn,
  logout,
  verifyAuth,
} = require("../controllers/AuthController");
const router = express.Router();

router.post("/signup", signUp);

router.post("/signin", signIn);

router.post("/logout", logout);

router.get("/verifyauth", verifyAuth);

module.exports = router;
