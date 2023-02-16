const { Product } = require("../models/Product.js");
const app = require("express").Router();

// Create Product
app.post("/", isAdmin, async (req, res) => {
    const { name, category, details, price, image } = req.body;

    try {
        const uploadedResponse = await cloudinary.uploader.upload(image, {
            upload_preset: "online-shop",
        });


        const product = new Product({
            name,
            category,
            details,
            price,
            image: uploadedResponse,
        })

        const savedProduct = await product.save();
        res.status(200).send(savedProduct);
    }

    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

//DELETE

app.delete("/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        if (!product) return res.status(404).send("Product not found... ");

        if (product.image.public_id) {
            const destroyResponse = await cloudinary.uploader.destroy(
                product.image.public_id
            );
            if (destroyResponse) {
                const deletedProduct = await Product.findByIdAndDelete(req.params.id);

                res.status(200).send(deletedProduct);
            }
        } else {
            console.log("Action terminated. Failed to deleted product image ... ");
        }
    } catch (error) {
        res.status(500).send(error);
    }
});

//GET ALL PRODUCTS

app.get("/", async (req, res) => {
    const name = req.query.brand;
    try {
        let products;

        if (name) {
            products = await Product.find({
                name: name,
            });
        } else {
            products = await Product.find();
        }

        res.status(200).send(products);
    } catch (error) {
        res.status(500).send(error);
    }
});

//GET PRODUCT

app.get("/find/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).send(product);
    } catch (error) {
        res.status(500).send(error);
    }
});

//UPDATE

app.put("/:id", isAdmin, async (req, res) => {
    try {
        if (req.body.productImg) {
            const destroyResponse = await cloudinary.uploader.destroy(
                req.body.product.image.public_id
            )

            if (destroyResponse) {
                const uploadedResponse = await cloudinary.uploader.upload(req.body.productImg, {
                    upload_preset: "online-shop",
                });

                if (uploadedResponse) {
                    const updatedProduct = await Product.findByIdAndUpdate(
                        req.params.id,
                        {
                            $set: {
                                ...req.body.product,
                                image: uploadedResponse,
                            }
                        }, { new: true }
                    )
                    res.status(200).send(updatedProduct);
                }
            }

        }

        else {
            const updatedProduct = await Product.findByIdAndUpdate(
                req.params.id,
                {
                    $set: {
                        ...req.body.product,
                    }
                }, { new: true }
            )
            res.status(200).send(updatedProduct);
        }
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = app;