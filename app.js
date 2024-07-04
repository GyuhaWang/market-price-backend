const express = require('express');
const dbConnect = require('./config/dbconnect');

const app = express();

dbConnect();

app.get('/', (req, res) => {
	res.send('hello world');
});

app.listen(3000, () => {
	console.log('서버 실행');
});
