const generateAuthToken = require('./../utils/generateAuthToken')
const { Router } = require("express");
const {isUserAuthenticate} = require('./../middleware/auth')

const authRoute = Router();

authRoute.get("/user", isUserAuthenticate, (req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  try {
    const token = generateAuthToken(req.user);
    res.json(token);
  } catch (error) {
    res.send(error.message)
  }
});

  module.exports = authRoute;