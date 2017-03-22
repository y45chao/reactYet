const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PORT = 4040;
module.exports = {
    devServer: {
        noInfo: true,
        inline: true,
        colors: true,
        compress: true,
        historyApiFallback: true,
        port: PORT,
        host: "0.0.0.0",
        contentBase: '/',
        open: 'http://127.0.0.1:' + PORT
    },
    entry: [
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "[name].js",
        chunkFilename: "[name].[chunkhash:5].chunk.js",
    },
    resolve: {
        extensions: ['', '.jsx', '.js'],
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loaders: ['babel', 'eslint']
            }
        ]
    },
    eslint: {
        configFile: './.eslintrc'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new HtmlWebpackPlugin({
          filename: 'index.html',
          template: 'index.html',
          inject: true
        }),
    ],
}
if (process.env.NODE_ENV === 'production') {
    module.exports.plugins = [
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        filename: 'vendor.bundle.js'
      }),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'index.html',
        inject: true,
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeAttributeQuotes: true
        }
      }),
      new webpack.DefinePlugin({
          'process.env': {
              NODE_ENV: '"production"'
          }
      }),
      new webpack.optimize.UglifyJsPlugin({
          compress: {
              warnings: false
          }
      }),
      new webpack.optimize.OccurenceOrderPlugin()
    ]
} else {
    module.exports.devtool = '#source-map'
}