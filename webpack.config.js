const path = require('path')
const HtmlWebpckPlugin = require('html-webpack-plugin')
const CleanWebpckPlugin = require('clean-webpack-plugin')

module.exports = {
	mode: 'development',
	entry: {
		app: './src/index.js',
		print: './src/print.js'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].bundle.js'
	},
	plugins: [
		new CleanWebpckPlugin(['dist']),
		new HtmlWebpckPlugin({
			title: 'Output Management'
		})
	]
}