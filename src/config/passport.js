const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const config = require("./index");
const LandlordTenant = require("../models/landlord/tenant");
const LandlordUser = require("../models/landlord/user");
const {
  createTenantDbConnection,
  tenantConnections
} = require("../config/database");
const { initializeTenant } = require("../config/initTenant");
const logger = require("../logger/log");

passport.use(
  new GoogleStrategy(
    {
      clientID: config.googleClientId,
      clientSecret: config.googleClientSecret,
      callbackURL: config.googleCallbackUrl,
      scope: ["profile", "email"],
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const email = profile.emails[0].value;
        const domain = email.substring(email.indexOf("@") + 1).split(".")[0];
        const domainName = domain === "gmail" ? "public" : domain;
        // Check if tenant exists in LandlordTenant
        let tenant = await LandlordTenant.findOne({ domain: domainName });

        if (!tenant) {
          // Tenant does not exist: Create the tenant
          logger.info("Tenant does not exist. Creating tenant...");
          tenant = await initializeTenant(
            domain,
            domainName,
            email,
            profile.displayName
          );
        }

        // Tenant exists: Connect to the tenant database
        const tenantDb = await tenantConnections[tenant.databaseName];
        // Check if user exists in tenant database
        const existingTenantUser = await tenantDb.models.user.findOne({
          email,
        });
        if (!existingTenantUser) {
          // User not found in tenant DB
          logger.info("User not found in tenant database");
          return done(null, false, {
            message: "User not found in tenant database",
          });
        }

        // User exists: Authenticate
        logger.info("User found in tenant database");
        return done(null, existingTenantUser);
      } catch (error) {
        logger.error("Error authenticating user:", error);
        return done(error, null);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  logger.info("Serializing user:", user.id);
  done(null, { id: user.id, tenantDbName: user.tenantDbName });
});

// Deserialize user: Retrieve user from tenant or landlord database
passport.deserializeUser(async (sessionData, done) => {
  try {
    const { id, tenantDbName } = sessionData;

    let user = null;
    if (tenantDbName) {
      // If tenantDbName is available, fetch from tenant database
      const tenantDb = await tenantConnections[tenantDbName];
      user = await tenantDb.models.user.findById(id);
    } else {
      // If no tenantDbName, check in LandlordUser
      user = await LandlordUser.findById(id);
    }

    if (!user) {
      return done(new Error("User not found"), null);
    }

    logger.info("Deserializing user:", user.id);
    done(null, user);
  } catch (error) {
    logger.error("Error deserializing user:", error);
    done(error, null);
  }
});

module.exports = passport;