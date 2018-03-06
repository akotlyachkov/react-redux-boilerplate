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
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
        ]
    },
    resolve: {
        extensions: [".js"]
    },
    devtool: 'source-map'
};