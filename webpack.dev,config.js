/*
 * Webpack development server configuration
 *
 * This file is set up for serving the webpack-dev-server, which will watch for changes and recompile as required if
 * the subfolder /webpack-dev-server/ is visited. Visiting the root will not automatically reload.
 */
'use strict';
var webpack = require('webpack');
var BowerWebpackPlugin = require("bower-webpack-plugin");
var assetPath = require('path').join(__dirname, 'dist');

module.exports = {

  output: {
    path: assetPath,
    filename: 'main.js',
    publicPath: '/assets/'
  },

  cache: true,
  debug: true,
  devtool: 'sourcemap',
  entry: [
    //'webpack-dev-server/client?http://localhost:9999',
    //'webpack/hot/only-dev-server',
    'webpack-hot-middleware/client',
    './src/main.js'
  ],

  stats: {
    colors: true,
    reasons: true
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.css', '.styl'],
    alias: {
      'styles': __dirname + '/src/styles',
      'components': __dirname + '/src/components/',
      'reducers': __dirname + '/src/reducers/',
      'actions': __dirname + '/src/actions/',
      'middlewares': __dirname + '/src/middlewares/',
      'pages': __dirname + '/src/pages/',
      'react': __dirname + '/node_modules/react',
      'react/addons': __dirname + '/node_modules/react/addons'
    }
  },
  module: {
    //preLoaders: [{
    //  test: /\.(js|jsx)$/,
    //  exclude: [/node_module/, 'server.js', 'mock/*'],
    //  loader: 'eslint'
    //}],
    loaders: [
    //{
    //  test: /\.(js|jsx)$/,
    //  exclude: /node_modules/,
    //  loader: 'react-hot!babel'
    //}
    {
      test: /\.js$/,
      loaders: ['babel'],
      include: __dirname + '/src'
    },{
      test: /\.scss/,
      loader: 'style!css!autoprefixer!sass?outputStyle=expanded'
    }, {
      test: /\.styl$/,
      loader: "style!css!autoprefixer!stylus"
    }, {
      test: /\.css$/,
      exclude: [/\.raw\.css$/, /\.useable\.css$/, /node_module/],
      loader: 'style!css!autoprefixer'
    }, {
      test: /\.useable\.css$/,
      loader: 'style/useable!raw!autoprefixer'
    }, {
      test: /\.raw\.css$/,
      loader: 'style!raw!autoprefixer'
    }, {
      test: /\.(png|jpg|woff|woff2)$/,
      loader: 'url?limit=8192'
    }]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      __DEVELOPMENT__: true,
      __DEVTOOLS__: false  // <-------- DISABLE redux-devtools HERE
    })
    //new BowerWebpackPlugin()
  ]

};