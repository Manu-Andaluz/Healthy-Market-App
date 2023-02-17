const productRouter = require("express").Router();
const { getProductController, createProductController, editProductController, deleteProductController } = require('../controllers/productController.js')

// GET ALL PRODUCTS

productRouter.get("/", getProductController);

// CREATE PRODUCT

productRouter.post("/", createProductController);

// EDIT PRODUCT

productRouter.put("/editProduct/:productId", editProductController);

// DELETE PRODUCT

productRouter.delete("/:id", deleteProductController);

module.exports = productRouter;