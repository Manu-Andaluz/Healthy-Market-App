const { Product } = require("../models/Product.js");
const cloudinary = require("../utils/cloudinarySetup.js");

// get product

const getProduct = async (name) => {
  let allData = await Product.find({ isAvaliable: true });

  if (name) {
    const products = allData.filter((a) =>
      a.name.toLowerCase().includes(name.toLowerCase())
    ); // I bring everything that matches
    if (products.length > 0) {
      return products;
    } else {
      return [];
    }
  }

  return allData;
};

const getCategoryFiltered = async (categoryValue, filterBy, name) => {
  let allProduct = await Product.find({ isAvaliable: true });
  if (categoryValue !== "categoria") {
    allProduct = allProduct.filter(
      (product) => product.category.toLowerCase() == categoryValue.toLowerCase()
    );
    if (name) {
      allProduct = allProduct.filter((a) =>
        a.name.toLowerCase().includes(name.toLowerCase())
      );
    }
  }

  switch (filterBy) {
    case "alfabetic-A-Z": {
      const products = allProduct.sort((a, b) => a.name.localeCompare(b.name));
      if (name) {
        const productFilterByName = products.filter((a) =>
          a.name.toLowerCase().includes(name.toLowerCase())
        );
        return productFilterByName;
      }
      return products;
    }
    case "alfabetic-Z-A": {
      const products = allProduct.sort((a, b) => b.name.localeCompare(a.name));
      if (name) {
        const productFilterByName = products.filter((a) =>
          a.name.toLowerCase().includes(name.toLowerCase())
        );
        return productFilterByName;
      }
      return products;
    }
    case "cheapper-products": {
      const products = allProduct.sort(
        (a, b) =>
          (a.discountPrice ? a.discountPrice : a.price) -
          (b.discountPrice ? b.discountPrice : b.price)
      );
      if (name) {
        const productFilterByName = products.filter((a) =>
          a.name.toLowerCase().includes(name.toLowerCase())
        );
        return productFilterByName;
      }
      return products;
    }
    case "expensive-products": {
      const products = allProduct.sort(
        (a, b) =>
          (b.discountPrice ? b.discountPrice : b.price) -
          (a.discountPrice ? a.discountPrice : a.price)
      );
      if (name) {
        const productFilterByName = products.filter((a) =>
          a.name.toLowerCase().includes(name.toLowerCase())
        );
        return productFilterByName;
      }
      return products;
    }
    case "sales": {
      let salesProducts = await Product.find({
        discountPrice: { $exists: true },
      });

      if (categoryValue !== "categoria") {
        salesProducts = salesProducts.filter(
          (product) =>
            product.category.toLowerCase() == categoryValue.toLowerCase()
        );
      }
      if (name) {
        const productFilterByName = salesProducts.filter((a) =>
          a.name.toLowerCase().includes(name.toLowerCase())
        );
        return productFilterByName;
      }

      return salesProducts;
    }
    default: {
      if (name) {
        const productFilterByName = allProduct.filter((a) =>
          a.name.toLowerCase().includes(name.toLowerCase())
        );
        return productFilterByName;
      }
      return allProduct;
    }
  }
};

// create product

const createProduct = async (name, price, image, details, stock, category) => {
  if (name && price && image && details && stock && category) {
    const uploadedResponse = await cloudinary.uploader.upload(image, {
      upload_preset: "healthy-market",
    });

    const newProduct = new Product({
      name,
      category,
      details,
      price,
      stock,
      image: uploadedResponse,
    });

    const savedProduct = await newProduct.save();

    return savedProduct;
  } else {
    return "Missing data";
  }
};

// edit product

const editProduct = async (productImage, productId, product) => {
  if (productImage) {
    const destroyResponse = await cloudinary.uploader.destroy(
      product.image.public_id
    );

    const uploadedResponse = await cloudinary.uploader.upload(productImage, {
      upload_preset: "healthy-market",
    });

    if (uploadedResponse) {
      const updatedProduct = await Product.findByIdAndUpdate(
        productId,
        {
          $set: {
            ...product,
            image: uploadedResponse,
          },
        },
        { new: true }
      );
      return updatedProduct;
    }
  } else {
    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      {
        $set: {
          ...product,
        },
      },
      { new: true }
    );
    return updatedProduct;
  }
};

// delete product

const deleteProduct = async (productId) => {
  const product = await Product.findById(productId);

  if (!product) return "Product not found... ";

  if (product.image.public_id) {
    const destroyResponse = await cloudinary.uploader.destroy(
      product.image.public_id
    );
    if (destroyResponse) {
      const deletedProduct = await Product.findByIdAndDelete(productId);

      return deletedProduct;
    }
  }
};

// get by id

const getProductById = async (id) => {
  const product = await Product.findById(id);
  return product;
};

// create review
const createReview = async (rating, comment, id, name) => {
  const product = await Product.findById(id);

  if (product) {
    const review = {
      rating: Number(rating),
      comment,
      name,
    };

    product.reviews.push(review);

    product.rating =
      product.reviews.reduce((acc, item) => item.rating + acc, 0) /
      product.reviews.length;

    await product.save();
  }
};

const getAllProducts = async () => {
  const allData = await Product.find();
  return allData;
};

const getSales = async () => {
  const salesProducts = await Product.find({
    discountPrice: { $gt: 0 },
  });
  return salesProducts;
};

module.exports = {
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
};
