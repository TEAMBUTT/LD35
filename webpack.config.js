"use strict";

var path = require('path');
var webpack = require('webpack');
var config = module.exports = {};

config.context = __dirname;

config.entry = {
  game: './app/webpack/game.js',
  results: './app/webpack/results.js',
};

config.output = {
  path: path.join(__dirname, "app/assets/javascripts/"),
  filename: "[name].js"
}

config.resolve = {
  root: [
    path.join(__dirname, "app/webpack")
  ]
};

config.module = {
  loaders: [{
    test: /\.js$/,
    exclude: /node_modules/,
    loader: "babel-loader",
    query: { presets: ['es2015'] }
  }]
};

config.plugins = [
  new webpack.ContextReplacementPlugin(/moment[\\\/]locale$/, /^\.\/(en)$/)
];
