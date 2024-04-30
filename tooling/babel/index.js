exports.client = {
	exclude: 'node_modules/**',
	presets: [
		[
			'@babel/preset-env',
			{
				targets: 'last 1 version or > 1%, not dead',
				exclude: ['transform-regenerator', 'transform-async-to-generator']
			}
		],
		[
			'@babel/preset-react',
			{
				pragma: 'xEngine.h'
			}
		]
	]
};

exports.server = {
	exclude: 'node_modules/**',
	presets: [
		[
			'@babel/preset-env',
			{
				targets: {
					node: 18
				}
			}
		],
		[
			'@babel/preset-react',
			{
				pragma: 'xEngine.h'
			}
		]
	]
};
