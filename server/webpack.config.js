module.exports = {
  mode: "development",
  target: "node",
  module: {
    rules: [{ test: /\.graphql?$/, loader: "webpack-graphql-loader" }],
  },
};
