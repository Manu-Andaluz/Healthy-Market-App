const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema(
  {
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    name: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

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
  },
  image: {
    type: Object,
    require: true,
  },
  details: {
    type: String,
    require: true,
  },
  stock: {
    type: Number,
    require: true,
  },
  category: {
    type: String,
    require: true,
  },
  isAvaliable: {
    type: Boolean,
    default: true,
  },
  reviews: [reviewSchema],
  rating: {
    type: Number,
    required: true,
    default: 0,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = { Product };
