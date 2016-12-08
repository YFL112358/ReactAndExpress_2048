const commonConfig = require('./webpack_common_config').default;
const webpack = require('./web/node_modules/webpack');

const toExport = {
	devtool: 'cheap-module-source-map',
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: { warnings: false },
			comments: false,
			sourceMap: false,
			mangle: true,
			minimize: true	
		}),
		new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js", Infinity)
	]
};

Object.assign(toExport, commonConfig);

module.exports = toExport;
