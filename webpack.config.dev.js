// webpack config for development
const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebPackPlugin = require('html-webpack-plugin');
const config = require('./webpack.config.js')

const host = (process.env.HOST || 'localhost');
const port = (+process.env.PORT + 1) || 8080;

module.exports = merge.strategy({
  entry: 'prepend',
})(config, {
  devServer: {
    hot: true,
    open: false,
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  devtool: 'inline-source-map',
  entry: [
    'react-hot-loader/patch',
    `webpack-dev-server/client?http://${host}:${port}`,
    'webpack/hot/only-dev-server',
  ],
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
})
