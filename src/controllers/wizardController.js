const wizardService = require('../services/wizardService');
const logger = require("./../logger/log");


const getObjectDefinition = async (req, res) => {
  const { name } = req.params;

  if (!name) {
    return res.status(400).json({ message: 'Object name is required' });
  }

  try {
    const definition = await wizardService.getObjectDefinition(req);
    if (!definition) {
      return res.status(404).json({ message: 'Object definition not found' });
    }
    res.status(200).json({sucess: true, data:definition});
  } catch (error) {
    logger.error('Error fetching wizard object definition:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


module.exports = {
    getObjectDefinition
};