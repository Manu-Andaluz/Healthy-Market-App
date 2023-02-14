const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
        require: true,
    },
    discountPrice: {
        type: Number,
        require: true,
    },
    image: {
        type: String,
        require: true,
    },
    details: {
        type: String,
        require: true
    },
    stock: {
        type: Number,
        require: true,
    },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;