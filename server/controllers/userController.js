const {
  getAllUsers,
  createUser,
  loginUser,
} = require("../services/userServices");

const getUsersController = async (req, res) => {
  try {
    const user = await getAllUsers();
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const registerController = async (req, res) => {
  const { name, surname, birthday, nationality, adress, email, password } =
    req.body;
  try {
    const message = await createUser(
      name,
      surname,
      birthday,
      nationality,
      adress,
      email,
      password
    );
    res.status(200).send(message);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const loginController = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await loginUser(email, password);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getUsersController, registerController, loginController };
