const allLocations = async (req) => {
    try {
        const { location } = req.models;
    
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
        const locations = await location
          .find(searchQuery)
          .sort({ [sortBy]: sortOrder === 'asc' ? 1 : -1 })
          .skip(skip)
          .limit(limitInt);
    
        // Count total documents matching the search query
        const totallocations = await location.countDocuments(searchQuery);
    
        // Prepare response with pagination metadata
        return {
          data: locations,
          pagination: {
            currentPage: pageInt,
            pageSize: limitInt,
            totalRecords: totallocations,
            totalPages: Math.ceil(totallocations / limitInt),
          },
        };
      } catch (error) {
        throw error;
      }
}

const newLocation = async (req) => {
    try {
        const { location } = req.models;
        const locationValues = req?.body;
        const locations = new location(locationValues);
        await locations.save();
        return locations;
    } catch (error) {
        throw error;
    }
}

const retrieveLocation = async (req) => {
    try {
        const { location } = req.models;
        const locations = await location.findById(req.params.id);
        return locations;
    }
    catch (error) {
        throw error;
    }
}

const modifyLocation = async (req) => {
    try {
        const { location } = req.models;
        const locationValues = req?.body;
        const locations = await location.findByIdAndUpdate(req.params.id, locationValues, { new: true });
        return locations;
    } catch (error) {
        throw error;
    }
}

const archiveLocation = async (req) => {
    try {
        const { location } = req.models;
        await location.findByIdAndDelete(req.params.id);
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