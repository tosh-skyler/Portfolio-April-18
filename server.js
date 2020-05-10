const express = require("express");

const app = express()
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/public/"));

app.listen(PORT, function () {
	console.log("App listening on: http://localhost:" + PORT);
  });
  