var fs = require('fs')
var path = require('path')
var webpack = require('webpack')

module.exports = {

  //devtool: 'source-map',

  entry: './modules/client.js',

  output: {
    path: __dirname + '/public',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    publicPath: '/public/'
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' }
    ]
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: { warnings: false },
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    })
  ]

}
