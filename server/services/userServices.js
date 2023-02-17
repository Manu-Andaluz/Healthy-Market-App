const { User } = require("../models/User");

const getAllUsers = async () => {
  const user = await User.find();
  return user;
};

const createUser = async (
  name,
  surname,
  birthday,
  age,
  nationality,
  adress,
  email,
  password
) => {
  if (
    !name ||
    !surname ||
    !birthday ||
    !age ||
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
    age,
    nationality,
    adress,
    email,
    password,
  });

  await user.save();
  return "User has been created!";
};

module.exports = { getAllUsers, createUser };
