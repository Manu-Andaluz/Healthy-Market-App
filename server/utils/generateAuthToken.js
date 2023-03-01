const jwt = require("jsonwebtoken");

const generateAuthToken = (user) => {
  const jwtSecretKey = process.env.JWT_SECRET_KEY;

  const token = jwt.sign(
    {
      _id: user._id,
      isAdmin: user.isAdmin,
      name: user.name,
      surname: user.surname,
      birthday: user.birthday ? user.birthday : null,
      nationality: user.nationality ? user.nationality : null,
      adress: user.adress ? user.adress : null,
      email: user.email,
      password: user.password ? user.adress : null,
      id_google : user.id_google ? user.id_google : null
    },
    jwtSecretKey
  );

  return token;
};

module.exports = generateAuthToken;
