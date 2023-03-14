const oderRouter = require("express").Router();
const {
  createOrderController,
  getAllOrderController,
  getOrderIncomeController,
  getAllTimeOrderController,
  deleteOrderController,
} = require("../controllers/orderController.js");
const { isAdmin, isUser } = require("../middleware/auth.js");

// GET ALL ORDERS

oderRouter.get("/", isAdmin, getAllOrderController);

// GET ORDERS LAST MONTH

oderRouter.get("/income", isAdmin, getOrderIncomeController);

// GET ORDERS ALL TIME

oderRouter.get("/allTimeIncome", isAdmin, getAllTimeOrderController);

// CREATE ORDER ( MERCADO PAGO )

oderRouter.post("/", createOrderController);

oderRouter.delete("/:orderId", isAdmin, deleteOrderController);

module.exports = oderRouter;
