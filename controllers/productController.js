const asyncHandler = require('express-async-handler');
const Product = require('../models/productModel');
//Get all Products
//Get/Products

const getAllProducts = asyncHandler(async (req, res) => {
	const product = await Product.find();
	res.send(product);
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

const getProductById = asyncHandler(async (req, res) => {
	const product = await Product.findById(req.params.id);
	res.send(Product);
});

const updateProductById = asyncHandler(async (req, res) => {
	const { region, category, name, price, description, imageURL } = req.body;
	if (!region || !name || !category || !price || !description) {
		return res.send('필수 값이 입력되지 않았습니다.');
	}
	const product = await Product.findById(req.params.id);
	if (!product) {
		throw new Error('Product not found');
	}
	product.name = name;
	product.region = region;
	product.category = category;
	product.name = name;
	product.price = price;
	product.description = description;
	product.imageURL = imageURL;

	Product.save();
	res.send(Product);
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
	getProductById,
	updateProductById,
	deleteProduct,
};
