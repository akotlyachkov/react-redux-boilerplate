const webpack = require('webpack'),
    path = require('path');

module.exports = {
    entry: {
        app: './client/app/root.tsx',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './client/build')
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: "ts-loader" },
        ]
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    /*externals: {
        React: 'react',
        ReactRedux: 'react-redux',
        ReactDOM: 'react-dom',
        ReactRouterDOM: 'react-router-dom',
        Redux: 'redux'
    },*/
    devtool: 'source-map'
};