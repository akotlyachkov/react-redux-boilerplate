const webpack = require('webpack'),
    path = require('path');

module.exports = {
    entry: {
        app: './client/app/index.tsx',
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

    devtool: 'source-map'
};