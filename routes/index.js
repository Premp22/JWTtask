const indexRoute = require("./users");
const authRoute = require("./auth/index");
module.exports = (app) => {
	app.use("/users", indexRoute);
	app.use("/auth", authRoute);
};
