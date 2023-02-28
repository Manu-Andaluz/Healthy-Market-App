const { Product } = require("../models/Product.js");
const cloudinary = require("../utils/cloudinarySetup.js");

// get product

const getProduct = async (name) => {
  let allData = await Product.find();

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

// filter

// const getProductsFiltered = async (filterBy, categoryValue) => {
//   const allProduct = await Product.find();
//   console.log("aca")
//   switch (filterBy) {
//     case "alfabetic-A-Z": {
//       const products = allProduct.sort((a, b) => a.name.localeCompare(b.name));
//       return products;
//     }
//     case "alfabetic-Z-A": {
//       const products = allProduct.sort((a, b) => b.name.localeCompare(a.name));
//       return products;
//     }
//     case "cheapper-products": {
//       const products = allProduct.sort((a, b) => a.price - b.price);
//       return products;
//     }
//     case "expensive-products": {
//       const products = allProduct.sort((a, b) => b.price - a.price);
//       return products;
//     }
//     default: {
//       return "Invalid Filter";
//     }
//   }
// };

// combined filter - Category and Filterby

const getCategoryFiltered = async (categoryValue, filterBy) => {
  let allProduct = await Product.find();
  if(categoryValue !== "categoria") {
    allProduct = allProduct.filter(
      (product) => product.category.toLowerCase() == categoryValue.toLowerCase()
    );
  }
  

  switch (filterBy) {
    case "alfabetic-A-Z": {
      const products = allProduct.sort((a, b) => a.name.localeCompare(b.name));
      return products;
    }
    case "alfabetic-Z-A": {
      const products = allProduct.sort((a, b) => b.name.localeCompare(a.name));
      return products;
    }
    case "cheapper-products": {
      const products = allProduct.sort((a, b) => a.price - b.price);
      return products;
    }
    case "expensive-products": {
      const products = allProduct.sort((a, b) => b.price - a.price);
      return products;
    }
    default: {
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

    if (destroyResponse) {
      const uploadedResponse = await cloudinary.uploader.upload(productImage, {
        upload_preset: "online-shop",
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
  } else {
    console.log("Action terminated. Failed to deleted product image ... ");
  }
};

// get by id

const getProductById = async (id) => {
  const product = await Product.findById(id);
  return product;
};

// create review
const createReview = async (rating, comment, id) => {

  const product = await Product.findById(id)
  if (product) {

    const review = {
      rating: Number(rating),
      comment,
    }

    product.reviews.push(review)


    product.rating =
      product.reviews.reduce((acc, item) => item.rating + acc, 0) /
      product.reviews.length

    await product.save()

  }
}
module.exports = {
  getProduct,
  // getProductsFiltered,
  getCategoryFiltered,
  createProduct,
  editProduct,
  deleteProduct,
  getProductById,
  createReview,
};
