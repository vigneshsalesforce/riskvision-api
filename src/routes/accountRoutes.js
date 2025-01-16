const express = require('express');
const router = express.Router();

const accountController = require('../controllers/accountController');

router.get(`/list`,accountController.getAllAccounts);
router.post(`/create`,accountController.createAccount);
router.get(`/:id/view`,accountController.getAccount);
router.put(`/:id/update`,accountController.updateAccount);
router.delete(`/:id`,accountController.deleteAccount);

module.exports = router;
