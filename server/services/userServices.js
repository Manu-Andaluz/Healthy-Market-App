const { User } = require("../models/User");

const getAllUsers = async () => {
  const user = await User.find();
  return user;
};

module.exports = { getAllUsers };
