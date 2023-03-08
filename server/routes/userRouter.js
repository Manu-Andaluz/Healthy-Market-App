const { Router } = require("express");
const {
  getUsersController,
  registerController,
  loginController,
  RegisterGoogle,
  createUserController,
  deleteUserController,
  fireBaseController,
} = require("../controllers/userController");
const { User } = require("../models/User");

const userRouter = Router();

userRouter.get("/", getUsersController);
userRouter.post("/register", registerController);
userRouter.post("/createUser", createUserController);
userRouter.post("/loggin", loginController);
userRouter.post("/google", fireBaseController);

userRouter.delete("/:userId", deleteUserController);

module.exports = userRouter;
