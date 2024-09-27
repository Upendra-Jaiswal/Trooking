const express = require("express");

const { getusers, checktoken } = require("../controllers/userController");
const { protect, admin } = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/getusers", getusers);
router.get("/gettoken", checktoken);

module.exports = router;
