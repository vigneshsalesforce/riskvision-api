const jwt = require('jsonwebtoken');
const config = require('../config');
const User = require('../models/tenant/user');
const ApiError = require('../utils/apiError');

const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return next(new ApiError('Unauthorized: No token provided', 401));
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, config.jwtSecret);
      // Get User and Tenant information from tenant database.
      const tenantDb = req.tenantDb;
      if (!tenantDb){
          return next(new ApiError("Tenant database not connected", 500))
      }
    const user = await tenantDb.model('User').findById(decoded.userId);
      if (!user) {
          return next(new ApiError('Unauthorized: User not found', 401));
      }
      
    req.user = user;
    req.tenantId = decoded.tenantId;
    next();
  } catch (error) {
    return next(new ApiError('Unauthorized: Invalid token', 401));
  }
};

module.exports = authMiddleware;