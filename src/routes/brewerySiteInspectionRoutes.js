const express = require('express');
const router = express.Router();
const brewerySiteInspectionController = require('../controllers/brewerySiteInspectionController');

router.get('/list', brewerySiteInspectionController.list);
router.post('/create', brewerySiteInspectionController.create);
router.put('/:id/update', brewerySiteInspectionController.update);
router.get('/:id/view', brewerySiteInspectionController.view);
router.delete('/:id', brewerySiteInspectionController.delete);

module.exports = router;