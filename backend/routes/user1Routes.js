const express = require("express");

const { getuser1 } = require("../controllers/userController");

const router = express.Router();

router.get("/getuser1", getuser1);

module.exports = router;
