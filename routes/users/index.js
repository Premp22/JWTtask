var express = require("express");
const authenticate = require("../auth/verifyToken");
var router = express.Router();
const controller = require("./users.controller");

/* GET users listing. */

router.post("/", authenticate, controller.createUser);
router.get("/", authenticate, controller.listAllUsers);
router.get("/:userId", authenticate, controller.listOneUser);
router.patch("/:userId", authenticate, controller.updateUser);
router.delete("/:userId", authenticate, controller.deleteUser);
module.exports = router;
