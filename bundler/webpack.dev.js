const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const common = require("./webpack.common");

module.exports = merge(common, {
  mode: 'development',
});