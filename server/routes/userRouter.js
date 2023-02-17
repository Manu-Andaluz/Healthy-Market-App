const { Router } = require("express");
const {
  getUsersController,
  postUsersController,
} = require("../controllers/userController");

const userRouter = Router();

userRouter.get("/", getUsersController);
userRouter.post("/", postUsersController);

module.exports = userRouter;
