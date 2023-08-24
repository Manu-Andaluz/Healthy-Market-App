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
const { isAdmin, isUser } = require("../middleware/auth.js");

const userRouter = Router();

userRouter.get("/", getUsersController);
userRouter.get("/stats", isAdmin, userStatsController);
userRouter.post("/register", registerController);
userRouter.post("/createUser", isAdmin, createUserController);
userRouter.post("/loggin", loginController);
userRouter.post("/google", fireBaseController);
userRouter.delete("/:userId", isAdmin, deleteUserController);

module.exports = userRouter;
