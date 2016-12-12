const constants = require('./constants');
const path = require('path');
const webModuleAbsPath = path.resolve('./web/node_modules');

const commonConfig = {
	resolve: {
		root:  [
			webModuleAbsPath
		]
	},
	resolveLoader: {
		root: webModuleAbsPath // this helps to resolve loader names, e.g. 'babel-loader'
	},
	entry: {
		test: './test.web.js',
		game: './game.web.js',
    vendor: ["react", "react-dom", "history", "whatwg-fetch", "babel-polyfill"]
  },
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
				query: {
					presets: [
						require.resolve(webModuleAbsPath + '/babel-preset-react'),
						require.resolve(webModuleAbsPath + '/babel-preset-es2015'),
					],
				}
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			},
			{
				test: /\.scss$/,
				loader: 'style-loader!css-loader!sass-loader'
			},
			{ 
				test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
				loader: 'file-loader?name=fonts/[name].[ext]'
			}
		]
	},
	output: {
		path: './web/bin',
		publicPath: constants.ROUTE_PATHS.BASE + '/bin/', // NOTE: For chunk loading.
		filename: '[name].bundle.js',
		chunkFilename: '[name].bundle.js'
	}
};

exports.default = commonConfig;
