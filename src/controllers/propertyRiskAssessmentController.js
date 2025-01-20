const propertyRiskAssessmentService = require('./../services/propertyRiskAssessmentService');
const logger = require("./../logger/log");

const list = async (req, res) => {
    const { page = '1', limit = '10', search = '', sortBy = 'createdAt', sortOrder = 'asc' } = req.query;

    const params = {
        page: parseInt(page, 10),
        limit: parseInt(limit, 10),
        search,
        sortBy,
        sortOrder,
    };

    try {
        const data = await propertyRiskAssessmentService.list(req, params); // Pass req and params
        res.json({ data: { data } });
    } catch (error) {
        console.error('Error fetching property risk assessments:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};


const create = async (req, res) => {
    try {
        const data = await propertyRiskAssessmentService.create(req,req.body);
        res.status(201).json({ data: {data} });
    } catch (error) {
        logger.error('Error creating property risk assessment:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const update = async (req, res) => {
    const { id } = req.params;
    try {
        const data = await propertyRiskAssessmentService.update(req, id, req.body);
       if(!data){
          return res.status(404).json({ message: 'Property Risk Assessment not found' });
       }
        res.json({data:{data}});
    } catch (error) {
        logger.error('Error updating property risk assessment:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const view = async (req, res) => {
    const { id } = req.params;
    try {
        const data = await propertyRiskAssessmentService.view(req, id);
      if(!data) {
         return res.status(404).json({ message: 'Property Risk Assessment not found' });
       }
        res.json({data:{data}});
    } catch (error) {
        logger.error('Error fetching property risk assessment:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const deleteRecord = async (req, res) => {
    const { id } = req.params;
    try {
        const data = await propertyRiskAssessmentService.deleteRecord(req, id);
        if (!data) {
            return res.status(404).json({ message: 'Property Risk Assessment not found' });
        }
       res.json({data:{data}});
    } catch (error) {
        logger.error('Error deleting property risk assessment:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = {
    list,
    create,
    update,
    view,
    delete: deleteRecord
};