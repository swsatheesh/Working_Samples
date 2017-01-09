var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    app: './app/main.js',
    vendor: ["jquery", "react", "react-dom", "flux", "events", "bootstrap", "createjs-easeljs", "preload-js", "mathjs", "jquery-ui/ui/widgets/draggable", "jquery-ui/ui/widgets/droppable", "jquery-ui-touch-punch/jquery.ui.touch-punch", "plyr", "line-circle-collision", "d3"],
  },
  output: {
    path: './build',
    filename: 'assessment.item.engine.js',
    libraryTarget: "var",
    library: "AssessmentItemEngine"
  },
  plugins: [
    HTMLWebpackPluginConfig,
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      createjs: "createjs-easeljs",
      math: "mathjs",
      plyr: "plyr",
      intersection: "intersectionjs",
      d3: "d3"
    }),
    new webpack.optimize.CommonsChunkPlugin("vendor", "assessment.item.bundle.js"),
    new ExtractTextPlugin("assessment.item.style.css")
  ],
  devServer: {
    inline: true,
    host: "172.25.10.172",
    port: 8085,
    outputPath: path.join(__dirname, 'build')
  },
  module: {
    loaders: [
      {
        test: /\.(css|scss)$/,
        loader: ExtractTextPlugin.extract("style", "css!sass")
      },
      {
        test: /\.(otf|eot|ttf|woff|woff2)$/,
        loader: 'file?name=fonts/[name].[ext]'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file?name=assets/[name].[ext]'
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  }
}
