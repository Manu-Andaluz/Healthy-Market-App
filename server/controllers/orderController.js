// SDK de Mercado Pago
const mercadopago = require("mercadopago");
const dotenv = require("dotenv");
const {
  getAllOrders,
  createOrder,
  getOrderIncome,
  getAllTimeOrder,
  deleteOrder,
} = require("../services/orderService");
dotenv.config();
// Agrega credenciales
mercadopago.configure({
  access_token: process.env.ACCESS_TOKEN,
});

const createOrderController = async (req, res) => {
  const allProducts = req.body;

  try {
    const newOrder = await createOrder(allProducts);
    res.send(newOrder);
  } catch (error) {
    res.status(400).send(error);
  }
};

const getAllOrderController = async (req, res) => {
  try {
    const allOrders = await getAllOrders();
    res.status(200).send(allOrders);
  } catch (error) {
    res.status(400).send(error);
  }
};

const getOrderIncomeController = async (req, res) => {
  try {
    const orders = await getOrderIncome();
    res.send(orders);
  } catch (error) {
    res.status(400).send(error);
  }
};

const getAllTimeOrderController = async (req, res) => {
  try {
    const orders = await getAllTimeOrder();
    res.send(orders);
  } catch (error) {
    res.status(400).send(error);
  }
};

const deleteOrderController = async (req, res) => {
  const { orderId } = req.params;
  try {
    const deletedOrder = await deleteOrder(orderId);
    res.status(200).send(deletedOrder);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

module.exports = {
  createOrderController,
  getAllOrderController,
  getOrderIncomeController,
  getAllTimeOrderController,
  deleteOrderController,
};
