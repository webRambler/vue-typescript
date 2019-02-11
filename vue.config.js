module.exports = {
  publicPath: '/',
  lintOnSave: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'https://c.y.qq.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      },
      '/csdn': {
        target: 'https://blog.csdn.net',
        changeOrigin: true,
        pathRewrite: {
          '^/csdn': ''
        }
      }
    }
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
  }
}
