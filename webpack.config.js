var webpack = require('webpack');
var path = require('path');

module.exports = {
    devtool: 'inline-sourcemap',
    cache: true,
    context: path.resolve(__dirname, 'src'),
    entry: [
      'webpack/hot/only-dev-server',
      "./index"
    ],
    output: {
        path: path.join(__dirname, 'build/static'),
        filename: 'bundle.js',
        publicPath: '/static'
    },
    devServer: {
        contentBase: path.join(__dirname, 'src'),
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        loaders: [
            { 
                test: /\.jsx?$/, 
                exclude: /node_modules|build/,
                loaders: 'react-hot-loader!babel-loader',
            }, {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            }, {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
        ]
    },
    plugins: [
      new webpack.NoErrorsPlugin()
    ]
}