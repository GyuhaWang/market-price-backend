const express = require('express');
const dbConnect = require('./config/dbconnect');

const app = express();
var cors = require('cors');
app.use(cors());
app.set('view engine', 'ejs');
app.set('views', './views');

dbConnect();

app.get('/', (req, res) => {
	res.send('hello world');
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/product', require('./routes/productRoutes'));

app.listen(3000, () => {
	console.log('서버 실행');
});
