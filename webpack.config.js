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
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-transform-async-to-generator']
          }
        }
      },
    ]
  },
  resolve: {
    extensions: ['.js']
  },
  mode:'development',
  devtool: 'source-map'
};