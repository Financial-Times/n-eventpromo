const resolve = require('@rollup/plugin-node-resolve').default;
const babel = require('@rollup/plugin-babel');
const postcss = require('rollup-plugin-postcss');
const replace = require('@rollup/plugin-replace');
const postcssConfig = require('./postcss-config');
const pkg = require('../../package');
const external = Object.keys(pkg.dependencies || {});

module.exports = {
	input: 'src/Eventpromo.jsx',
	output: {
		file: pkg.browser,
		format: 'cjs'
	},
	plugins: [
		postcss(postcssConfig(pkg.style)),
		resolve({
			extensions: ['.mjs', '.js', '.json', '.node', '.jsx']
		}),
		babel.babel(require('../babel').client),
		replace({
			_ROLLUP_REPLACE_ENVIRONMENT_: 'client'
		})
	],
	external
};
