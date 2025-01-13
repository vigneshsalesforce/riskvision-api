const logger = require("./../logger/log");
const {
    allBuildings,
    retrieveBuilding,
    newBuilding,
    modifyBuilding,
    archiveBuilding,
} = require("./../services/buildingService");

const getAllBuildings = async (req, res) => {
    try {
        logger.info(`Get all buildings request`);
        const buildings = await allBuildings(req);
        res.status(200).json({ success: true, data: buildings });
    } catch (error) {
        logger.error(`Get all buildings request failed`, error);
        next(error);
    }
}

const createBuilding = async (req, res) => {
    try {
        logger.info(`Create building request`);
        const building = await newBuilding(req);
        res.status(200).json({ success: true, data: building });
    } catch (error) {
        logger.error(`Create building request failed`, error);
        next(error);
    }
}

const getBuilding = async (req, res) => {
    try {
        logger.info(`Get building request for id ${req.params.id}`);
        const building = await retrieveBuilding(req);
        res.status(200).json({ success: true, data: building });
    } catch (error) {
        logger.error(`Get building request failed for id ${req.params.id}`, error);
        next(error);
    }
}

const updateBuilding = async (req, res) => {
    try {
        logger.info(`Update building request for id ${req.params.id}`);
        const building = await modifyBuilding(req);
        res.status(200).json({ success: true, data: building });
    } catch (error) {
        logger.error(
            `Update building request failed for id ${req.params.id}`,
            error
        );
        next(error);
    }
}

const deleteBuilding = async (req, res) => {
    try {
        logger.info(`Delete building request for id ${req.params.id}`);
        const building = await archiveBuilding(req);
        res.status(200).json({ success: true, data: building });
    } catch (error) {
        logger.error(`Delete building request failed for id ${req.params.id}`, error);
        next(error);
    }
}


module.exports = {
    getAllBuildings,
    createBuilding,
    getBuilding,
    updateBuilding,
    deleteBuilding,
}
