const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const ExtractTextWebPackPlugin = require('extract-text-webpack-plugin');

module.exports = {

  entry: './src/index.js',
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
        include:[path.join(__dirname, 'src')],
        loaders: ['react-hot', 'babel']
      },
      {
        test: /\.scss/,
        // loader: ExtractTextWebPackPlugin.extract("style","css","sass")
        loader: 'style-loader!css-loader!autoprefixer-loader?{browsers:["last 2 version"]}!sass-loader?outputStyle=expanded'
      },
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: path.resolve('./src')
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: 'src/index.html',
      cache: false
    }),
    new ExtractTextWebPackPlugin("styles.css"),
  ]
}
