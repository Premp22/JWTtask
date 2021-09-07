const indexRoute = require("./index");
module.exports = (app) => {
	app.use("/", indexRoute);
};
