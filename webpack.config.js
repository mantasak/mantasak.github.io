var webpack = require('webpack');
var path = require('path');

var autoprefixer = require('autoprefixer');
var focus        = require('postcss-focus');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'src');
var NODE_MODULES = path.resolve(__dirname, 'node_modules');

var config = {
  entry: {
    javascript: APP_DIR + '/index.js',
    html: APP_DIR + '/index.html'
  },
  output: {
    path: BUILD_DIR,
    filename: 'index.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loaders : ['react-hot', 'babel-loader']
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]"
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      },
      {
        test: /\.css$/,
        exclude: NODE_MODULES,
        loader: "style-loader!css-loader?modules&importLoaders=1!postcss-loader"
      },
      {
        test: /\.css$/,
        include: NODE_MODULES,
        loader: "style-loader!css-loader"
      }
    ]
  },
  resolve: {
    extensions: ['' ,'.js', '.jsx', '.json'],
    root: [
      path.resolve('./src')
    ]
  },
  postcss: function () {
    return [focus, autoprefixer];
  }
};

module.exports = config;
