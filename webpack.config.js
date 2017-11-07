const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CleanWebpackPlugin = require('clean-webpack-plugin')
const config = {
  entry:'./src/index.js',
  devtool:'inline-source-map',
  devServer: {
    contentBase:'./dist'
  },
  plugins:[
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template:'./src/index.html',
      filename:'index.html',
      inject:'body'
    })
  ],
  output:{
    path: path.resolve(__dirname,'dist'),
    filename:'bundle.js'
  },
  module:{
    rules:[
      {
        test:/\.js$/,
        exclude:/(node_modules)/,
        loader:'babel-loader'
      },
      {
        test:/\.css$/,
        use:[
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
}

module.exports = config
