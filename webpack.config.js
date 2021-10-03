const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const glob = require("glob");

const htmlFiles = glob.sync(__dirname + "/src.html/*.html");

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
      directory: path.join(__dirname, "src.html"),
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
    ...htmlFiles.map(
      (file) =>
        new HtmlWebpackPlugin({
          filename: path.basename(file),
          template: file,
          minify: false,
        })
    ),
  ],
};
