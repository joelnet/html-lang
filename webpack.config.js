const path = require("path");
const fs = require('fs');
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
  plugins: fs.readdirSync('examples').map(example =>
    new HtmlWebpackPlugin({ filename: example, template: `examples/${example}` }),
  )
};
