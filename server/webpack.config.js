module.exports = {
  mode: "development",
  target: "node",
  module: {
    rules: [
      { test: /\.graphql?$/, loader: "webpack-graphql-loader" },
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
