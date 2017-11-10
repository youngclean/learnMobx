'use strict';

const webpack = require('webpack');
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './index.js',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // 开启全局的模块热替换（HMR）
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      title: "mobx",
      template: path.join(__dirname, 'index.ejs'),
    }),
  ],
  output:{
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer:{
    hot:true,
    open: true,
    contentBase: path.resolve(__dirname, "public"),
    port: 3000,
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: ["babel-loader"]
      }
    ]
  },
};
