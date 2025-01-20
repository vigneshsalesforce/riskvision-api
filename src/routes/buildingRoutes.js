const express = require('express');
const router = express.Router();

const buildingController = require('../controllers/buildingController');

router.get(`/list`, buildingController.getAllBuildings);
router.post(`/create`, buildingController.createBuilding);
router.get(`/:id/view`, buildingController.getBuilding);
router.put(`/:id/update`, buildingController.updateBuilding);
router.delete(`/:id`, buildingController.deleteBuilding);

module.exports = router;


