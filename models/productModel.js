const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
	{
		region: {
			type: String,
			required: true,
		},
		category: {
			type: String,
			required: true,
		},
		name: {
			type: String,
			required: true,
		},
		price: {
			type: Number,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		imageURL: {
			type: String,
		},
		like: {
			type: Number,
			default: 0,
			required: true,
		},
	},
	{
		timeStamps: true,
	}
);

//스키마 -> 모델 mongoose.model(모델명,스키마명)

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
