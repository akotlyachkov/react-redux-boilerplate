const webpack = require('webpack'),
    path = require('path');

module.exports = {
    entry: {
        app: './client/app/root.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './client/build')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["source-map-loader"],
                enforce: "pre"
            },
        ]
    },
    externals: {
        React: 'react',
        ReactRedux: 'react-redux',
        ReactDOM: 'react-dom',
        ReactRouterDOM: 'react-router-dom',
        Redux: 'redux'
    },
    devtool: 'source-map'
};