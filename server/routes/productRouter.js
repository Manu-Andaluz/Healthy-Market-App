const productRouter = require("express").Router();
const {
  getProductController,
  // getProductsFilteredController,
  getCategoryFilterController,
  createProductController,
  editProductController,
  deleteProductController,
  getProductByIdController,
  createProductReviewController,
  getAllProductsController,
  getSalesProductsController,
} = require("../controllers/productController.js");
const { isAdmin, isUser } = require("../middleware/auth.js");

// GET ALL PRODUCTS

productRouter.get("/", getProductController);

// FILTER PRODUCTS

// productRouter.get("/filterBy", getProductsFilteredController);

// FILER PRODUCTS BY CATEORY AND FILERBY

productRouter.get("/category", getCategoryFilterController);

// PRODUCTS ON SALE

productRouter.get("/saleProducts", getSalesProductsController);

// FILER PRODUCTS BY CATEORY AND FILERBY

productRouter.get("/productList", isAdmin, getAllProductsController);

// CREATE PRODUCT

productRouter.post("/", isAdmin, createProductController);

// EDIT PRODUCT

productRouter.put("/editProduct/:productId", isAdmin, editProductController);

// DELETE PRODUCT

productRouter.delete("/:id", isAdmin, deleteProductController);

// GET BY ID

productRouter.get("/getProductById/:productId", getProductByIdController);

// CREATE REVIEW
productRouter.post("/reviews/:id", createProductReviewController);

module.exports = productRouter;
