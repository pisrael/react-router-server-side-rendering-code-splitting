var path = require("path");
var webpack = require('webpack')

module.exports = [
    {
        // The configuration for the server-side rendering
        name: "server-side rendering",
        entry: './modules/routes/RootRoute.js',
        target: "node",
        output: {
            path: __dirname + '/modules',
            filename: "serverside.bundle.js",
            publicPath: './',
            libraryTarget: "commonjs2"
        },
        externals: /^[a-z\-0-9]+$/,
        module: {
            loaders: [
                { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react'}
            ]
        }
    }
];