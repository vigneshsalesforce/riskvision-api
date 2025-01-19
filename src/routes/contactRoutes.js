const express = require('express');
const router = express.Router();

const contactController = require('./../controllers/contactController');

router.get(`/list`, contactController.getAllContacts);
router.post(`/create`, contactController.createContact);
router.get(`/:id/view`, contactController.getContact);
router.put(`/:id/update`, contactController.updateContact);
router.delete(`/:id`, contactController.deleteContact);

module.exports = router;