const express = require("express")
const PORT = 3500
const app = express()

app.get("/", function (_req, res) {
	return res.json([
		{
			"name": "Doe",
			email: "Doe@gmail.com"
		},
		{
			"name": "Sonia",
			email: "Sonia@gmail.com"
		},
		{
			"name": "Ivan",
			email: "Ivan@gmail.com"
		},
		{
			"name": "Doe",
			email: "Doe@gmail.com"
		},
		{
			"name": "Doe",
			email: "Doe@gmail.com"
		}
	])
})

app.listen(PORT, function () {
	console.log("server is running on port : ", PORT)
})


