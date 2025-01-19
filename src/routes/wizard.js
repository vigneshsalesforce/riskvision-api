const express = require('express');
const router = express.Router();

const wizardController = require('../controllers/wizardController');

router.get(`/:name`, wizardController.getObjectDefinition);

module.exports = router;