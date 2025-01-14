const allObjectDefinitions = async (req) => {
    try{
        const {ObjectDefinition} = req.models;
        const objectDefinitions = await ObjectDefinition.find();
        return objectDefinitions;
    } catch(error){
        throw error;
    }
}

const newObjectDefinition = async (req) => {
    try{
        const {ObjectDefinition} = req.models;
        const objectDefinition = new ObjectDefinition(req.body);
        await objectDefinition.save();
        return objectDefinition;
    } catch(error){
        throw error;
    }
}

const retrieveObjectDefinition = async (req) => {
    try {
      const { objectDefinition } = req.models;
  
      const objectDefinitions = await objectDefinition.findOne({ name: req.params.name });
  
      return objectDefinitions;
    } catch (error) {
      logger.error("Error retrieving object definition:", error);
      throw error;
    }
  };
  

const modifyObjectDefinition = async (req) => {
    try{
        const {ObjectDefinition} = req.models;
        const objectDefinition = await ObjectDefinition.findByIdAndUpdate(req.params.name, req.body, {new: true});
        return objectDefinition;
    }
    catch(error){
        throw error;
    }
}

const archiveObjectDefinition = async (req) => {
    try{
        const {ObjectDefinition} = req.models;
        const objectDefinition = await ObjectDefinition.findByIdAndUpdate(req.params.name, {isArchived: true}, {new: true});
        return objectDefinition;
    } catch(error){
        throw error;
    }
}

module.exports = {
    allObjectDefinitions,
    newObjectDefinition,
    retrieveObjectDefinition,
    modifyObjectDefinition,
    archiveObjectDefinition
}

