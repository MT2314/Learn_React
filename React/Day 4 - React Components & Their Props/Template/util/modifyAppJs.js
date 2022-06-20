const fs = require("fs-extra");
const Handlebars = require("handlebars");

const modifyAppJs = () => {
	const pages = fs
		.readdirSync("./src/pages")
		.filter((file) => file.endsWith(".js"))
		.map((file) => file.replace(".js", ""));

	const isProduction = process.env.npm_lifecycle_event.includes("build");

	const template = fs.readFileSync(
		`./util/template/App.${isProduction ? "prod" : "dev"}.hbs`,
		"utf8"
	);

	const app = Handlebars.compile(template)({ pages });

	fs.writeFileSync("./src/App.js", app);
};

module.exports = modifyAppJs;
