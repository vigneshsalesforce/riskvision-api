const express = require('express');
const router = express.Router();

const riskDataController = require('./../controllers/riskDataController');

router.get(`/list`, riskDataController.getAllRiskData);
router.post(`/create`, riskDataController.createRiskData);
router.get(`/:id/view`, riskDataController.getRiskData);
router.put(`/:id/update`, riskDataController.updateRiskData);
router.delete(`/:id/delete`, riskDataController.deleteRiskData);

module.exports = router;