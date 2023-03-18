const {
  getProduct,
  // getProductsFiltered,
  getCategoryFiltered,
  createProduct,
  editProduct,
  deleteProduct,
  getProductById,
  createReview,
  getAllProducts,
  getSales,
} = require("../services/productServices");

const { Product } = require("../models/Product");

// get product

const getProductController = async (req, res) => {
  const { productName } = req.query;
  try {
    const savedProduct = await getProduct(productName);
    res.status(200).send(savedProduct);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

// get filter products

// const getProductsFilteredController = async (req, res) => {
//   const { filterBy, categoryValue } = req.query;
//   try {
//     const productsFiltered = await getProductsFiltered(filterBy, categoryValue);
//     res.status(200).send(productsFiltered);
//   } catch (error) {
//     console.log(error);
//     res.status(500).send(error);
//   }
// };

// get category filter combined

const getCategoryFilterController = async (req, res) => {
  const { categoryValue, filterBy, name } = req.query;

  try {
    const productsFiltered = await getCategoryFiltered(
      categoryValue,
      filterBy,
      name
    );
    res.status(200).send(productsFiltered);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

// create product

const createProductController = async (req, res) => {
  const { name, price, image, details, stock, category } = req.body;
  try {
    if (name && price && image && details && stock && category) {
      const savedProduct = await createProduct(
        name,
        price,
        image,
        details,
        stock,
        category
      );
      res.status(201).send(savedProduct);
    } else {
      res.status(404).send("Missing data");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

// edit product

const editProductController = async (req, res) => {
  const { product, productImage } = req.body;
  const { productId } = req.params;
  try {
    if (productId && product) {
      const updatedProduct = await editProduct(
        productImage,
        productId,
        product
      );
      res.send(updatedProduct);
    } else {
      res.status(500).send("Missing data");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

// delete product

const deleteProductController = async (req, res) => {
  const { id } = req.params;

  try {
    const savedProduct = await deleteProduct(id);
    res.status(200).send(savedProduct);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

// get product by id

const getProductByIdController = async (req, res) => {
  const { productId } = req.params;

  try {
    const product = await getProductById(productId);
    res.status(200).send(product);
  } catch (error) {
    res.status(400).send(error);
  }
};

const createProductReviewController = async (req, res) => {
  const { rating, comment, name } = req.body;
  const { id } = req.params;
  try {
    createReview(rating, comment, id, name);
    res.status(201).json({ message: "Review added" });
  } catch {
    res.status(404).send("Product not found");
  }
};

const getAllProductsController = async (req, res) => {
  try {
    const products = await getAllProducts();
    res.send(products);
  } catch (error) {
    res.status(400).sed(error);
  }
};

const getSalesProductsController = async (req, res) => {
  try {
    const products = await getSales();
    res.send(products);
  } catch (error) {
    console.log(error);
    res.status(404).send("Product not found");
  }
};

module.exports = {
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
};
