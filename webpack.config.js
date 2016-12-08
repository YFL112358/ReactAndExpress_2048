const commonConfig = require('./webpack_common_config').default;
const webpack = require('./web/node_modules/webpack');

const toExport = {
	devtool: 'eval',
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('development')
			}
		}),
		new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js", Infinity)
	]
};

Object.assign(toExport, commonConfig);

module.exports = toExport;
