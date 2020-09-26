// vue.config.js
// Manually added purgecss, see https://github.com/FullHuman/purgecss/tree/master/examples/with-vue/

const PurgecssPlugin = require('purgecss-webpack-plugin')
const glob = require('glob-all')
const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  lintOnSave: true,
  configureWebpack: {
    // TODO: Comment out the following two lines for production. Important!
    // mode: 'development',
    // devtool: 'source-map',
    //
    // To avoid de-duping/splitting (will increase file sizes!)
    // see splitting import statements in Home.vue and router.js
    // optimization: {
    //   splitChunks: false
    // },
    /*
    // Extracts runtime chunk. No effect? Source: https://webpack.js.org/guides/caching/
    optimization: {
      runtimeChunk: 'single',
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all'
          }
        }
      }
    },
    */
    plugins: [
      new PurgecssPlugin({
        paths: glob.sync([
          path.join(__dirname, './src/index.html'),
          path.join(__dirname, './**/*.vue'),
          path.join(__dirname, './src/**/*.js')
        ])
      }),
      new BundleAnalyzerPlugin()
    ]
  },
  devServer: {
    // To allow using ngrok with localhost testing.
    // Source: https://github.com/vuejs-templates/webpack/issues/1205#issuecomment-404321666
    disableHostCheck: true
  }
}
