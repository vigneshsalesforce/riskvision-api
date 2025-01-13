const logger = require("./../logger/log");
const {
    allLocations,
    retrieveLocation,
    newLocation,
    modifyLocation,
    archiveLocation,
} = require("./../services/locationService");

const getAllLocations = async (req, res) => {
    try {
        logger.info(`Get all locations request`);
        const locations = await allLocations(req);
        res.status(200).json({ success: true, data: locations });
    } catch (error) {
        logger.error(`Get all locations request failed`, error);
        next(error);
    }
}

const createLocation = async (req, res) => {
    try {
        logger.info(`Create location request`);
        const location = await newLocation(req);
        res.status(200).json({ success: true, data: location });
    } catch (error) {
        logger.error(`Create location request failed`, error);
        next(error);
    }
}

const getLocation = async (req, res) => {
    try {
        logger.info(`Get location request for id ${req.params.id}`);
        const location = await retrieveLocation(req);
        res.status(200).json({ success: true, data: location });
    } catch (error) {
        logger.error(`Get location request failed for id ${req.params.id}`, error);
        next(error);
    }
}

const updateLocation = async (req, res) => {
    try {
        logger.info(`Update location request for id ${req.params.id}`);
        const location = await modifyLocation(req);
        res.status(200).json({ success: true, data: location });
    } catch (error) {
        logger.error(
            `Update location request failed for id ${req.params.id}`,
            error
        );
        next(error);
    }
}

const deleteLocation = async (req, res) => {
    try {
        logger.info(`Delete location request for id ${req.params.id}`);
        const location = await archiveLocation(req);
        res.status(200).json({ success: true, data: location });
    } catch (error) {
        logger.error(`Delete location request failed for id ${req.params.id}`, error);
        next(error);
    }
}

module.exports = {
    getAllLocations,
    createLocation,
    getLocation,
    updateLocation,
    deleteLocation,
}