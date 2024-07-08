<h1>market price backend</h1>
<br>
<a href="https://market-price-ochre.vercel.app/">웹사이트</a>
<br>
<h2>FRAMEWORK&</h2>
<ul>
  <li>node js</li>
  <li>express</li>
  <li>MVC pattern</li>
</ul>
<br>
<h2>DB</h2>
<ul>
  <li>Mnogo DB</li>
  <li>Mongo DB cloud 사용</li>
</ul>
<ul>
  Mnogo DB schema
  <li>
    Product: {
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
	},
	{
		timeStamps: true,
	}
  </li>
</ul>
<br>
<h2>배포</h2>
<ul>
  <li>aws ec2</li>
</ul>
