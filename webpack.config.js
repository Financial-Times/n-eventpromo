const path = require('path');
const xEngine = require('@financial-times/x-engine/src/webpack');

module.exports = {
	entry: {
		demo: [
			'./demos/src/demo.js'
		],
		main: [
			'./src/index.js'
		]
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.(css|scss)$/,
				exclude: /(node_modules|bower_components)/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].css',
							outputPath: 'css/'
						}
					},
					{
						loader: 'extract-loader'
					},
					{
						loader: 'css-loader'
					},
					{
						loader: 'postcss-loader'
					},
					{
						loader: 'sass-loader',
						options: {
							'includePaths': [
								'node_modules',
								'bower_components',
								'src',
								'.'
							]
						}
					}
				]
			},
		]
	},
	resolve: {
		'alias': {
			'^react$': 'preact-compat',
			'react-dom$': 'preact-compat',
			'react-dom/server': 'preact-compat/server'
		}
	},
	plugins: [
		xEngine()
	]
};
