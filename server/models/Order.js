const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    userId: { type: String },
    products: [
      {
        productId: { type: String },
        quantity: { type: Number },
      },
    ],
    total: { type: Number, required: true },
    subTotal: { type: Number, required: true },
    status: { type: String },
    shipping: { type: Object, required: true },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

exports.Order = Order;
