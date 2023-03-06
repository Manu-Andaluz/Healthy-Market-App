const {
  getAllUsers,
  createUser,
  loginUser,
  findByEmail,
  createUserAdmin,
  deleteUser,
} = require("../services/userServices");
const boom = require("@hapi/boom");
const generateAuthToken = require("../utils/generateAuthToken");
const { welcomeUser, welcome } = require("../services/mail");

const { User } = require("./../models/User");

const AuthService = require("./../services/authService");

const service = new AuthService();

const getUsersController = async (req, res) => {
  try {
    console.log(req.user);
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
    welcome(message.email);
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
    welcome(email);
    res.status(200).send(token);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const RegisterGoogle = async (req, res, next) => {
  try {
    const token = req.user;
    welcomeUser();
    res.redirect(`http://localhost:3000/home?token=${token}`);
  } catch (error) {
    res.json(error.message);
  }
};

/*const RegisterGoogle = async (req, res, next) => {
  try {
    const user = req.user;
    const validateUser = await findByEmail(user._json.email)
    if(user){
    const validateUser = await findByEmail(user._json.email);
    if (validateUser) {
      const token = generateAuthToken(validateUser);
      console.log({token, validateUser})
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
};*/

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

module.exports = {
  getUsersController,
  registerController,
  loginController,
  RegisterGoogle,
  createUserController,
  deleteUserController,
};
