const { Router } = require("express");
const { usersCountroller } = require("../controllers/userController");

const userRouter = Router();

userRouter.get("/", usersCountroller);

module.exports = userRouter;
