const path = require('path');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = {
	mode: 'production',
	entry: {
		main: path.resolve('./src', 'convert.js'),
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'Convert.js',
		library: {
			name: 'Convertjs',
			type: 'var',
		},
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							[
								'@babel/preset-env',
								{
									useBuiltIns: 'usage',
								},
							],
						],
					},
				},
			},
		],
	},
	plugins: [new NodePolyfillPlugin()],
};
