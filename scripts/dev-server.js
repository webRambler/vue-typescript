const express = require('express')
const proxyMiddleware = require('http-proxy-middleware')
const axios = require('axios')
const path = require('path')
const webpack = require('webpack')
const config = require('@vue/cli-service/webpack.config.js')
const proxyTable = require('../vue.config').devServer.proxy
const open = require('open')


const app = express()
const routes = express.Router()

routes.get('/searchSong', function (req, res) {
  const url = 'https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp'
  axios.get(url, {
    headers: {
      referer: 'https://y.qq.com',
      host: 'c.y.qq.com'
    },
    params: {
      remoteplace: 'txt.mqq.all',
      platform: 'h5',
      g_tk: 5381,
      uin: '',
      format: 'json',
      inCharset: 'utf-8',
      outCharset: 'utf-8',
      notice: 0,
      needNewCode: 1,
      zhidaqu: 1,
      catZhida: 1,
      t: 0,
      flag: 1,
      ie: 'utf-8',
      sem: 1,
      aggr: 0,
      perpage: 20,
      n: 20,
      ...req.query
    }
  }).then(data => {
    res.json(data.data)
  }).catch(err => {
    console.log(err)
  })
})

app.use('/song', routes)


const compiler = webpack(config)

const devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: '/',
  quiet: true
})

const hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => {}
})

compiler.plugin('compilation', (compilation) => {
  compilation.plugin('html-webpack-plugin-after-emit', (data, cb) => {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})


const staticPath = path.posix.join('/', '')
app.use(staticPath, express.static('../dist/static'))

// 处理webpack代理配置
Object.keys(proxyTable).forEach(function (context) {
  let options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})


app.use(devMiddleware)

app.use(hotMiddleware)


const PORT = process.env.PORT || 3000
const uri = 'http://localhost:' + PORT

let _resolve
const readyPromise = new Promise(resolve => {
  _resolve = resolve
})


console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
  console.log('> Listening at ' + uri + '\n')
  // open(uri)
  _resolve()
})

const server = app.listen(PORT, () => {
  console.log('app is starting at prot', PORT)
})

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}
