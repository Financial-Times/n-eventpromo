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