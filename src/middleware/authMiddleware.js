const jwt = require('jsonwebtoken');
const ApiError = require('../utils/apiError');
const config = require('../config');

/**
 * Middleware to authenticate requests and attach user info
 */
const authMiddleware = async (req, res, next) => {
  try {
    // Extract authorization header
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return next(new ApiError('Unauthorized: No token provided', 401));
    }

    // Extract token
    const token = authHeader.split(' ')[1];
    let decoded;

    try {
      // Verify JWT
      decoded = jwt.verify(token, config.jwtSecret);
    } catch (error) {
      return next(new ApiError('Unauthorized: Invalid token', 401));
    }

    // Ensure tenant DB is attached by tenantMiddleware
    if (!req.models) {
      return next(new ApiError('Tenant database not connected', 500));
    }

    // Find the user in the tenant's database
    const user = await req.models.user.findById(decoded.user._id).lean();
    if (!user) {
      return next(new ApiError('Unauthorized: User not found', 401));
    }

    // Attach user and tenant info to the request
    req.user = decoded;
    next();
  } catch (error) {
    console.error('Error in authMiddleware:', error);
    return next(new ApiError('Internal Server Error', 500));
  }
};

module.exports = authMiddleware;