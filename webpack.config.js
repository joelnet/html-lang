const path = require("path");

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
      directory: path.join(__dirname, "umd"),
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
};
