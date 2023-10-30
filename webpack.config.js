const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
   mode: 'development',
   entry: {
      main: path.resolve(__dirname, './src/index.js'),
   },
   output: {
      path: path.resolve(__dirname, './dist'),
      filename: '[name].bundle.js',
   },
   plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
         title: 'webpack Boilerplate',
         template: path.resolve(__dirname, './src/index.html'),
         filename: 'index.html',
      }),
      new CleanWebpackPlugin(),
   ],
   module: {
      rules: [
         {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader'],
         },
         {
            test: /\.(scss|css)$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
         },
      ],
   },
devServer: {
    port: 9000,
    hot: true,
    static: {
      directory: path.join(__dirname, './dist'),
    },
  },
}