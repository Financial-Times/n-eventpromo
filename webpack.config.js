const path = require('path');
const xEngine = require('@financial-times/x-engine/src/webpack');

const webpackConfig = (env) => {
    const commonConfig = {
        entry: {
            demo: [
                './demos/src/demo.js'
            ],
                main: [
                './src/index.js'
            ]
        },
        resolve: {
            extensions: ['*', '.js', '.jsx']
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
                filename: '[name].js'
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /(node_modules)/,
                    use: {
                        loader: 'babel-loader'
                    }
                },
            ]
        },
        plugins: [
            xEngine()
        ]
    };
    if (env === 'production') {
        const prodConfig = {
            externals: {
                'o-date': 'oDate',
                '@financial-times/x-engine': 'xEngine'
            }
        };
        return { ...commonConfig, ...prodConfig };
    }
    return commonConfig;
};

module.exports = webpackConfig;