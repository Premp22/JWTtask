const mongoose = require("mongoose");
const validator = require("validator");
const userSchema = new mongoose.Schema({
	id: {
		type: Number,
		required: true,
	},
	firstname: {
		type: String,
		required: true,
		min: 2,
	},
	lastname: {
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
const users = new mongoose.model("users", userSchema);
module.exports = users;
