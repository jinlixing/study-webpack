# study-webpack
this is a study project for webpack !

# The kewords of webpack

## Install
- npm install --save webpack
- npm install --save webpack@<version>
- npm install --save-dev webpack-cli
- package.json 
    - "scripts": { "build": "webpack --config webpack.config.js" }
    - npm run build
- 不建议全局安装

## Start
- npm init -y
- npm install webpack webpack-cli --save-dev
- npm install --save lodash
    - https://unpkg.com/lodash

```javascript
const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};
```

## Assets Management
- npm install --save-dev style-loader css-loader
- npm install --save-dev file-loader
- image-webpack-loader
- url-loader
- csv-loader
- xml-loader

## Output Management
- npm install --save-dev html-webpack-plugin
- npm install --save-dev clean-webpack-plugin

## Development
- webpack.config.js -> devtool: 'inline-source-map'
- webpack自动编译
    - webpack's Watch Mode
        - package.json -> "watch": "webpack --watch"
    - webpack-dev-server
        - npm install --save-dev webpack-dev-server
        - webpack.config.js -> devServer: { contentBase: './dist' }
        - package.json -> "start": "webpack-dev-server --open"
    - webpack-dev-middleware
        - webpack-dev-middleware 配合 express server 的示例
        - npm install --save-dev express webpack-dev-middleware
        - webpack.config.js -> output -> publicPath: '/'
        - package.json -> "server": "node server.js"
        - server.js 如下：
```javascript
const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')

const app = express()
const config = require('./webpack.config.js')
const compiler = webpack(config)

app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
}))

app.listen(3000, function(){
    console.log('xample app listening on port 3000!\n')
})
```

## Hot Module Replacement (HMR)
