const express = require('express');
const router = express.Router();
const {
	getAllProducts,
	createProduct,
	getProductById,
	updateProductById,
	deleteProduct,
	getAveragePrice,
} = require('../controllers/productController');

router.route('/').get(getAllProducts).post(createProduct);
router
	.route('/:id')
	.put(updateProductById)
	.delete(deleteProduct);
router.route('/average').get(getAveragePrice);
module.exports = router;
