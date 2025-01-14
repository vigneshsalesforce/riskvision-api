/**
 * Initialize schemas and insert object definitions into the tenant database
 * @param {Object} tenantDb - The tenant database connection (Mongoose connection instance)
 */
const initSchema = async (models, tenantDb) => {
  try {
    // Log initialization start
    console.log(`Initializing schemas for Tenant Database: ${tenantDb.name}`);
    // Insert object definitions
    const objectDefinitions = [
      require("./data/accountDefinition"),
      require("./data/contactDefinition"),
      require("./data/locationDefinition"),
      require("./data/buildingDefinition"),
    ];

    const ObjectDefinition = models.objectDefinition;

    // Fetch all existing object definitions to avoid updating
    const existingDefinitions = await ObjectDefinition.find(
      {},
      { name: 1 }
    ).lean();
    const existingNames = new Set(existingDefinitions.map((def) => def.name));

    // Prepare bulk operations only for new definitions
    const bulkOps = objectDefinitions
      .filter((definition) => !existingNames.has(definition.name))
      .map((definition) => ({
        insertOne: { document: definition }, // Insert operation
      }));

    if (bulkOps.length > 0) {
      const result = await ObjectDefinition.bulkWrite(bulkOps); // Execute the bulkWrite operation
      console.log(
        `Object definitions initialized successfully! (${result.insertedCount} new)`
      );
    } else {
      console.log("No new object definitions to initialize.");
    }
  } catch (error) {
    console.error("Error initializing schemas:", error.message);
  }
};

module.exports = initSchema;