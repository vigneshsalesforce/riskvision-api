const allContacts = async (req) => {
    try {
        const { contact } = req.models;
    
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
        const contacts = await contact
          .find(searchQuery)
          .sort({ [sortBy]: sortOrder === 'asc' ? 1 : -1 })
          .skip(skip)
          .limit(limitInt);
    
        // Count total documents matching the search query
        const totalcontacts = await contact.countDocuments(searchQuery);
    
        // Prepare response with pagination metadata
        return {
          data: contacts,
          pagination: {
            currentPage: pageInt,
            pageSize: limitInt,
            totalRecords: totalcontacts,
            totalPages: Math.ceil(totalcontacts / limitInt),
          },
        };
      } catch (error) {
        throw error;
      }
}

const newContact = async (req) => {
    try {
        const { contact } = req.models;
        const contactValues = req?.body;
        const contacts = new contact(contactValues);
        await contacts.save();
        return contacts;
    } catch (error) {
        throw error;
    }
}

const retrieveContact = async (req) => {
    try {
        const { contact } = req.models;
        const contacts = await contact.findById(req.params.id);
        return contacts;
    } catch (error) {
        throw error;
    }
}

const modifyContact = async (req) => {
    try {
        const { contact } = req.models;
        const contactValues = req?.body;
        const contacts = await contact.findByIdAndUpdate(req.params.id, contactValues, { new: true });
        return contacts;
    } catch (error) {
        throw error;
    }
}

const archiveContact = async (req) => {
    try {
        const { contact } = req.models;
        const contacts = await contact.findByIdAndDelete(req.params.id);
        return contacts;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    allContacts,
    newContact,
    retrieveContact,
    modifyContact,
    archiveContact,
}