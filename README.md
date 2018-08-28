# study-webpack
this is a study project for webpack !

# The kewords of webpack

## install
- npm install --save webpack
- npm install --save webpack@<version>
- npm install --save-dev webpack-cli
- package.json 
	- "scripts": { "build": "webpack --config webpack.config.js" }
	- npm run build
- 不建议全局安装

## start
- npm init -y
- npm install webpack webpack-cli --save-dev
- npm install --save lodash
	- https://unpkg.com/lodash

	const path = require('path')

	module.exports = {
		entry: './src/index.js',
		output: {
			filename: 'bundle.js',
			path: path.resolve(__dirname, 'dist')
		}
	};
