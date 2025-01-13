const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/google', authController.googleAuth);
router.get('/google/callback', authController.googleAuthCallback);
router.get('/me', authMiddleware, authController.getMe);

module.exports = router;