const path = require("path");
const LandlordTenant = require("../models/landlord/tenant");
const { createTenantDbConnection } = require("./database");
const logger = require("./../logger/log");

const initializeTenant = async (domain, domainName, email, displayName) => {
  const dbName = `${domainName}_tenant`;

  try {
    // Create new LandlordTenant
    const newTenant = new LandlordTenant({
      name: domain,
      databaseName: dbName,
      domain: domainName,
    });
    const tenant = await newTenant.save();

    // Connect to tenant DB
    const tenantDb = await createTenantDbConnection(dbName);

    // Create default System Admin profile
    const newProfile = new tenantDb.models.profile({
      name: "System Admin",
    });
    await newProfile.save();

    // Create default user in tenant DB
    const newUser = new tenantDb.models.user({
      email,
      name: displayName,
      profile: newProfile._id,
    });
    await newUser.save();

    // Initialize default tenant configurations
    await createDefaultTenantConfig(tenantDb);

    return tenant;
  } catch (error) {
    logger.error("Error creating tenant:", error);
  }
};

const createDefaultTenantConfig = async (tenantDb) => {
  const configDir = path.resolve(__dirname, "../default_configs"); // Absolute path to default_configs
  const configFiles = [
    {
      name: "Brewery Site Inspection",
      path: path.join(configDir, "brewerySiteInspection.js"),
    },
    {
      name: "COPE Assessment",
      path: path.join(configDir, "copeAssessment.js"),
    },
    {
      name: "Hazards Inspection",
      path: path.join(configDir, "hazardsInspection.js"),
    },
    {
      name: "Liability Risk Rating",
      path: path.join(configDir, "liablilityRiskRating.js"),
    },
    {
      name: "Non Standard Assessment",
      path: path.join(configDir, "nonStandardAssessment.js"),
    },
    {
      name: "Product Safety Assessment",
      path: path.join(configDir, "productSafetyAssessment.js"),
    },
    {
      name: "Product Safety Risk Rating",
      path: path.join(configDir, "productSafetyRiskRating.js"),
    },
    {
      name: "Property Risk Assessment",
      path: path.join(configDir, "propertyRiskAssessment.js"),
    },
    {
      name: "Property Risk Rating",
      path: path.join(configDir, "propertyRiskRating.js"),
    },
  ];

  try {
    // Read all configurations
    const configurations = await Promise.all(
      configFiles.map(async (configFile) => {
        try {
          const structure = require(configFile.path);
          return {
            name: configFile.name,
            structure,
          };
        } catch (error) {
          logger.error(
            `Error reading configuration file ${configFile.name}:`,
            error
          );
          return null; // Skip this configuration if not found
        }
      })
    ).then((configs) => configs.filter(Boolean)); // Remove null values

    // Perform bulk insert into the tenant's Configuration collection
    await tenantDb.models.configuration.insertMany(configurations);

    logger.info("Default configurations created");
  } catch (error) {
    logger.error("Error creating default configurations:", error);
  }
};

module.exports = { initializeTenant };