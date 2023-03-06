const {
  getAllUsers,
  createUser,
  loginUser,
  findByEmail,
  deleteUser,
} = require("../services/userServices");
const boom = require("@hapi/boom");
const generateAuthToken = require("../utils/generateAuthToken");

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
    res.status(200).send(message);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const loginController = async (req, res) => {
  const { email, password } = req.body;
  try {
    const token = await loginUser(email, password);
    console.log(token);
    res.status(200).send(token);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const RegisterGoogle = async (req, res, next) => {
  try {
    const user = req.user;
    const validateUser = await findByEmail(user._json.email);
    if (validateUser) {
      const token = generateAuthToken(validateUser);
      console.log({ token, message: "Estas en la ruta login" });
      return res.status(200).send(token);
    }

    const userSchema = {
      name: user.name.givenName,
      surname: user._json.family_name,
      nationality: user._json.locale,
      email: user._json.email,
      id_google: user.id,
    };

    const newUser = new User(userSchema);
    await newUser.save();

    const token = generateAuthToken(newUser);
    res.status(200).json(token);
  } catch (error) {
    res.json(error.message);
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

module.exports = {
  getUsersController,
  registerController,
  loginController,
  RegisterGoogle,
  deleteUserController,
};
