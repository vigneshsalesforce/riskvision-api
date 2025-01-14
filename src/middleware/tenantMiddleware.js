const { createTenantDbConnection } = require("../config/database");
const Tenant = require("../models/landlord/tenant");
const ApiError = require("../utils/apiError");
const { tenantConnections } = require("../config/database"); // Cached connections

/**
 * Middleware to attach tenant-specific database and models to the request
 */
const tenantMiddleware = async (req, res, next) => {
  try {
    // Extract tenant domain dynamically
    let tenantDomain = req.hostname || req.headers["x-forwarded-host"];
    const subdomain = tenantDomain.split(".")[0];
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