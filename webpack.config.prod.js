const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: [
    './src/client',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]-[hash].js',
    publicPath: '/dist/',
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new CleanWebpackPlugin(['dist', 'html'], {
      root: __dirname,
      verbose: true, // Write logs to console.
      dry: false, // Do not delete anything, good for testing.
    }),
    new HtmlWebpackPlugin({
      template: 'index.prod.html',
      filename: path.join(__dirname, 'html', 'index.html'),
    }),
    new ExtractTextPlugin('[name]-[hash].css', { allChunks: true }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
  ],
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
        include: path.join(__dirname, 'src'),
      },
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        exclude: /node_modules/,
        include: path.join(__dirname, 'src'),
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          'style',
          'css?-autoprefixer&modules&importLoaders=2&sourceMap'
          + '&localIdentName=[local]___[hash:base64:5]'
          ,
          'postcss'
        ),
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract(
          'style',
          'css?-autoprefixer!postcss!less'
        ),
      },
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff' },
      { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff' },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/octet-stream' },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' },
      { test: /\.png(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=1000000&mimetype=image/png' },
      {
        test: /\.json$/,
        loader: 'json',
        exclude: /node_modules/,
        include: path.join(__dirname, 'src'),
      },
    ],
  },
  eslint: {
    failOnError: true,
    failOnWarning: true,
  },
  postcss: [autoprefixer({ browsers: ['last 2 versions'] })],
};
