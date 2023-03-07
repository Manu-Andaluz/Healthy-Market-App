const passport = require('passport');
const { User } = require("./../../models/User");

const LocalStrategy = require('./strategies/local.stategy');
const GoogleStrategy = require('./strategies/google.stratety');

passport.use(LocalStrategy);
passport.use('google', GoogleStrategy);
passport.serializeUser((user,cb)=>{
    
    cb(null, user.id_google)
})
passport.deserializeUser(async(id, cb)=>{
    try {
        const user = await User.findOne({id_google : id})
        if(user) cb(null, user);
        
    } catch (error) {
        cb(error.message, null);
    }
})
