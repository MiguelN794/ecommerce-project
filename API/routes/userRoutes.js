const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { requiresAuth, jwtCheck } = require('../middlewares/auth');

router.get('/profile', jwtCheck, userController.getUserProfile);
router.put('/profile', jwtCheck, userController.updateUserProfile);

module.exports = router;
