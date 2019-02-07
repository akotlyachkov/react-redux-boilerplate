const path = require('path');

module.exports = {
  entry: {
    script: './app/client.js',
    server: './app/server.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ],
            plugins: [
              '@babel/plugin-transform-async-to-generator',
              'babel-plugin-transform-class-properties'
            ]
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js']
  },
  mode: 'development',
  devtool: 'source-map'
};