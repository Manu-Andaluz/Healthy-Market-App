const { User } = require("../models/User");
const bcrypt = require("bcrypt");
const generateAuthToken = require("../utils/generateAuthToken");

const getAllUsers = async () => {
  const user = await User.find();
  return user;
};

const createUser = async (
  name,
  surname,
  birthday,
  nationality,
  adress,
  email,
  password
) => {
  if (
    !name ||
    !surname ||
    !birthday ||
    !nationality ||
    !adress ||
    !email ||
    !password
  ) {
    throw new Error("Missing data");
  }

  let user = await User.findOne({ email: email });
  if (user) throw new Error("User already exists...");
  user = new User({
    name,
    surname,
    birthday,
    nationality,
    adress,
    email,
    password,
  });

  user.password = await bcrypt.hash(user.password, 10);

  await user.save();

  const token = generateAuthToken(user);

  user.password = null;

  return token;
};

const findByEmail = async (email) => {
  const rta = await User.findOne({
    email,
  });
  return rta;
};

module.exports = { getAllUsers, createUser, findByEmail };
