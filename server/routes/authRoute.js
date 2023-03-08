const generateAuthToken = require("./../utils/generateAuthToken");
const { Router } = require("express");
const { isUserAuthenticate } = require("./../middleware/auth");
const { welcome } = require("./../services/mail");
const authRoute = Router();

authRoute.get("/user", isUserAuthenticate, (req, res, next) => {
  res.header(
    "Access-Control-Allow-Origin",
    "https://healthy-market-app.vercel.app"
  );
  res.header("Access-Control-Allow-Credentials", true);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  try {
    const user = req.user;
    welcome(user.email);
    const token = generateAuthToken(req.user);
    res.json(token);
  } catch (error) {
    res.send(error.message);
  }
});

module.exports = authRoute;
