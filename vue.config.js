/* eslint @typescript-eslint/no-var-requires: "off" */
const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");

module.exports = {
  configureWebpack: {
    plugins: [
      new MonacoWebpackPlugin({
        // available options are documented at https://github.com/Microsoft/monaco-editor-webpack-plugin#options
        languages: ["javascript", "css", "html", "typescript", "json"]
      })
    ]
  },
  transpileDependencies: ["vuetify"],
  publicPath: process.env.NODE_ENV === "production" ? "/openbaas-ui/" : "/"
};
