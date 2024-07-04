const express = require('express');
const router = express.Router();
const {
	getAllProducts,
	createProduct,
	getProductById,
	updateProductById,
	deleteProduct,
} = require('../controllers/productController');

router.route('/').get(getAllProducts).post(createProduct);
router
	.route('/:id')
	.get(getProductById)
	.put(updateProductById)
	.delete(deleteProduct);

module.exports = router;
