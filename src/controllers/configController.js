const logger = require("./../logger/log");
const {
    allConfig,
    newConfig,
    retrieveConfig,
    modifyConfig,
    archiveConfig,
} = require("../services/configService");

const getAllConfigs = async (req, res) => {
    try {
        logger.info(`Get all configuration request`);
        const config = await allConfig(req);
        res.status(200).json({ success: true, data: config });
    } catch (error) {
        logger.error(`Get all configuration request failed`, error);
        next(error);
    }
}

const createConfig = async (req, res) => {
    try {
        logger.info(`Create configuration request`);
        const config = await newConfig(req);
        res.status(200).json({ success: true, data: config });
    } catch (error) {
        logger.error(`Create configuration request failed`, error);
        next(error);
    }
}

const getConfig = async (req, res) => {
    try {
        logger.info(`Get configuration request for id ${req.params.id}`);
        const config = await retrieveConfig(req);
        res.status(200).json({ success: true, data: config });
    } catch (error) {
        logger.error(`Get configuration request failed for id ${req.params.id}`, error);
        next(error);
    }
}

const updateConfig = async (req, res) => {
    try {
        logger.info(`Update configuration request for id ${req.params.id}`);
        const config = await modifyConfig(req);
        res.status(200).json({ success: true, data: config });
    } catch (error) {
        logger.error(
            `Update configuration request failed for id ${req.params.id}`,
            error
        );
        next(error);
    }
}

const deleteConfig = async (req, res) => {
    try {
        logger.info(`Delete configuration request for id ${req.params.id}`);
        const config = await archiveConfig(req);
        res.status(200).json({ success: true, data: config });
    } catch (error) {
        logger.error(`Delete configuration request failed for id ${req.params.id}`, error);
        next(error);
    }
}

module.exports = {
    getAllConfigs,
    createConfig,
    getConfig,
    updateConfig,
    deleteConfig,
}