const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const config = require('./index');
const LandlordTenant = require('../models/landlord/tenant');
const LandlordUser  = require('../models/landlord/user');
const { createTenantDbConnection, initializeTenant } = require('../config/database');

passport.use(
  new GoogleStrategy(
    {
      clientID: config.googleClientId,
      clientSecret: config.googleClientSecret,
      callbackURL: config.googleCallbackUrl,
      scope: ['profile', 'email'],
    },
    async (accessToken, refreshToken, profile, done) => {
        console.log('Profile ------->',profile);
       
      try {
        const email = profile.emails[0].value;
        const domain = email.substring(email.indexOf('@') + 1, email.indexOf('.'));
        const domainName = domain === 'gmail' ? 'public' : domain;
        const tenant = await LandlordTenant.findOne({
            domain : domain
        })
        const user = await LandlordUser.findOne({ email : profile.emails[0].value});
        if (user){
          return done(null, user);
        }

          const newUser = new LandlordUser({
              googleId: profile.id,
              email: profile.emails[0].value,
              name: profile.displayName,
              provider: profile.provider,
              domain: domainName,
        });
          
       await  newUser.save();
     return done(null, newUser);

      } catch (error) {
         return done(error, null);
      }
      
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await LandlordUser.findById(id);
        done(null, user);
    } catch (error) {
        done(error, null);
    }

});

module.exports = passport;