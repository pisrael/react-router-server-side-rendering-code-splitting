var path = require('path')
var webpack = require('webpack')

module.exports = [
  //configuration for the client
  {
    entry: './modules/client.js',

    output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js',
      chunkFilename: '[id].chunk.js',
      publicPath: '/'
    },

    module: {
      loaders: [
        { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' }
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

  },

  //configuration for the server-side rendering
  {
    name: "server-side rendering",
    entry: './modules/routes/RootRoute.js',
    target: "node",
    output: {
      path: path.join(__dirname, 'modules'),
      filename: "serverside.bundle.js",
      publicPath: './',
      libraryTarget: "commonjs2"
    },
    externals: /^[a-z\-0-9]+$/,
    module: {
      loaders: [
        { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' }
      ]
    }
  }
]
