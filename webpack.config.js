var webpack = require("webpack");
var path = require("path");

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
        include: DEV,
        loader: "babel",
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }

};

module.exports = config;
