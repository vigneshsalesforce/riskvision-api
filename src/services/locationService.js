const allLocations = async (req) => {
    try {
        const { Location } = req.models;
        const locations = await Location.find();
        return locations;
    } catch (error) {
        throw error;
    }
}

const newLocation = async (req) => {
    try {
        const { Location } = req.models;
        const locationValues = req?.body;
        const location = new Location(locationValues);
        await location.save();
        return location;
    } catch (error) {
        throw error;
    }
}

const retrieveLocation = async (req) => {
    try {
        const { Location } = req.models;
        const location = await Location.findById(req.params.id);
        return location;
    }
    catch (error) {
        throw error;
    }
}

const modifyLocation = async (req) => {
    try {
        const { Location } = req.models;
        const locationValues = req?.body;
        const location = await Location.findByIdAndUpdate(req.params.id, locationValues, { new: true });
        return location;
    } catch (error) {
        throw error;
    }
}

const archiveLocation = async (req) => {
    try {
        const { Location } = req.models;
        const location = await Location.findByIdAndDelete(req.params.id);
        return location;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    allLocations,
    newLocation,
    retrieveLocation,
    modifyLocation,
    archiveLocation,
}