const { connect } = require("mongodb");
const mongoose = require("mongoose");
const initMongo = () => {
	mongoose
		.connect(
			"mongodb+srv://prem:premp007@cluster0.h6clm.mongodb.net/userdb?retryWrites=true&w=majority",
			{
				useNewUrlParser: true,
				useUnifiedTopology: true,
				useFindAndModify: false,
			}
		)
		.then(() => {
			console.log("connection Success");
		})
		.catch((err) => {
			console.log(err);
		});
};

module.exports = { initMongo };
