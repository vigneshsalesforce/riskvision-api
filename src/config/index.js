require('dotenv').config();

const config = {
  port: process.env.PORT || 5000,
  mongodbUriLandlord: process.env.MONGODB_URI_LANDLORD,
  googleClientId: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  googleCallbackUrl: process.env.GOOGLE_CALLBACK_URL,
  jwtSecret: process.env.JWT_SECRET
};

module.exports = config;