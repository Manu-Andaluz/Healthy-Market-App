const { getProduct, createProduct, editProduct, deleteProduct } = require("../services/productServices");

// get product

const getProductController = async (req, res) => {
    try {
        const savedProduct = await getProduct()
        res.status(200).send(savedProduct);
    }

    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}


// create product

const createProductController = async (req, res) => {
    const { name, price, image, details, stock, category, companyOwner } = req.body
    try {
        if (name && price && image && details && stock && category && companyOwner) {
            const savedProduct = await createProduct(name, price, image, details, stock, category, companyOwner)
            res.status(200).send(savedProduct);
        }
        else {
            res.status(200).send('Missing data');
        }
    }

    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};

// edit product

const editProductController = async (req, res) => {
    const { product, productImage } = req.body
    const { productId } = req.params
    try {
        if (productId && product) {
            const updatedProduct = await editProduct(productImage, productId, product)
            res.send(updatedProduct)
        }
        else {
            res.status(500).send('Missing data')
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

// delete product

const deleteProductController = async (req, res) => {
    const { id } = req.params;

    try {
        const savedProduct = await deleteProduct(id)
        res.status(200).send(savedProduct);
    }

    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};


module.exports = { getProductController, createProductController, editProductController, deleteProductController };
