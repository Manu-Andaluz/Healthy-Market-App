const nodemailer = require ("nodemailer");
var dotenv = require('dotenv');
dotenv.config();

const transporter = nodemailer.createTransport({
service: "gmail",
host: "smtp.gmail.com",
secure:false,
auth: {
    user:'rociomolina.b3@gmail.com',
    pass:'muwoqhbkutpnabik',
    }
})

 async function welcomeUser (email){
    try { let info = await transporter.sendMail({
            from: 'rociomolina.b3@gmail.com',
            to:email,
            subject: "Bienvenido a Healthy Market 🌿 ",
            html:"<div><p>Te damos la bienvenida a nuestra tienda de productos saludables, dónde podrás agregar productos a tu carrito y realizar tu compra con cualquier medio de pago. </p></div>"
        })
        console.log(info.messageId);
        console.log('Mail service working');
    } catch (error) {
        console.log(error.message)
    }
}

async function welcome (email){
    try { let info = await transporter.sendMail({
            from: 'rociomolina.b3@gmail.com',
            to:email,
            subject: "Bienvenido a Healthy Market 🌿 ",
            html:"<div><p>Te damos la bienvenida a nuestra tienda de productos saludables, dónde podrás agregar productos a tu carrito y realizar tu compra con cualquier medio de pago. </p></div>"
        })
        console.log(info.messageId);
        console.log('Mail service working');
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = {
    welcomeUser, welcome
}
