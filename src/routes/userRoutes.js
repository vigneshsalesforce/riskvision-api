const express = require('express');
const router = express.Router();

const userController = require('./../controllers/userController');

router.get(`/list`, userController.getAllUsers);
router.post(`/create`, userController.createUser);
router.get(`/:id/view`, userController.getUser);
router.put(`/:id/update`, userController.updateUser);
router.delete(`/:id/delete`, userController.deleteUser);

module.exports = router;