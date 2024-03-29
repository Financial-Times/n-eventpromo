const path = require('path');

module.exports = (style) => {
	return {
		extract: style,
		modules: true,
		use: [
			[
				'sass',
				{
					includePaths: [
						path.resolve(process.cwd(), 'node_modules'),
						path.resolve(process.cwd(), 'node_modules/@financial-times')
					]
				}
			],
			'stylus',
			'less'
		]
	};
};
