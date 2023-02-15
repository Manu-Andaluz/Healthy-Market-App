const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
    {
        userId: { type: String, required: true },
        products: [
            { productId: { type: String, required: true }, quantity: { type: Number, default: 1 } },
        ],
        total: { type: Number, required: true },
        quantity: { type: Number }
    }
);

const Cart = mongoose.model("Cart", cartSchema);

exports.Cart = Cart;