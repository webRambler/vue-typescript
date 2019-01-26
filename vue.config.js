const path = require('path')
// 拼接路径
const resolve = dir => path.join(__dirname, dir)

module.exports = {
  publicPath: '/',
  lintOnSave: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'https://music.163.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
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
    config.resolve.extensions
      .add('.ts')
      .add('.json')
      .add('.scss')
      .add('.vue')
      .end()
    // 重新设置 alias
    config.resolve.alias
      .set('@', resolve('src'))
      .end()
    config.devServer
      .set('overlay', true)
      .set('hot', true)
      .set('open', true)
      .end()
  }
}
