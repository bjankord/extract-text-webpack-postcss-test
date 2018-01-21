const config = require('./webpack.config');
const CleanPlugin = require('clean-webpack-plugin');
const path = require('path');

// Clean build before running
config.plugins.push(new CleanPlugin('build'));

// Create output file
config.output = {
  path: path.resolve('build'),
  filename: '[name]-[hash].js',
};

module.exports = config;
