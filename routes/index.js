var express = require("express");

var router = express.Router();
const controller = require("./controller");

/* GET users listing. */
router.get("/", controller.begin);
router.post("/users", controller.CreateUser);
router.get("/users", controller.listAllUsers);
router.get("/users/:userId", controller.listOneUser);
router.patch("/users/:userId", controller.updateUser);
router.delete("/users/:userId", controller.deleteUser);
module.exports = router;
