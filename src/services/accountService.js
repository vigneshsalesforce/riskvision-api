const allAccounts = async (req) => {
    try {
      const { account } = req.models;
  
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
              { address: { $regex: search, $options: 'i' } }, // Case-insensitive search on 'address'
            ],
          }
        : {};
  
      // Convert page and limit to integers
      const pageInt = parseInt(page, 10);
      const limitInt = parseInt(limit, 10);
  
      // Calculate skip for pagination
      const skip = (pageInt - 1) * limitInt;
  
      // Fetch data with pagination, search, and sorting
      const accounts = await account
        .find(searchQuery)
        .sort({ [sortBy]: sortOrder === 'asc' ? 1 : -1 })
        .skip(skip)
        .limit(limitInt);
  
      // Count total documents matching the search query
      const totalAccounts = await account.countDocuments(searchQuery);
  
      // Prepare response with pagination metadata
      return {
        data: accounts,
        pagination: {
          currentPage: pageInt,
          pageSize: limitInt,
          totalRecords: totalAccounts,
          totalPages: Math.ceil(totalAccounts / limitInt),
        },
      };
    } catch (error) {
      throw error;
    }
  };
  

const newAccount = async (req) => {
    try{
        const {account} = req.models;
        const newAccount = new account(req.body);
        await newAccount.save();
        return newAccount;
    } catch(error){
        throw error;
    }
}

const retrieveAccount = async (req) => {
    try{
        const {account} = req.models;
        const getAccount = await account.findById(req.params.id);
        return getAccount;
    } catch(error){
        throw error;
    }
}

const modifyAccount = async (req) => {
    try{
        const {account} = req.models;
        const modifiedAccount = await account.findByIdAndUpdate(req.params.id, req.body, {new: true});
        return modifiedAccount;

    } catch(error){
        throw error;
    }
}

const archiveAccount = async (req) => {
    try{
        const {Account} = req.tenantDb.models;
        const account = await Account.findByIdAndUpdate(req.params.id, {isArchived: true}, {new: true});
        return account;
    } catch(error){
        throw error;
    }
}

module.exports = {
    allAccounts,
    newAccount,
    retrieveAccount,
    modifyAccount,
    archiveAccount
}