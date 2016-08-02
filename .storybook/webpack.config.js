var path = require("path")
var webpack = require("webpack")

module.exports = {
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [ "babel" ],
        exclude: /node_modules/,
        include: path.resolve(__dirname, '../packages')
      },
      {
        test: /\.scss?$/,
        loaders: ["style", "css", "sass"],
        include: path.resolve(__dirname, '../packages')
      }
    ]
  }
}