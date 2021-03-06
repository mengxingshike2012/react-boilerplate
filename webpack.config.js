const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const ExtractTextWebPackPlugin = require('extract-text-webpack-plugin');

module.exports = {

  entry: './src/index.jsx',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'main.js',
  },

  cache: false,
  debug: true,
  devtool: 'eval',

  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        include: [path.join(__dirname, 'src')],
        loaders: ['react-hot', 'babel'],
      },
      {
        test: /\.scss$/,
        loader: ExtractTextWebPackPlugin.extract(
            'style',
            ['css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
            'autoprefixer?{browsers:["last 2 version"]}',
            'sass?outputStyle=expanded']
        ),
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: path.resolve('./src'),
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: 'src/index.html',
      cache: false,
    }),
    new ExtractTextWebPackPlugin('styles.css'),
  ],
};
