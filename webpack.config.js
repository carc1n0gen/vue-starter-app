const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'dist');
const APP_DIR = path.resolve(__dirname, 'src');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
    filename: 'bundle.css',
    disable: process.env.NODE_ENV === 'development'
});

module.exports = {
  entry: [
    APP_DIR + '/sass/main.scss',
    APP_DIR + '/index.js',
  ],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.vue']
  },
  module: {
    loaders: [{
      test: /\.js/,
      include: APP_DIR,
      loader: 'babel-loader'
    }, {
      test: /\.vue/,
      include: APP_DIR,
      loader: 'vue-loader'
    },{
      test: /\.scss/,
      use: extractSass.extract({
        use: [{
          loader: 'css-loader'
        }, {
          loader: 'sass-loader'
        }],
        fallback: 'style-loader'
      })
    },{
      test: /\.(ttf|eot|svg|woff|woff2)$/,
      loader: 'file-loader?name=[name].[ext]&outputPath=fonts/'
    }]
  },
  plugins: [
    extractSass
  ]
};