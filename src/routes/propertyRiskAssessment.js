const express = require('express');
const router = express.Router();
const propertyRiskAssessmentController = require('../controllers/propertyRiskAssessmentController');

router.get('/list', propertyRiskAssessmentController.list);
router.post('/create', propertyRiskAssessmentController.create);
router.put('/:id/update', propertyRiskAssessmentController.update);
router.get('/:id/view', propertyRiskAssessmentController.view);
router.delete('/:id', propertyRiskAssessmentController.delete);

module.exports = router;