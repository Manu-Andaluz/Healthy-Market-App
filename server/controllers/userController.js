const { getAllUsers, createUser } = require("../services/userServices");

const getUsersController = async (req, res) => {
  try {
    const user = await getAllUsers();
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const postUsersController = async (req, res) => {
  const { name, surname, birthday, age, nationality, adress, email, password } =
    req.body;
  try {
    const message = await createUser(
      name,
      surname,
      birthday,
      age,
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

module.exports = { getUsersController, postUsersController };
