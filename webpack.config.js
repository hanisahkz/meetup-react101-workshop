// this is to surpsress error
// eslint-disable-next-line no-unused-vars
const webpack = require('webpack');
// this loads index.html and create the file inside dist/ folder. This is where the auto inject happens
const HtmlWebpackPlugin = require('html-webpack-plugin');

// this is jsdoc
/**
 * @type {webpack.Configuration}
 */
module.exports = {
  // optional. If specified, it's going to inject this script's file name in index.html
  //   if not, it will just inject main.js as the script
  //   output: {
  //     filename: 'blah.[hash].js'
  //   },
  module: {
    //   rules needed for Babel
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  devServer: {
    port: 9200
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ]
};
