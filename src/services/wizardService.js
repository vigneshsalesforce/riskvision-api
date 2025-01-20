const logger = require("./../logger/log");

const getObjectDefinition = async (req) => {
  try {
    const { wizardObjectDefinition } = req.models;
      const definition = await wizardObjectDefinition.findOne({ name: req.params.name });
    return definition;
  } catch (error) {
      logger.error("Error fetching wizard object definition:", error);
      throw error;
  }
};


module.exports = {
    getObjectDefinition,
};