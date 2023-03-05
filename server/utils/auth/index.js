const passport = require('passport');

const LocalStrategy = require('./strategies/local.stategy');
const GoogleStrategy = require('./strategies/google.stratety');

passport.use(LocalStrategy);
passport.use('google', GoogleStrategy);

