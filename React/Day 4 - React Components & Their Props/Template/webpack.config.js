const path = require("path");
const fs = require("fs-extra");

require("./util/modifyAppJs")();

const Webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const isProduction = process.env.npm_lifecycle_event.includes("build");

const _htmlPageConfigs = fs.readJsonSync("./data/html.pages.json");

const pages = fs.readdirSync("./src/pages").filter((file) => file.endsWith(".js"));

const _HtmlWebpackPlugin = [...new Array(pages.length)].map((_, i) => {
	return new HtmlWebpackPlugin({
		title: `${_htmlPageConfigs[i].title}`,
		filename: `pages/${_htmlPageConfigs[i].filename}.html`,
		templateParameters: _htmlPageConfigs[i],
		template: "./util/template/index.hbs",
	});
});

const commonPlugins = [
	..._HtmlWebpackPlugin,
	new MiniCssExtractPlugin({
		filename: "css/[name].css",
	}),
	new CopyWebpackPlugin({
		patterns: [
			{
				from: "assets",
				to: "assets",
			},
		],
	}),
];

const devPlugins = [new Webpack.HotModuleReplacementPlugin()];

const commonConfig = {
	mode: "development",
	entry: {
		index: path.resolve(__dirname, "src/index.js"),
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "js/[name].js",
		clean: true,
		assetModuleFilename: "[name][ext]",
	},

	// Rules of how webpack will take our files, complie & bundle them for the browser
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: {
				  loader: "babel-loader",
				  options: {
					presets: ["@babel/preset-env", "@babel/preset-react"],
				  },
				},
			  },
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env", "@babel/preset-react"],
						plugins: ["@babel/plugin-transform-runtime"],
					},
				},
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: "asset/resource",
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif|eot|ttf|woff|woff2)$/i,
				type: "asset/inline",
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader", // Compiles Sass to CSS
					"sass-loader",
				],
			},
			{
				test: /\.json5$/i,
				loader: "json5-loader",
				options: {
					esModule: true,
				},
				type: "javascript/auto",
			},
			{ test: /\.(handlebars|hbs)$/, loader: "handlebars-loader" },
		],
	},
};

const devConfig = {
	...commonConfig,
	devtool: "eval-source-map",
	devServer: {
		static: {
			directory: path.resolve(__dirname, "dist/pages"),
			watch: true,
		},
		open: true,
		port: 3000,
	},
	plugins: [...commonPlugins, ...devPlugins],
};

const prodConfig = {
	...commonConfig,
	optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin({
				extractComments: false,
				terserOptions: {
					format: {
						comments: false,
					},
				},
			}),
		],
	},
	plugins: [...commonPlugins],
};

const mainConfig = isProduction
	? {
			...prodConfig,
	  }
	: {
			...devConfig,
	  };

module.exports = mainConfig;
