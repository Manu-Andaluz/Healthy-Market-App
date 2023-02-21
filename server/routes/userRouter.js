const { Router } = require("express");
const {
  getUsersController,
  registerController,
  loginController,
} = require("../controllers/userController");

const userRouter = Router();

userRouter.get("/", getUsersController);
userRouter.post("/register", registerController);
userRouter.post("/loggin", loginController);

module.exports = userRouter;
