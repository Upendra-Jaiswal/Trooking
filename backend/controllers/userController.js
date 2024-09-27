const User = require("../models/userModel");

const getusers = async (req, res) => {
  try {
    const users = await User.find();
    return res.send(users);
  } catch (e) {
    res.status(500).send({ message: e.message });
  }
};

const getuser1 = async (req, res) => {
  try {
    //const {email} = req.body
    const user1 = await User.find();
    return res.send(user1);
  } catch (e) {
    res.status(500).send({ message: e.message });
  }
};

const checktoken = async (req, res) => {
  //res.send({"message:req.cookie"});
};

module.exports = { getusers, getuser1, checktoken };
