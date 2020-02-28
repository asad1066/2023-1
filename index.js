const express = require('express')
const app = express()
const port = 1501
const attendace = [];

app.get('/', (req, res) => {
	let query = req.query;
	attendace.push(query.name);
	console.log(attendace); 
	res.send(query)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))