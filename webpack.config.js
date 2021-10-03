const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    ["html-lang"]: "./src/index.js",
  },
  output: {
    libraryTarget: "umd",
    path: path.resolve(__dirname, "umd"),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "examples"),
    },
    compress: false,
    port: 8080,
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ filename: 'arrays.html', template: 'examples/arrays.html' }),
    new HtmlWebpackPlugin({ filename: 'fetch.html', template: 'examples/fetch.html' }),
    new HtmlWebpackPlugin({ filename: 'fizzbuzz.html', template: 'examples/fizzbuzz.html' }),
    new HtmlWebpackPlugin({ filename: 'objects.html', template: 'examples/objects.html' }),
  ]
};
