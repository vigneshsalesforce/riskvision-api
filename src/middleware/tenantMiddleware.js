const { createTenantDbConnection } = require("../config/database");
const Tenant = require("../models/landlord/tenant");
const ApiError = require("../utils/apiError");
const { tenantConnections } = require("../config/database"); // Cached connections
const jwt = require('jsonwebtoken');
const config = require('../config');

/**
 * Middleware to attach tenant-specific database and models to the request
 */
const tenantMiddleware = async (req, res, next) => {
  try {
    // Extract tenant domain dynamically
    // Extract tenant domain from req.user or req.hostname
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return next(new ApiError('Unauthorized: No token provided', 401));
    }
    const token = authHeader.split(' ')[1];
    let decoded;
    try {
      decoded = jwt.verify(token, config.jwtSecret);
      req.user = decoded;
    } catch (error) {
      return next(new ApiError('Unauthorized: Invalid token', 401));
    }

    let tenantDomain = req.user.tenant.domain || req.hostname || req.headers["x-forwarded-host"];
    if (!tenantDomain) {
      return next(new ApiError("Unable to determine tenant domain", 400));
    }
    let subdomain;
    
    if (tenantDomain.includes(".")) {
      // Extract subdomain from hostname (e.g., "public.localhost" -> "public")
      subdomain = tenantDomain.split(".")[0];
    } else {
      // Use tenant domain directly if no dots (e.g., "public")
      subdomain = tenantDomain;
    }
    let tenant_name = `${subdomain}_tenant`;
    if (!subdomain) {
      return next(new ApiError("Unable to determine tenant domain", 400));
    }

    // Check cache for tenant connection
    if (tenantConnections[tenant_name]) {
      const { models } = tenantConnections[tenant_name];
      req.models = models;
      return next();
    }

    // Fallback: Check Tenant collection in the database
    const tenant = await Tenant.findOne({ domain: subdomain });
    if (!tenant) {
      return next(
        new ApiError(`Tenant not found for domain: ${subdomain}`, 404)
      );
    }

    // Establish a new connection and cache it
    const models  = await createTenantDbConnection(
      tenant.databaseName
    );
    tenantConnections[tenant_name] = { connection, models };

    req.models = models;
    next();
  } catch (error) {
    console.error("Error in tenantMiddleware:", error);
    return next(new ApiError("Internal Server Error", 500));
  }
};

module.exports = tenantMiddleware;