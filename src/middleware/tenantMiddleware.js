const { createTenantDbConnection } = require('../config/database');
const Tenant = require('../models/landlord/tenant');
 const ApiError = require('../utils/apiError');


const tenantDbCache = new Map();

const tenantMiddleware = async (req, res, next) => {
  let tenantDomain = req.hostname; // extract from host
    if (tenantDomain === "localhost")
        tenantDomain = req.headers.origin.split("//")[1]

    
  try {
    const tenant = await Tenant.findOne({domain: tenantDomain})
  
    if (!tenant){
        return next(new ApiError("Tenant not found", 404));
    }

      if (tenantDbCache.has(tenant.databaseName)){
        req.tenantDb = tenantDbCache.get(tenant.databaseName);
          return next();
      }

     const tenantDb = await createTenantDbConnection(tenant.databaseName);
      tenantDbCache.set(tenant.databaseName, tenantDb)
    req.tenantDb = tenantDb;
    next();
  } catch (error) {
    console.error("Error connecting to tenant DB", error);
   return next(new ApiError("Internal Server Error", 500));
  }
};

module.exports = tenantMiddleware;