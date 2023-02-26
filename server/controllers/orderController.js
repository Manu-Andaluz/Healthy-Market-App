// SDK de Mercado Pago
const mercadopago = require("mercadopago");
const dotenv = require("dotenv");
dotenv.config();
// Agrega credenciales
mercadopago.configure({
  access_token: process.env.ACCESS_TOKEN,
});

const createOrder = async (req, res) => {
  const allProducts = req.body;

  const itemArray = await allProducts.map((product) => {
    return {
      id: product._id,
      title: product.name,
      currency_id: "ARS",
      picture_url: product.image.url,
      description: product.details,
      category_id: product.category,
      quantity: 1,
      unit_price: product.price,
    };
  });

  let preference = {
    items: itemArray,
    back_urls: {
      success: "https://healthy-market-app.vercel.app/home",
      failure: "https://healthy-market-app.vercel.app/cart",
      pending: "",
    },
    auto_return: "approved",
    binary_mode: true,
  };

  mercadopago.preferences
    .create(preference)
    .then((response) => res.status(200).send({ response }));
};

module.exports = { createOrder };
