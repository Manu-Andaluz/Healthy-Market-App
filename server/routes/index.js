const { Router } = require("express");
const userRouter = require("./userRouter");
const productRouter = require('./productRouter')

const mainRouter = Router();

mainRouter.use("/users", userRouter);
mainRouter.use("/products", productRouter);

module.exports = mainRouter;
