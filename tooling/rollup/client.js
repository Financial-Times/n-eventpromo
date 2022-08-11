import { nodeResolve as resolve } from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel';
const postcss = require('rollup-plugin-postcss');
import replace from '@rollup/plugin-replace';
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
			extensions: [
				'.mjs',
				'.js',
				'.json',
				'.node',
				'.jsx'
			]
		}),
		babel(require('../babel').client),
		replace({
			'_ROLLUP_REPLACE_ENVIRONMENT_': 'client'
		})
	],
	external
};
