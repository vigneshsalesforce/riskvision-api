const allConfig = async (req) => {
    try {
        const { Configuration } = req.models;
        const config = await Configuration.find();
        return config;
    } catch (error) {
        throw error;
    }
}

const newConfig = async (req) => {
    try {
        const { Configuration } = req.models;
        const configValues = req?.body;
        const config = new Configuration(configValues);
        await config.save();
        return config;
    } catch (error) {
        throw error;
    }
}

const retrieveConfig = async (req) => {
    try {
        const { Configuration } = req.models;
        const config = await Configuration.findById(req.params.id);
        return config;
    }
    catch (error) {
        throw error;
    }
}

const modifyConfig = async (req) => {
    try {
        const { Configuration } = req.models;
        const configValues = req?.body;
        const config = await Configuration.findByIdAndUpdate(req.params.id, configValues, { new: true });
        return config;
    } catch (error) {
        throw error;
    }
}

const archiveConfig = async (req) => {
    try {
        const { Configuration } = req.models;
        const config = await Configuration.findByIdAndDelete(req.params.id);
        return config;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    allConfig,
    newConfig,
    retrieveConfig,
    modifyConfig,
    archiveConfig,
}