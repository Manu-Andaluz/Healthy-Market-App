const { Product } = require("../models/Product.js");

// get product

const getProduct = async (name) => {
    let products;

    if (name) {
        products = await Product.find({
            name: name,
        });
    } else {
        products = await Product.find();
    }

    return products
}

// create product

const createProduct = async (name, price, image, details, stock, category, companyOwner) => {

    if (name && price && image && details && stock && category && companyOwner) {
        const newProduct = new Product({
            name,
            category,
            details,
            price,
            stock,
            image,
            companyOwner
        })

        const savedProduct = await newProduct.save();

        return savedProduct
    }

    else {
        return 'Missing data'
    }
};

// edit product

const editProduct = async (productImage, productId, product) => {
    if (productImage) {
        const destroyResponse = await cloudinary.uploader.destroy(
            product.image.public_id
        )

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
                        }
                    }, { new: true }
                )
                return updatedProduct
            }
        }

    }

    else {
        const updatedProduct = await Product.findByIdAndUpdate(
            productId,
            {
                $set: {
                    ...product,
                }
            }, { new: true }
        )
        return updatedProduct
    }
}

// delete product

const deleteProduct = async (productId) => {
    const product = await Product.findById(productId);

    if (!product) return "Product not found... "

    if (product.image.public_id) {
        const destroyResponse = await cloudinary.uploader.destroy(
            product.image.public_id
        );
        if (destroyResponse) {
            const deletedProduct = await Product.findByIdAndDelete(productId);

            return deletedProduct
        }
    } else {
        console.log("Action terminated. Failed to deleted product image ... ");
    }
}

module.exports = { getProduct, createProduct, editProduct, deleteProduct };