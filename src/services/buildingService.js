const allBuildings = async (req) => {
    try {
        const { building } = req.models;
    
        // Extract query parameters from the request
        const {
          page = 1, // Default to page 1
          limit = 10, // Default to 10 items per page
          search = '', // Default to no search
          sortBy = 'createdAt', // Default sorting field
          sortOrder = 'desc', // Default sorting order
        } = req.query;
    
        // Build the query for search
        const searchQuery = search
          ? {
              $or: [
                { Name: { $regex: search, $options: 'i' } }, // Case-insensitive search on 'name'
              ],
            }
          : {};
    
        // Convert page and limit to integers
        const pageInt = parseInt(page, 10);
        const limitInt = parseInt(limit, 10);
    
        // Calculate skip for pagination
        const skip = (pageInt - 1) * limitInt;
    
        // Fetch data with pagination, search, and sorting
        const buildings = await building
          .find(searchQuery)
          .sort({ [sortBy]: sortOrder === 'asc' ? 1 : -1 })
          .skip(skip)
          .limit(limitInt);
    
        // Count total documents matching the search query
        const totalbuildings = await building.countDocuments(searchQuery);
    
        // Prepare response with pagination metadata
        return {
          data: buildings,
          pagination: {
            currentPage: pageInt,
            pageSize: limitInt,
            totalRecords: totalbuildings,
            totalPages: Math.ceil(totalbuildings / limitInt),
          },
        };
      } catch (error) {
        throw error;
      }
}

const newBuilding = async (req) => {
    try {
        const { building } = req.models;
        const buildingValues = req?.body;
        const buildings = new building(buildingValues);
        await buildings.save();
        return buildings;
    } catch (error) {
        throw error;
    }
}

const retrieveBuilding = async (req) => {
    try {
        const { building } = req.models;
        const buildings = await building.findById(req.params.id);
        return buildings;
    }
    catch (error) {
        throw error;
    }
}

const modifyBuilding = async (req) => {
    try {
        const { building } = req.models;
        const buildingValues = req?.body;
        const buildings = await building.findByIdAndUpdate(req.params.id, buildingValues, { new: true });
        return buildings;
    } catch (error) {
        throw error;
    }
}

const archiveBuilding = async (req) => {
    try {
        const { building } = req.models;
        const buildings = await building.findByIdAndDelete(req.params.id);
        return buildings;
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