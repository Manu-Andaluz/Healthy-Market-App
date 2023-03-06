var GoogleStrategy = require("passport-google-oauth20");
const { findByEmail } = require("./../../../services/userServices");
const generateAuthToken = require("../../generateAuthToken");
const { User } = require("./../../../models/User");

const callback =
  "https://healthy-market-app-production.up.railway.app/users/google";
const callback1 = "http://localhost:5000/users/google/callback";

const Googlestrategy = new GoogleStrategy(
  {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: callback,

    scope: [
      "https://www.googleapis.com/auth/userinfo.email",
      "https://www.googleapis.com/auth/userinfo.profile",
    ],
    state: true,
  },
  async function verify(accessToken, refreshToken, profile, done) {
    const user = await User.findOne({});
    if (user) {
      const token = generateAuthToken(user);
      done(null, token);
    } else {
      const userSchema = {
        name: user.name.givenName,
        surname: user._json.family_name,
        nationality: user._json.locale,
        email: user._json.email,
        id_google: user.id,
      };

      const newUser = new User(userSchema);
      await newUser.save();

      const token = generateAuthToken(newUser);
      done(null, token);
    }
  }
);

module.exports = Googlestrategy;
