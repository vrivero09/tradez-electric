const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack'); //to access built-in plugins

const path = require('path')

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'client', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$|jsx/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env", "@babel/preset-react"
            ]
          }
        }
      },
           // Relevant bit of config for style loader and css loader:
           {
            test: /\.css$/,
            // the order of `use` is important!
            use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
          },
    ]
  }
};