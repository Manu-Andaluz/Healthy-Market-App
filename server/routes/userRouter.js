const { Router } = require("express");
const {
  getUsersController,
  registerController,
  loginController,
  RegisterGoogle,
  createUserController,
  deleteUserController,
  fireBaseController,
  userStatsController,
} = require("../controllers/userController");

const userRouter = Router();

userRouter.get("/", getUsersController);
userRouter.get("/stats", userStatsController);
userRouter.post("/register", registerController);
userRouter.post("/createUser", createUserController);
userRouter.post("/loggin", loginController);
userRouter.post("/google", fireBaseController);
userRouter.delete("/:userId", deleteUserController);

module.exports = userRouter;
