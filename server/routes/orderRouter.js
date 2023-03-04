const oderRouter = require("express").Router();
const {
  createOrderController,
  getAllOrderController,
  getOrderIncomeController,
  getAllTimeOrderController,
} = require("../controllers/orderController.js");

// GET ALL ORDERS

oderRouter.get("/", getAllOrderController);

// GET ORDERS LAST MONTH

oderRouter.get("/income", getOrderIncomeController);

// GET ORDERS ALL TIME

oderRouter.get("/allTimeIncome", getAllTimeOrderController);

// CREATE ORDER ( MERCADO PAGO )

oderRouter.post("/", createOrderController);

module.exports = oderRouter;
