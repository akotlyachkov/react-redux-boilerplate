const webpack = require('webpack'),
    path = require('path');

module.exports = {
    entry: {
        app: './client/app/index.tsx',
        //libs: './client/app/libs.tsx',
        //angular: './client/app/angular.ts',
        //styles: './client/app/styles.tsx'
    },

    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './client/build')
    },
    module: {
        rules: [
            {
                test: /\.tsx$/,
                loaders: [{
                    loader: 'awesome-typescript-loader',
                    options: {
                        transpileOnly: true
                    }
                }],
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                use: ["source-map-loader"],
                enforce: "pre"
            },

            {
                test: /\.scss$/,
                include: path.join(__dirname, 'client/app'),
                loaders: ['raw-loader', 'sass-loader'],
            },
            {
                test: /\.scss$/,
                include: path.join(__dirname, 'client/styles'),
                loaders: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.woff$/,
                loader: 'base64-font-loader',

            },
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    minimize: false
                }
            }
        ]
    },
    plugins: [
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            path.join(__dirname, 'client/app')
        ),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            /*minChunks: 2,*/
            /*chunks: [
                'app',
                //'libs',
                //'angular'
            ]*/
        })
    ],
    resolve: {
        extensions: ['.tsx','.ts', '.scss', '.html', '.js', '.css', '.woff' ]
    },
     /*externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },*/
    devtool: 'source-map',
};