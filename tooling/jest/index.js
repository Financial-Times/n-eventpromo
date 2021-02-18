// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html
const {join} = require('path');
module.exports = {
	rootDir: join(__dirname, '../../'),
	coverageDirectory: 'coverage',
	testMatch: [
		'**/*.spec.{js,jsx}'
	],
	testPathIgnorePatterns: [
		'./node_modules/',
		'./bower_components/'
	],
	testEnvironment: 'jsdom', // Is default value, but here for clarity/explicitness
	testEnvironmentOptions: {
		url: 'https://example.org/current-path',
		referrer: 'https://example.com/referring-path',
	},
	transform: {
		'^.+\\.jsx?$': './tooling/babel/jest'
	},
	setupTestFrameworkScriptFile: './tooling/jest/setup',
	moduleNameMapper: {
		'\\.(css|less|scss)$': '<rootDir>/node_modules/jest-css-modules'
	}
};
