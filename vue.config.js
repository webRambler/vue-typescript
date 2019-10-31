const path = require('path')

const resolve = function(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: '/',
  lintOnSave: true,
  devServer: {
    hot: true,
    open: true,
    proxy: {
      '/api': {
        target: 'https://c.y.qq.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  configureWebpack: {
    entry: ['webpack-hot-middleware/client?reload=true', resolve('src/main.ts')]
  },
  chainWebpack: config => {
    // 解决 cli3 热更新失效 https://github.com/vuejs/vue-cli/issues/1559
    config.resolve
      .symlinks(true)
    // markdown
    config.module
      .rule('md')
      .test(/\.md$/)
      .use('text-loader')
      .loader('text-loader')
      .end()
    config.resolve.alias
      .set('@', resolve('src'))
  }
}
