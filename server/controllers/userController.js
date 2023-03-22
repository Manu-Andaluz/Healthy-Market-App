const {
  getAllUsers,
  createUser,
  loginUser,
  findByEmail,
  createUserAdmin,
  deleteUser,
  fireBase,
  userStats,
} = require("../services/userServices");
const boom = require("@hapi/boom");
const generateAuthToken = require("../utils/generateAuthToken");
const { welcomeUser, welcome } = require("../services/mail");

const { User } = require("./../models/User");

const AuthService = require("./../services/authService");

const service = new AuthService();

const getUsersController = async (req, res) => {
  try {
    const user = await getAllUsers();
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const registerController = async (req, res) => {
  const {
    name,
    surname,
    birthday,
    nationality,
    adress,
    email,
    password,
    id_google,
  } = req.body;
  try {
    const message = await createUser(
      name,
      surname,
      birthday,
      nationality,
      adress,
      email,
      password,
      id_google
    );
    welcome(email);
    res.status(200).send(message);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const loginController = async (req, res) => {
  const { email, password } = req.body;
  try {
    const token = await loginUser(email, password);
    welcome(email);
    res.status(200).send(token);
  } catch (error) {
    console.log(error.message);
    res.status(400).json(error);
  }
};

const RegisterGoogle = async (req, res, next) => {
  try {
    req.user = req.user;
    res.redirect("https://healthy-market-app.vercel.app/loginSuccess");
  } catch (error) {
    res.json(error.message);
  }
};

const createUserController = async (req, res) => {
  const { name, surname, nationality, email } = req.body;
  try {
    const user = await createUserAdmin(name, surname, nationality, email);
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const deleteUserController = async (req, res) => {
  const { userId } = req.params;
  try {
    const deletedUser = await deleteUser(userId);
    res.status(200).send(deletedUser);
  } catch (error) {
    res.status(500).send(error);
  }
};

const fireBaseController = async (req, res) => {
  const user = req.body;
  try {
    const newUser = await fireBase(user.displayName, user.email, user.uid);
    res.status(200).send(newUser);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

const userStatsController = async (req, res) => {
  try {
    const stats = await userStats();
    res.send(stats);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = {
  getUsersController,
  registerController,
  loginController,
  RegisterGoogle,
  createUserController,
  deleteUserController,
  fireBaseController,
  userStatsController,
};
