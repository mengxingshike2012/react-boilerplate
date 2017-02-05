// webpack basic configuration
const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: __dirname,
  entry: ['./src/index.jsx'],
  output: {
    filename: 'main.js',
    path: path.join(__dirname, 'dist'),
    // necessary for HMR to know where to load the hot update chunks
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [path.join(__dirname, 'src')],
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: [
            'css-loader?modules&importLoaders=1',
            'postcss-loader',
            'sass-loader'
          ]
        }),
      },
    ],
  },
  resolve: {
    modules: [
      "node_modules",
      path.resolve(__dirname, 'src')
    ],
    extensions: ['.js', '.jsx', ".css", ".scss"],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: 'src/index.html',
      cache: false,
    }),
    new ExtractTextPlugin('styles.css')
  ],
};
