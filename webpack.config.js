module.exports = {
  mode: process.env.NODE_ENV || "development",
  entry: ["./src/main.ts"],
  output: {
    filename: "bundle.js",
    path: __dirname + "/public"
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  module: {
    rules: [
      { test: /\.ts$/, loader: "ts-loader" },
    ]
  }
};