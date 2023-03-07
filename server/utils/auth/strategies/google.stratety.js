var GoogleStrategy = require("passport-google-oauth20");
const { findByEmail } = require("./../../../services/userServices");
const generateAuthToken = require("../../generateAuthToken");
const { User } = require("./../../../models/User");


const callback =
  "https://healthy-market-app-production.up.railway.app/users/google/callback";
const callback1 = "http://localhost:5000/users/google/callback";

const Googlestrategy = new GoogleStrategy(
  {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: callback1,

    scope: [
      "https://www.googleapis.com/auth/userinfo.email",
      "https://www.googleapis.com/auth/userinfo.profile",
    ],
    
 
  },
  async function verify( accessToken, refreshToken, profile, done) {
    // console.log({accessToken, refreshToken, profile, done})
   
    
   try {
    const email = profile.emails[0].value;
    const user = await User.findOne({ email : email });
  
    if (user) {
      user.id_google = profile.id;
      done(null, user);
    } else {
      const userSchema = {
        name: profile.name.givenName,
        surname: profile._json.family_name,
        nationality: profile._json.locale,
        email: profile._json.email,
        id_google: profile.id,
      };

      const newUser = new User(userSchema);
      await newUser.save();
      done(null, newUser);
    }
   } catch (error) {
      console.log({error : error.message})
   }
  }
);



module.exports = Googlestrategy;
