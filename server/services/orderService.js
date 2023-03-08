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

const createOrder = async (cart, userName, userEmail) => {
  const itemArray = await cart.map((product) => {
    return {
      id: product._id,
      title: product.name,
      currency_id: "ARS",
      picture_url: product.image.url,
      description: product.details,
      category_id: product.category,
      quantity: product.cartQuantity,
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

  return mercadopago.preferences.create(preference).then((response) => {
    const products = response.body.items.map((product) => ({
      productId: product.id,
      quantity: product.quantity,
    }));
    const data = response.body.items.map(
      (product) => product.unit_price * product.quantity
    );
    const initialValue = 0;
    const sumWithInitial = data.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue
    );

    const order = new Order({
      products: products,
      userId: userEmail,
      shipping: {
        userName,
        userEmail,
      },
      subTotal: total,
      total: sumWithInitial,
    });

    order.save();

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

const deleteOrder = async (orderId) => {
  const deleteOrder = await Order.findByIdAndDelete(orderId);
  if (deleteOrder) {
    return deleteOrder;
  }
};

module.exports = {
  getAllOrders,
  createOrder,
  getOrderIncome,
  getAllTimeOrder,
  deleteOrder,
};
