const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  watch: true,
  entry: "./client-src/index.js",

  output: {
    path: __dirname + "/client",
    filename: "bundle.js"
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        options: {
          presets: ["react"]
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          loader: "css-loader",
          options: {
            modules: true
          }
        })
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: "file-loader",
        query: {
          name: "[name].[ext]?[hash]"
        }
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin({
      filename: "bundle.css",
      disable: false,
      allChunks: true
    })
  ],

  resolve: {
    extensions: [".js", ".json", ".jsx"]
  }
};
