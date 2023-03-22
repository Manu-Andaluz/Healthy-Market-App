const nodemailer = require("nodemailer");

require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  secure: false,
  auth: {
    user: process.env.USER_MAIL,
    pass: process.env.PASS_MAIL,
  },
});

async function welcomeUser(email) {
  try {
    let info = await transporter.sendMail({
      from: "healthymarketapphenry@gmail.com",
      to: email,
      subject: "Bienvenido a Healthy Market 🌿 ",
      html: "<p>Te damos la bienvenida a nuestra tienda de productos saludables, dónde podrás agregar productos a tu carrito y realizar tu compra con cualquier medio de pago. </p>",
    });
    console.log(info.messageId);
    console.log("Mail service working");
  } catch (error) {
    console.log(error.message);
  }
}

async function welcome(email) {
  try {
    let info = await transporter.sendMail({
      from: "healthymarketapphenry@gmail.com",
      to: email,
      subject: "Bienvenido a Healthy Market 🌿 ",
      html: "<p>Te damos la bienvenida a nuestra tienda de productos saludables, dónde podrás agregar productos a tu carrito y realizar tu compra con cualquier medio de pago. </p>",
    });
    console.log(info.messageId);
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = {
  welcomeUser,
  welcome,
};
