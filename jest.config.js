module.exports = {
	coveragePathIgnorePatterns: [
	    '/node_modules/',
        '/bower_components/'
    ],
    testPathIgnorePatterns: [
        '/node_modules/',
        '/bower_components/'
    ],
	//testEnvironment: 'node',
	testURL: 'http://localhost/',
    moduleNameMapper: {
        react: 'preact-compat',
        'react-dom': 'preact-compat'
    }
};
