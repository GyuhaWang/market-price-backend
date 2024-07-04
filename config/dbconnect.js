//데이터 베이스 연결하는 모듈
const mongoose = require('mongoose');
require('dotenv').config();

//비동기 처리를 해줘야함

const dbConnect = async () => {
	try {
		const connect = await mongoose.connect(process.env.DB_CONNECT);
		console.log('DB Connected');
	} catch (err) {
		console.log(err);
	}
};

module.exports = dbConnect;
