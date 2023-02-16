const { getAllUsers } = require("../services/userServices");

const usersCountroller = async (req, res) => {
  try {
    const user = getAllUsers();
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = { usersCountroller };
