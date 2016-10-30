var path = require('path');
var webpack = require('webpack');

var DEV = path.resolve(__dirname, "./client/dev");
var OUTPUT = path.resolve(__dirname, "./client/output");

var config = {
  entry: DEV + "/index.jsx",
  output: {
    path: OUTPUT,
    filename: "myCode.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query:
          {
            presets: ['es2015', 'stage-2', 'react']
          }
      },

      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      }
    ]
  }
};

module.exports = config;
