const express = require("express");

const { getusers } = require("../controllers/userController");
const { protect, admin } = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/getusers", getusers);

module.exports = router;
