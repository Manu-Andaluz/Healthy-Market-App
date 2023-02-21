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

  return { message: "User has been created!", accessToken: token, user: user };
};

const loginUser = async (email, password) => {
  const user = await User.findOne({ email });

  if (!user) {
    return "User is not registered";
  }

  const validatePassword = await bcrypt.compare(password, user.password);

  if (!validatePassword) {
    return "User or Password is incorrect";
  }

  const token = generateAuthToken(user);

  return { message: "User has been logged!", accessToken: token, user: user };
};

module.exports = { getAllUsers, createUser, loginUser };
