const allBuildings = async (req) => {
    try {
        const { Building } = req.models;
        const buildings = await Building.find();
        return buildings;
    } catch (error) {
        throw error;
    }
}

const newBuilding = async (req) => {
    try {
        const { Building } = req.models;
        const buildingValues = req?.body;
        const building = new Building(buildingValues);
        await building.save();
        return building;
    } catch (error) {
        throw error;
    }
}

const retrieveBuilding = async (req) => {
    try {
        const { Building } = req.models;
        const building = await Building.findById(req.params.id);
        return building;
    }
    catch (error) {
        throw error;
    }
}

const modifyBuilding = async (req) => {
    try {
        const { Building } = req.models;
        const buildingValues = req?.body;
        const building = await Building.findByIdAndUpdate(req.params.id, buildingValues, { new: true });
        return building;
    } catch (error) {
        throw error;
    }
}

const archiveBuilding = async (req) => {
    try {
        const { Building } = req.models;
        const building = await Building.findByIdAndDelete(req.params.id);
        return building;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    allBuildings,
    newBuilding,
    retrieveBuilding,
    modifyBuilding,
    archiveBuilding,
}