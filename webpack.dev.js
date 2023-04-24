import { merge } from "webpack-merge"
import common from "./webpack.common.js"

const config = merge(common, {
  mode: "development",
})
delete config.devServer.devMiddleware

export default config
