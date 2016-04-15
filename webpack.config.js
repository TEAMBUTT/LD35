"use strict";

var path = require('path');
var webpack = require('webpack');
var config = module.exports = {};

config.context = __dirname;

config.entry = {
  application: './app/webpack/application.js',
};

config.output = {
  path: path.join(__dirname, "app/assets/javascripts/"),
  filename: "[name].js"
}

config.module = {
  loaders: [{
    test: /\.js$/,
    exclude: /node_modules/,
    loader: "babel-loader",
    query: { presets: ['es2015'] }
  }]
}
