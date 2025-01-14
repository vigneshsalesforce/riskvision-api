const logger = require("./../logger/log");
const {
    allObjectDefinitions,
    retrieveObjectDefinition,
    newObjectDefinition,
    modifyObjectDefinition,
    archiveObjectDefinition,
} = require("../services/objectDefinitionService");

const getAllObjectDefinitions = async (req, res) => {
    try {
        logger.info(`Get all object definitions request`);
        const objectDefinitions = await allObjectDefinitions(req);
        res.status(200).json({ success: true, data: objectDefinitions });
    } catch (error) {
        logger.error(`Get all object definitions request failed`, error);
    }
}

const createObjectDefinition = async (req, res) => {
    try {
        logger.info(`Create object definition request`);
        const objectDefinition = await newObjectDefinition(req);
        res.status(200).json({ success: true, data: objectDefinition });
    } catch (error) {
        logger.error(`Create object definition request failed`, error);
    }
}

const getObjectDefinition = async (req, res) => {
    try {
      logger.info(`Get object definition request for name ${req.params.name}`);
  
      const objectDefinition = await retrieveObjectDefinition(req);
  
      if (!objectDefinition) {
        logger.warn(`Object definition not found for name ${req.params.name}`);
        return res.status(404).json({
          success: false,
          message: `Object definition for name ${req.params.name} not found.`,
        });
      }
  
      res.status(200).json({ success: true, data: objectDefinition });
    } catch (error) {
      logger.error(`Failed to get object definition for name ${req.params.name}`, error);
      res.status(500).json({
        success: false,
        message: "Internal server error. Please try again later.",
      });
    }
  };
  

const updateObjectDefinition = async (req, res) => {
    try {
        logger.info(`Update object definition request for id ${req.params.id}`);
        const objectDefinition = await modifyObjectDefinition(req);
        res.status(200).json({ success: true, data: objectDefinition });
    } catch (error) {
        logger.error(
            `Update object definition request failed for id ${req.params.id}`,
            error
        );
    }
}

const deleteObjectDefinition = async (req, res) => {
    try {
        logger.info(`Delete object definition request for id ${req.params.id}`);
        const objectDefinition = await archiveObjectDefinition(req);
        res.status(200).json({ success: true, data: objectDefinition });
    } catch (error) {
        logger.error(`Delete object definition request failed for id ${req.params.id}`, error);
    }
}

module.exports = {
    getAllObjectDefinitions,
    createObjectDefinition,
    getObjectDefinition,
    updateObjectDefinition,
    deleteObjectDefinition
}