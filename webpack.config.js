var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
	entry: './src/entry.js',
	output: {
		path: 'dist',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.styl$/,
				loader: ExtractTextPlugin.extract('style','css!stylus')
			}, {
				test: /\.png$|\.svg$/,
				loader: "file?name=[name].[ext]"
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('style.css')
	]
};

module.exports = config;