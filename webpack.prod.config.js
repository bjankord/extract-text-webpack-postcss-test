const config = require('./webpack.config');
const path = require('path');


// Create output file
config.output = {
  path: path.resolve('build'),
  filename: '[name]-[hash].js',
};

module.exports = config;
