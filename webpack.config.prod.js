// webpack config for production
const webpack = require('webpack')
const merge = require('webpack-merge')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const config = require('./webpack.config.js')

module.exports = merge(config, {
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': 'production'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      }
    }),
    new CleanWebpackPlugin(['dist'], {
      verbose: true,
    })
  ],
})
