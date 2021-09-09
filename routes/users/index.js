var express = require("express");

var router = express.Router();
const controller = require("./users.controller");

/* GET users listing. */

router.post("/", controller.createUser);
router.get("/", controller.listAllUsers);
router.get("/:userId", controller.listOneUser);
router.patch("/:userId", controller.updateUser);
router.delete("/:userId", controller.deleteUser);
module.exports = router;
