const webpack = require('webpack');

module.exports = {
    entry: {
        vendors: [
            'webpack-dev-server/client',
            'babel-polyfill',
            'whatwg-fetch',
            'lodash',
            'react',
            'react-dom',
            'react-router',
            'redux',
            'redux-logger',
            'redux-thunk',
        ],
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
    ],
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'react-hot-loader!babel-loader'
        }, {
            test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'file-loader'
        }, {
            test: /\.scss$/,
            loader: 'style-loader!css-loader!sass-loader'
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }, {
            test: /\.json$/,
            loader: 'json-loader'
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url-loader?limit=8192'
        }]
    }
};
