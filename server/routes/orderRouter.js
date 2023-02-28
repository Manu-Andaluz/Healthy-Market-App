const oderRouter = require("express").Router();
const { createOrder } = require("../controllers/orderController.js");

// GET ALL COMPANIES

oderRouter.post("/", createOrder);

module.exports = oderRouter;
