const { error } = require("console");
var express = require("express");
var path = require("path");
var router = express.Router();
const User = require("../../models/user.model");

let createUser = (req, res, next) => {
	const user = new User({
		id: req.body.id,
		firstname: req.body.firstname,
		lastname: req.body.lastname,
		email: req.body.email,
		password: req.body.password,
	});
	console.log(req.body);
	user
		.save()
		.then(() => {
			res.send(user);
		})
		.catch((err) => {
			res.send(err);
		});
};

let listAllUsers = async (req, res, next) => {
	try {
		const usersdata = await User.find();
		res.send(usersdata);
	} catch (error) {
		res.send(error);
	}
};
let listOneUser = async (req, res, next) => {
	try {
		const id = req.params.userId;
		const usersdata = await User.findOne({ id: id });

		if (!usersdata) {
			return res.status(404).send();
		} else {
			res.send(usersdata);
		}
	} catch (error) {
		res.status(404).send(error);
	}
};

let updateUser = async (req, res, next) => {
	try {
		const id = req.params.userId;
		const updatedata = await User.findOneAndUpdate(
			{ id: id },
			req.body,

			{
				new: true,
			}
		);

		if (!updatedata) {
			return res.status(404).send();
		} else {
			res.send(updatedata);
		}
	} catch (error) {
		res.send(error);
	}
};
let deleteUser = async (req, res, next) => {
	try {
		const id = req.params.userId;
		const deletedata = await User.findOneAndDelete({ id: id });
		console.log(deletedata);
		if (!id) {
			return res.status(404).send(error);
		} else {
			res.send(`The deleted id is ${id}`);
		}
	} catch (error) {
		res.status(404).send(error);
	}
};
module.exports = {
	createUser,
	listAllUsers,
	listOneUser,
	updateUser,
	deleteUser,
};
