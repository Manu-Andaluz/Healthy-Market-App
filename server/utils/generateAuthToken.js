const jwt = require("jsonwebtoken");

const generateAuthToken = (user) => {
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
};

module.exports = generateAuthToken;
