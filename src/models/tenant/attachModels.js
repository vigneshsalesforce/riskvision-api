const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');

/**
 * Attach all tenant models to a given tenant database connection
 * @param {Object} tenantDb - The tenant database connection (Mongoose connection instance)
 * @returns {Object} - An object containing all the models attached to the tenant database
 */
const attachModels = (tenantDb) => {
  const models = {};
  const modelsPath = path.resolve(__dirname, '../tenant/schema'); // Adjust to match your folder structure

  // Read all files in the tenant models directory
  fs.readdirSync(modelsPath).forEach((file) => {
    if (file.endsWith('.js') && file !== 'field.js') { // Exclude attachModels.js
      const modelName = file.replace('.js', ''); // Get the model name from the file name
      const modelSchema = require(path.join(modelsPath, file)); // Require the model schema

      // Ensure the required module exports a schema
      if (!modelSchema || !(modelSchema instanceof mongoose.Schema)) {
        throw new Error(
          `Invalid schema in model file: ${file}. Ensure it exports a valid Mongoose schema.`
        );
      }

      models[modelName] = tenantDb.model(modelName, modelSchema); // Attach the model to the tenantDb
    }
  });

  return models; // Return the attached models
};

module.exports = attachModels;