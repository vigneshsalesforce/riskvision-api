const allUsers = async (req) => {
    try {
        const { user } = req.models;
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
            { name: { $regex: search, $options: 'i' } }, // Case-insensitive search on 'name'
          ],
        }
      : {};

    // Convert page and limit to integers
    const pageInt = parseInt(page, 10);
    const limitInt = parseInt(limit, 10);

     // Calculate skip for pagination
     const skip = (pageInt - 1) * limitInt;
  
     // Fetch data with pagination, search, and sorting
     const users = await user
       .find(searchQuery)
       .sort({ [sortBy]: sortOrder === 'asc' ? 1 : -1 })
       .skip(skip)
       .limit(limitInt);

     // Count total documents matching the search query
     const totalusers = await user.countDocuments(searchQuery);

      // Prepare response with pagination metadata
      return {
        data: users,
        pagination: {
          currentPage: pageInt,
          pageSize: limitInt,
          totalRecords: totalusers,
          totalPages: Math.ceil(totalusers / limitInt),
        },
      };

    } catch (error) {
        throw error;
    }
}

const newUser = async (req) => {
    try {
        const { user } = req.models;
        const userValues = req?.body;
        const users = new user(userValues);
        await users.save();
        return users;
    } catch (error) {
        throw error;
    }
}

const retrieveUser = async (req) => {
    try {
        const { user } = req.models;
        const users = await user.findById(req.params.id);
        return users;
    } catch (error) {
        throw error;
    }
}

const modifyUser = async (req) => {
    try {
        const { user } = req.models;
        const userValues = req?.body;
        const users = await user.findByIdAndUpdate(req.params.id, userValues, { new: true });
        return users;
    } catch (error) {
        throw error;
    }
}

const archiveUser = async (req) => {
    try {
        const { user } = req.models;
        const users = await user.findByIdAndDelete(req.params.id);
        return users;
    }
    catch (error) {
        throw error;
    }
}

const retrieveUserProfiles = async (req) => {
    try {
        const { profile } = req.models;
        const userProfiles = await profile.find();
        return userProfiles;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    allUsers,
    newUser,
    retrieveUser,
    modifyUser,
    archiveUser,
    retrieveUserProfiles,
}