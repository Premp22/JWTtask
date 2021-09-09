const indexRoute = require("./users");
module.exports = (app) => {
	app.use("/", indexRoute);
};
