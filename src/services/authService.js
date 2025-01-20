const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config');
const Tenant  = require('../models/landlord/tenant');
const ApiError = require('../utils/apiError');
const path = require('path');
const fs = require('fs').promises;
const logger = require('./../logger/log')


const generateToken = (user, tenant) => {
    return jwt.sign({ user: user, tenant: tenant }, config.jwtSecret, {
        expiresIn: '1h'
    })
};

const handleGoogleLogin = (req, res, next) => {

    passport.authenticate('google', async (err, user, info) => {

        if (err) {
            logger.error('Error authenticating user:', err);
            return next(new ApiError('Authentication failed', 500));
        }

        if (!user) {
            logger.warn('User not found:', info?.message || 'Unknown error');
            const loginPage = `${process.env.FRONTEND_URL}/notify`;
            return res.redirect(loginPage);
        }
        try {
            const domain = user.email.split('@')[1].split('.')[0];
            const client = domain === 'gmail' ? 'public' : domain;
      
            // Generate token and redirect to frontend
            const token = generateToken(user, { domain: client });
            //To-DO: Change the frontEndURL to wildcard
            //const frontEndURL = process.env.WILDCARD_FRONTEND_URL.replace('*', client);
            const frontEndURL = process.env.FRONTEND_URL;
            const redirectURL = `${frontEndURL}/redirect?token=${token}&client=${client}`;
      
            return res.redirect(redirectURL);
          } catch (error) {
            logger.error('Error generating token:', error);
            return next(new ApiError('Internal server error', 500));
          }
        })(req, res, next);
};

const getMe = async (req) => {
    return {
       user: req.user,
        tenantId: req.tenantId
    }
}

module.exports = {
    handleGoogleLogin,
    getMe
}