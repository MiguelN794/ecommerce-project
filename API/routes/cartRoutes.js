const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');
const { jwtCheck } = require('../middlewares/auth');

router.get('/', jwtCheck, cartController.getCart);
router.post('/add', jwtCheck, cartController.addToCart);
router.post('/remove', jwtCheck, cartController.removeFromCart);

module.exports = router;
