const authService = require('../services/authService');
const passport = require('../config/passport');

const googleAuth = (req, res, next) => {
    passport.authenticate('google', {
        scope: ['profile', 'email'],
        prompt: 'select_account'
    })(req, res, next);
};

const googleAuthCallback = (req, res, next) => {
    authService.handleGoogleLogin(req, res, next);
};

const getMe = async (req, res, next) => {
    try{
      const userDetails = await authService.getMe(req);
         return res.json(userDetails)
    } catch(error){
      next(error);
    }
}

module.exports = {
    googleAuth,
    googleAuthCallback,
    getMe
}