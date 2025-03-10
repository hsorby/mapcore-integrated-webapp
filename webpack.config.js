var path = require('path');
var webpack = require('webpack');

module.exports = {
  mode: "none",
  entry: {
    "mapcorewebapp": "./src/index.js"
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: "[name].js",
    library: 'mapcorewebapp',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  module: {
    rules: [
      { test: /\.(html)$/, use: [{ loader: 'html-loader' }]},
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
      { test: /\.(jpe?g|gif)$/i,
        loader:"file-loader",
        query:{
          name:'[name].[ext]',
          outputPath:'images/' }
      },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
    ]
  }
};
