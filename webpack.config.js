const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HelloWorldPlugin = require('./src/webpackPlugins/HelloWorldPlugin')

module.exports = {
	devtool: "eval",
	mode: "development",
	entry: {
		index: './src/index.js',
		second: './src/second.js'
	},
	output: {
		filename: '[name].js',
		chunkFilename: "[name].js",
		path: path.resolve(__dirname, 'dist')
	},
	devServer: {
		contentBase: './dist',
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: "css-loader"
				})
			},
			{
				test: /\.js/,
				use: [
					{
						loader: "./sync-loader.js"
					}
				]
			}
		]
	},
	optimization: { // 代码拆分   code spliting
		splitChunks: {
			// chunks: 'all',
			// minChunks: 2,
			name: false,
			cacheGroups : {
				common: {
					chunks: 'all',
					test: /[\\/]node_modules[\\/]/,
					name: 'common',
					minSize: 0,
					// maxAsyncRequests: 1
				}
			}
		}
	},
	plugins: [
		new CleanWebpackPlugin(),
		new ExtractTextPlugin("[name].css"),
		new HtmlWebpackPlugin({
			 title: 'Output Management'
		}),
		new webpack.HotModuleReplacementPlugin({
			// Options...
		}),
		new HelloWorldPlugin()
	]
};
