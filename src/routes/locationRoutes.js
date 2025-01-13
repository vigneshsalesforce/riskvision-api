const express = require('express');
const router = express.Router();

const locationController = require('./../controllers/locationController');

router.get(`/list`, locationController.getAllLocations);
router.post(`/create`, locationController.createLocation);
router.get(`/:id/view`, locationController.getLocation);
router.put(`/:id/update`, locationController.updateLocation);
router.delete(`/:id/delete`, locationController.deleteLocation);

module.exports = router;