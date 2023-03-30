const orderRoute = require("express").Router();
const {
  createOrderController,
  getAllOrderController,
  getOrderIncomeController,
  getAllTimeOrderController,
  getWeekIncomeController,
  deleteOrderController,
  successOrderController
} = require("../controllers/orderController.js");
const { isAdmin, isUser } = require("../middleware/auth.js");

// GET ALL ORDERS

orderRoute.get("/", isAdmin, getAllOrderController);

// GET ORDERS LAST MONTH

orderRoute.get("/income", isAdmin, getOrderIncomeController);

orderRoute.get("/weekIncome", isAdmin, getWeekIncomeController);

// GET ORDERS ALL TIME

orderRoute.get("/allTimeIncome", isAdmin, getAllTimeOrderController);

orderRoute.post('/orderSuccess', successOrderController)

// CREATE ORDER ( MERCADO PAGO )

orderRoute.post("/mercadoPago", createOrderController);


orderRoute.delete("/:orderId", isAdmin, deleteOrderController);

module.exports = orderRoute;
