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