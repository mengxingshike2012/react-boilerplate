// webpack config for development
const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const host = (process.env.HOST || 'localhost');
const port = (+process.env.PORT + 1) || 8080;

module.exports = {
  devtool: 'inline-source-map', // no conclusion which one is better
  context: __dirname,
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://' + host + ':' + port,
    'webpack/hot/only-dev-server',
    './src/index.jsx'],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
    // necessary for HMR to know where to load the hot update chunks
    publicPath: '/',
  },
  devServer: {
    hot: true,
    open: false,
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, 'dist'),
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
        use: [
          'style-loader',
          'css-loader?modules&importLoaders=1',
          'postcss-loader',
          'sass-loader'
        ]
      },
    ],
  },
  resolve: {
    modules: [
      "node_modules",
      path.resolve(__dirname, 'src')
    ],
    extensions: ['.js', '.jsx', ".css"],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: 'src/index.html',
      cache: false,
    }),
    new  webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
};
