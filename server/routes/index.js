const { Router } = require("express");
const userRouter = require("./userRouter");
const productRouter = require("./productRouter");
const companyRouter = require("./companyRouter");
const oderRouter = require("./orderRouter");

const mainRouter = Router();

mainRouter.use("/users", userRouter);
mainRouter.use("/products", productRouter);
mainRouter.use("/companies", companyRouter);
mainRouter.use("/order", oderRouter);

module.exports = mainRouter;
