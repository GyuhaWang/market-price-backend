const asyncHandler = require('express-async-handler');
const Product = require('../models/productModel');
//Get all Products
//Get/Products

const getAllProducts = asyncHandler(async (req, res) => {
	const { region, category, search } = req.query;
	const query = {};
	if (region) {
		query['region'] = region;
	}
	if (category) {
		query['category'] = category;
	}
	if (search) {
		query['name'] = { $regex: search, $options: 'i' };
	}
	console.log(query);
	const product = await Product.find(query).sort({ _id: -1 });
	res.json(product);
});

//Create Product
const createProduct = asyncHandler(async (req, res) => {
	console.log(req.body);
	const { region, category, name, price, description, imageURL } = req.body;
	if (!region || !name || !category || !price || !description) {
		return res.send('필수 값이 입력되지 않았습니다.');
	}
	const product = await Product.create({
		region,
		category,
		name,
		price,
		description,
		imageURL,
	});
	res.send('Create Product');
});

const getAveragePrice = asyncHandler(async (req, res) => {
	const { region, category, search } = req.query;
	const query = {};
	if (region) {
		query['region'] = region;
	}
	if (category) {
		query['category'] = category;
	}
	if (search) {
		query['name'] = { $regex: search, $options: 'i' };
	}
	console.log(query);
	const result = await Product.aggregate([
		{ $match: query },
		{ $group: { _id: '$region', averagePrice: { $avg: '$price' } } },
	]);

	if (result.length === 0) {
		return res.json({ averagePrice: 0 });
	}

	res.json({ averagePrice: result[0].averagePrice });
});
// desperated

const updateProductLikeById = asyncHandler(async (req, res) => {
	const product = await Product.findById(req.params.id);
	if (!product) {
		throw new Error('Product not found');
	}
	await Product.updateOne(
		{ _id: req.params.id },
		{ $set: { like: product.like + 1 } }
	);
	// product.like = product.like + 1;
	// Product.save();
	res.send('updated');
});

const deleteProduct = asyncHandler(async (req, res) => {
	const product = await Product.findById(req.params.id);
	if (!product) {
		throw new Error('Product not found');
	}
	await product.deleteOne();
	res.send('deleted');
});
module.exports = {
	getAllProducts,
	createProduct,
	updateProductLikeById,
	deleteProduct,
	getAveragePrice,
};
