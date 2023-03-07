const { Router } = require("express");
const { session } = require("passport");
const passport = require("passport");
const {
  getUsersController,
  registerController,
  loginController,
  RegisterGoogle,
  createUserController,
  deleteUserController,
} = require("../controllers/userController");
const { isUserAuthenticate } = require("./../middleware/auth");
const moment = require("moment");
const { User } = require("../models/User");

const userRouter = Router();

const failureRedirectVercel =
  "https://healthy-market-app-production.up.railway.app/users/google/error";

userRouter.get("/", getUsersController);
userRouter.post("/register", registerController);
userRouter.post("/createUser", createUserController);
userRouter.post("/loggin", loginController);
userRouter.get("/google", passport.authenticate("google"));
userRouter.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: failureRedirectVercel,
  }),
  RegisterGoogle
);

userRouter.delete("/:userId", deleteUserController);

module.exports = userRouter;
