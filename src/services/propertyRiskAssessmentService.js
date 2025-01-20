const logger = require("./../logger/log");
const { default: mongoose } = require('mongoose');

const list = async (req, { page = 1, limit = 10, search, sortBy, sortOrder }) => {
    try {
        const { propertyRiskAssessment } = req.models;
        let query = {
            IsDeleted: false
        };
        if (search) {
            query = {
                ...query,
                $or: [
                    { Name: { $regex: search, $options: 'i' } },
                ],
            };
        }

        let sort = {};
        if (sortBy && sortOrder) {
            sort[sortBy] = sortOrder === 'asc' ? 1 : -1;
        } else {
            sort = { createdAt: -1 };
        }
        const total = await propertyRiskAssessment.countDocuments(query);
        const propertyRiskAssessments = await propertyRiskAssessment.find(query)
            .sort(sort)
            .skip((page - 1) * limit)
            .limit(limit);
            return {
               data: propertyRiskAssessments,
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
        const { propertyRiskAssessment } = req.models;
        const propertyRiskAssessmentData = new propertyRiskAssessment(data)
        return await propertyRiskAssessmentData.save();
    } catch (error) {
        logger.error('Error creating property risk assessment:', error);
        throw error;
    }
};

const update = async (req, id, data) => {
    try {
        const { propertyRiskAssessment } = req.models;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return null
        }
        return await propertyRiskAssessment.findByIdAndUpdate(id, data, { new: true });
    } catch (error) {
        logger.error('Error updating property risk assessment:', error);
        throw error;
    }
};

const view = async (req, id) => {
    try {
        const { propertyRiskAssessment } = req.models;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return null
        }
        return await propertyRiskAssessment.findById(id);
    } catch (error) {
        logger.error('Error viewing property risk assessment:', error);
        throw error;
    }
};

const deleteRecord = async (req, id) => {
    try {
        const { propertyRiskAssessment } = req.models;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return null;
        }
        return await propertyRiskAssessment.findByIdAndDelete(id);
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