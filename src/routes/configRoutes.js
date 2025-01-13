const express = require('express');
const router = express.Router();

const configurationController = require('./../controllers/configController');

router.get(`/list`, configurationController.getAllConfigs);
router.post(`/create`, configurationController.createConfig);
router.get(`/:id/view`, configurationController.getConfig);
router.put(`/:id/update`, configurationController.updateConfig);
router.delete(`/:id/delete`, configurationController.deleteConfig);

module.exports = router;