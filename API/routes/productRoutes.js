const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const { requiresAuth, jwtCheck } = require('../middlewares/auth');

router.get('/', productController.getAllProducts);
router.post('/', jwtCheck, productController.createProduct);
router.put('/:id', jwtCheck, productController.updateProduct);
router.delete('/:id', jwtCheck, productController.deleteProduct);

module.exports = router;
