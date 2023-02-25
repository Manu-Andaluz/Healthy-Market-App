const dotenv = require("dotenv");
dotenv.configure();

// SDK de Mercado Pago
const mercadopago = require("mercadopago");
// Agrega credenciales
mercadopago.configure({
  access_token: process.env.ACCESS_TOKEN
});

module.exports = {
    mercadopago
}