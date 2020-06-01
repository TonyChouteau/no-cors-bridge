const express = require("express");
const axios = require("axios");

const PORT = 7777;
const HOST = "http://localhost";

const app = express();
var router = express.Router();

router.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Origin, X-Requested-With, Content-Type, Accept");
	next();
});

router.get('*', function(req, res) {
	let url = req.url.split(HOST+":"+PORT+"/").join("").replace("/http", "http")
	console.log("\nNew Request : "+url+"\n========================");
	axios.get(url)
	.then(response => {
		console.log(response.data+"\n\n========================");	
		res.send(response.data)
	})
	.catch(error => {
		console.log(error+"\n\n========================");
		res.send(error);
	});
});

app.use('/', router);

app.listen(PORT, function () {
	console.log("App listening on port "+PORT+" !");
});
