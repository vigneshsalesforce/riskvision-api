const logger = require("./../logger/log");
const {
    allRiskData,
    newRiskData,
    retrieveRiskData,
    modifyRiskData,
    archiveRiskData,
} = require("./../services/riskDataService");

const getAllRiskData = async (req, res) => {
    try {
        logger.info(`Get all risk data request`);
        const riskData = await allRiskData(req);
        res.status(200).json({ success: true, data: riskData });
    } catch (error) {
        logger.error(`Get all risk data request failed`, error);
        next(error);
    }
}

const createRiskData = async (req, res) => {
    try {
        logger.info(`Create risk data request`);
        const riskData = await newRiskData(req);
        res.status(200).json({ success: true, data: riskData });
    } catch (error) {
        logger.error(`Create risk data request failed`, error);
        next(error);
    }
}

const getRiskData = async (req, res) => {
    try {
        logger.info(`Get risk data request for id ${req.params.id}`);
        const riskData = await retrieveRiskData(req);
        res.status(200).json({ success: true, data: riskData });
    } catch (error) {
        logger.error(`Get risk data request failed for id ${req.params.id}`, error);
        next(error);
    }
}

const updateRiskData = async (req, res) => {
    try {
        logger.info(`Update risk data request for id ${req.params.id}`);
        const riskData = await modifyRiskData(req);
        res.status(200).json({ success: true, data: riskData });
    } catch (error) {
        logger.error(
            `Update risk data request failed for id ${req.params.id}`,
            error
        );
        next(error);
    }
}

const deleteRiskData = async (req, res) => {
    try {
        logger.info(`Delete risk data request for id ${req.params.id}`);
        const riskData = await archiveRiskData(req);
        res.status(200).json({ success: true, data: riskData });
    } catch (error) {
        logger.error(`Delete risk data request failed for id ${req.params.id}`, error);
        next(error);
    }
}

module.exports = {
    getAllRiskData,
    createRiskData,
    getRiskData,
    updateRiskData,
    deleteRiskData,
};