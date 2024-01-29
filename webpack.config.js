const path = require('path');

module.exports = {
  entry: './res/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  // Add loaders and plugins as needed
};
