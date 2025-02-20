const logger = require("./../logger/log");
const { default: mongoose } = require('mongoose');

const list = async (req, { page = 1, limit = 10, search, sortBy, sortOrder }) => {
    try {
        const { brewerySite } = req.models;
        let query = {
            IsDeleted: false
        };
        if (search) {
            query = {
                ...query,
                $or: [
                    { BrewerySiteInspectionName: { $regex: search, $options: 'i' } },
                ],
            };
        }

        let sort = {};
        if (sortBy && sortOrder) {
            sort[sortBy] = sortOrder === 'asc' ? 1 : -1;
        } else {
            sort = { createdAt: -1 };
        }
        const total = await brewerySite.countDocuments(query);
        const brewerySites = await brewerySite.find(query)
            .sort(sort)
            .skip((page - 1) * limit)
            .limit(limit);
            return {
               data: brewerySites,
               pagination: {
                currentPage: page,
                pageSize: limit,
                totalRecords: total,
                totalPages: Math.ceil(total / limit),
              },

         };
    } catch (error) {
        logger.error('Error listing property risk assessments:', error);
        throw error;
    }
};

const create = async (req, data) => {
    try {
        const { brewerySite } = req.models;
        const brewerySiteData = new brewerySite(data)
        return await brewerySiteData.save();
    } catch (error) {
        logger.error('Error creating property risk assessment:', error);
        throw error;
    }
};

const update = async (req, id, data) => {
    try {
        const { brewerySite } = req.models;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return null
        }
        return await brewerySite.findByIdAndUpdate(id, data, { new: true });
    } catch (error) {
        logger.error('Error updating property risk assessment:', error);
        throw error;
    }
};

const view = async (req, id) => {
    try {
        const { brewerySite } = req.models;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return null
        }
        return await brewerySite.findById(id);
    } catch (error) {
        logger.error('Error viewing property risk assessment:', error);
        throw error;
    }
};

const deleteRecord = async (req, id) => {
    try {
        const { brewerySite } = req.models;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return null;
        }
        return await brewerySite.findByIdAndDelete(id);
    } catch (error) {
        logger.error('Error deleting property risk assessment:', error);
        throw error;
    }
};

module.exports = {
    list,
    create,
    update,
    view,
    deleteRecord
};