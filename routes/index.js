const indexRoute = require("./users");
module.exports = (app) => {
	app.use("/users", indexRoute);
};
