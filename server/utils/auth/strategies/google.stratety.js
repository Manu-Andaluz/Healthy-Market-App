var GoogleStrategy = require("passport-google-oauth20");
const { findByEmail } = require("./../../../services/userServices");
const passport = require("passport");

const emails = ["manulok78@gmail.com"];
const callback = "https://healthy-market-app-production.up.railway.app/users/google";

const Googlestrategy = new GoogleStrategy(
  {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL:
      "http://localhost:5000/users/google",
    scope: [
      "https://www.googleapis.com/auth/userinfo.email",
      "https://www.googleapis.com/auth/userinfo.profile",
    ],
    state: true,
  },
  async function verify(accessToken, refreshToken, profile, done) {
    const user = emails.includes(profile.emails[0].value);
    // const user = await findByEmail(profile.emails[0].value)
    console.log(user);
    if (user) {
      done(null, profile);
    } else {
      emails.push(profile.emails[0].value);
      done(null, profile);
    }
  }
);

module.exports = Googlestrategy;
