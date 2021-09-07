const { connect } = require("mongodb");
const mongoose = require("mongoose");
mongoose
	.connect("mongodb://localhost:27017/studentdb", {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
	})
	.then(() => {
		console.log("connection Success");
	})
	.catch((err) => {
		console.log(err);
	});
