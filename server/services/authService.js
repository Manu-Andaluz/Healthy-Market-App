const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');
const { findByEmail } = require('./../services/userServices');
const jwt = require("jsonwebtoken");

class AuthService {
    async getUser(email, password) {

        const user = await findByEmail(email);
        if (!user) {
            throw boom.unauthorized()
        }
        const validatePassword = await bcrypt.compare(password, user.password);
        if (!validatePassword) {
            throw boom.unauthorized()
        }
        return user
    }

    singToken(user) {
        const jwtSecretKey = process.env.JWT_SECRET_KEY;

        const token = jwt.sign(
            {
                _id: user._id,
                name: user.name,
                surname: user.surname,
                birthday: user.birthday,
                nationality: user.nationality,
                adress: user.adress,
                email: user.email,
                password: user.password,
            },
            jwtSecretKey
        );
        return token;
    }

    async sendMail(email) {
        const user = await service.findByEmail(email);
        if (!user) {
            throw done(boom.unauthorized(), false);
        }
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            secure: true, // true for 465, false for other ports
            port: 465,
            auth: {
                user: 'healthymaarketapp@gmail.com',
                pass: 'mglyamdeawipdgtr'
            },
        });

        await transporter.sendMail({
            from: 'healthymaarketapp@gmail.com', // sender address
            to: `${user.email}`, // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Correo de prueba", // plain text body
            html: "<b>Hello world?</b>", // html body
        });
        return { message: 'mail send' };
    }




}


module.exports = AuthService;