const express = require('express');
const router = express.Router();

const objectDefinitionController = require('../controllers/objectDefinitionController');

router.get(`/:name`, objectDefinitionController.getObjectDefinition);
router.get(`/list`, objectDefinitionController.getAllObjectDefinitions);
router.post(`/create`, objectDefinitionController.createObjectDefinition);
router.put(`/:name/update`, objectDefinitionController.updateObjectDefinition);
router.delete(`/:name/delete`, objectDefinitionController.deleteObjectDefinition);

module.exports = router;