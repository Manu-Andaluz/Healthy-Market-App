const boom = require("@hapi/boom");
const bcrypt = require("bcrypt");
const { findByEmail } = require("./../services/userServices");
const generateAuthToken = require("../utils/generateAuthToken");
const nodemailer = require('nodemailer')

class AuthService {
  async getUser(email, password) {
    const user = await findByEmail(email);
    if (!user) {
      throw boom.unauthorized();
    }
    const validatePassword = await bcrypt.compare(password, user.password);
    if (!validatePassword) {
      throw boom.unauthorized();
    }
    return user;
  }

  async singToken(user) {
    const token = await generateAuthToken(user);
    return token;
  }

  async sendMail(email, body) {
    try {
      const user = await findByEmail(email);
    if (!user) {
      throw done(boom.unauthorized(), false);
    }
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      secure: true, // true for 465, false for other ports
      port: 465,
      auth: {
        user: 'healthymaarketapp@gmail.com',
        pass: 'cnqaxmbvbdaiwftc',
      },
    }, (err, info)=> {
      if(err){
        console.log(err)
      }else{
        console.log("mensaje enviado")
      }
    });

    await transporter.sendMail({
      from: "healthymaarketapp@gmail.com", // sender address
      to: `${user.email}`, // list of receivers
      subject: "hola", // Subject line
      text: "Correo de prueba", // plain text body
   
    });
    return { message: "mail send" };
    } catch (error) {
      return error
    }
    
  }
}

module.exports = AuthService;
