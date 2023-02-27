const productRouter = require("express").Router();
const {
  getProductController,
  getProductsFilteredController,
  getCategoryFilterController,
  createProductController,
  editProductController,
  deleteProductController,
  getProductByIdController,
} = require("../controllers/productController.js");
const { isAdmin } = require("../middleware/auth.js");

// GET ALL PRODUCTS

productRouter.get("/", getProductController);

// FILTER PRODUCTS

productRouter.get("/filterBy", getProductsFilteredController);

// FILER PRODUCTS BY CATEORY AND FILERBY

productRouter.get("/category", getCategoryFilterController);

// CREATE PRODUCT

productRouter.post("/", createProductController);

// EDIT PRODUCT

productRouter.put("/editProduct/:productId", editProductController);

// DELETE PRODUCT

productRouter.delete("/:id", deleteProductController);

// GET BY ID

productRouter.get("/getProductById/:productId", getProductByIdController);

module.exports = productRouter;
