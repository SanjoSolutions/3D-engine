import { merge } from "webpack-merge"
import common from "@sanjo/webpack/webpack.common.js"

const config = merge(common, {
  mode: "development",
})
delete config.devServer.devMiddleware

export default config
