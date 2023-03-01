const {
  getAllUsers,
  createUser,
  loginUser,
} = require("../services/userServices");

const {User} = require('./../models/User');

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
  try {
    const user = req.user;
    const userSing = service.singToken(user);
    res.status(200).json(userSing);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const loginGoogle = async (req, res, next) => {
  try {
    const user = req.user;
    const userSchema = {
      name: user.name.givenName,
      surname: user._json.family_name,
      nationality: user._json.locale,
      email: user._json.email,
      id_google: user.id,
    };
    
    const newUser = new User(userSchema);
    await newUser.save();
    res.json(newUser)
  } catch (error) {
    res.json(error.message);
  }
};

module.exports = {
  getUsersController,
  registerController,
  loginController,
  loginGoogle,
};
