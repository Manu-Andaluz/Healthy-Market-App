const { User } = require("../models/User");
const bcrypt = require("bcrypt");
const generateAuthToken = require("../utils/generateAuthToken");
const { collection, addDoc, db } = require("../utils/firebase");
const moment = require("moment");

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

const loginUser = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("User is not registered");
  }
  var validatePassword = await bcrypt.compare(password, user.password);

  if (!validatePassword) {
    throw new Error("User or Password is incorrect");
  }

  const token = generateAuthToken(user);
  return token;
};

const findByEmail = async (email) => {
  const rta = await User.findOne({ email });
  return rta;
};

const createUserAdmin = async (name, surname, nationality, email) => {
  if (!name || !surname || !nationality || !email) {
    throw new Error("Missing data");
  }

  let user = await User.findOne({ email: email });
  if (user) throw new Error("User already exists...");
  user = new User({
    name,
    surname,
    nationality,
    email,
  });

  await user.save();

  return user;
};

const deleteUser = async (userId) => {
  const deletedUser = await User.findByIdAndDelete(userId);

  if (deletedUser) {
    return deletedUser;
  }
};

const fireBase = async (name, email, id) => {
  let mongoUser = await User.findOne({ email: email });
  if (!mongoUser) {
    const fullName = name.split(" ");
    const user = await addDoc(collection(db, "users"), {
      id,
      name: fullName[0],
      surname: fullName[1],
      email,
    });
    const newUser = new User({
      name: fullName[0],
      surname: fullName[1],
      nationality: "es",
      email,
    });
    await newUser.save();
    return user;
  }
};

const userStats = async () => {
  const previusMonth = moment()
    .month(moment().month())
    .set("date", 1)
    .format("YYYY-MM-DD HH:mm:ss");

  const users = await User.aggregate([
    {
      $match: { createdAt: { $gte: new Date(previusMonth) } },
    },
  ]);

  return users;
};

module.exports = {
  getAllUsers,
  createUser,
  loginUser,
  findByEmail,
  createUserAdmin,
  deleteUser,
  fireBase,
  userStats,
};
