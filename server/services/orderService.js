const { Order } = require("../models/Order.js");
const moment = require("moment");
// SDK de Mercado Pago
const mercadopago = require("mercadopago");
const dotenv = require("dotenv");
dotenv.config();
// Agrega credenciales
mercadopago.configure({
  access_token: process.env.ACCESS_TOKEN,
});

const getAllOrders = async () => {
  const orders = await Order.find();
  return orders;
};

const createOrder = async (allProducts) => {
  const itemArray = await allProducts.map((product) => {
    return {
      id: product._id,
      title: product.name,
      currency_id: "ARS",
      picture_url: product.image.url,
      description: product.details,
      category_id: product.category,
      quantity: 1,
      unit_price: product.price,
    };
  });

  let preference = {
    items: itemArray,
    back_urls: {
      success: "https://healthy-market-app.vercel.app/home",
      failure: "https://healthy-market-app.vercel.app/cart",
      pending: "",
    },
    auto_return: "approved",
    binary_mode: true,
  };

  mercadopago.preferences.create(preference).then((response) => {
    return { response };
  });
};

const getOrderIncome = async () => {
  const previusMonth = moment()
    .month(moment().month() - 1)
    .set("date", 1)
    .format("YYYY-MM-DD HH:mm:ss");

  const orders = await Order.aggregate([
    {
      $match: { createdAt: { $gte: new Date(previusMonth) } },
    },
    {
      $project: {
        month: { $month: "$createdAt" },
        sales: "$total",
      },
    },
    {
      $group: {
        _id: "$month",
        total: { $sum: "$sales" },
      },
    },
  ]);
  return orders;
};

const getAllTimeOrder = async () => {
  const orders = await Order.aggregate([
    {
      $project: {
        sales: "$total",
      },
    },
    {
      $group: {
        _id: "$month",
        total: { $sum: "$sales" },
      },
    },
  ]);
  return orders;
};

module.exports = { getAllOrders, createOrder, getOrderIncome, getAllTimeOrder };
