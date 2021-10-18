const mongoose = require("mongoose");
const validator = require("validator");
const authSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		min: 2,
	},
	email: {
		type: String,
		required: true,
		unique: true,
		validate(value) {
			if (!validator.isEmail(value)) {
				throw new Error("not a email");
			}
		},
	},
	password: {
		type: String,
		required: true,
	},
});
module.exports = new mongoose.model("Auth", authSchema);
