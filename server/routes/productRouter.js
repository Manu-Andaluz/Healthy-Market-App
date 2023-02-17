const productRouter = require("express").Router();
const {
  getProductController,
  getProductsFilteredController,
  createProductController,
  editProductController,
  deleteProductController,
} = require("../controllers/productController.js");

// GET ALL PRODUCTS

productRouter.get("/", getProductController);

// FILTER PRODUCTS

productRouter.get("/filterby", getProductsFilteredController);

// CREATE PRODUCT

productRouter.post("/", createProductController);

// EDIT PRODUCT

productRouter.put("/editProduct/:productId", editProductController);

// DELETE PRODUCT

productRouter.delete("/:id", deleteProductController);

module.exports = productRouter;
