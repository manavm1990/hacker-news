module.exports = {
  mode: "development",
  target: "node",
  node: {
    __dirname: true,
    __filename: true,
  },
  module: {
    rules: [
      { test: /\.graphql?$/, loader: "webpack-graphql-loader" },
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: { node: true } }]],
          },
        },
      },
    ],
  },
};
