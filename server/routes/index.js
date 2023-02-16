const { Router } = require("express");
const userRouter = require("./userRouter");

const mainRouter = Router();

mainRouter.use("/users", userRouter);

module.exports = mainRouter;
