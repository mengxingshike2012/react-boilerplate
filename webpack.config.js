const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');

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
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: path.resolve('./src'),
    // alias: {
    //   actions: path.join(__dirname, 'src/actions/'),
    //   components: path.join(__dirname, 'src/components/'),
    //   containers: path.join(__dirname, 'src/containers'),
    //   middlewares: path.join(__dirname, 'src/middlewares/'),
    //   reducers: path.join(__dirname, 'src/reducers/'),
    //   sagas: path.join(__dirname, 'src/sagas/'),
    //   styles: path.join(__dirname, 'src/styles/'),
    // }
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: 'src/index.html',
      cache: false
    }),
  ],
  devServer: {

  }
}
