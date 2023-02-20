const { Router } = require("express");
const userRouter = require("./userRouter");
const productRouter = require('./productRouter')
const companyRouter = require('./companyRouter')

const mainRouter = Router();

mainRouter.use("/users", userRouter);
mainRouter.use("/products", productRouter);
mainRouter.use("/companies", companyRouter);


module.exports = mainRouter;
