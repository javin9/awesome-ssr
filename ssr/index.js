const express = require('express')
const fs = require('fs')
const path = require('path')
const { createBundleRenderer } = require('vue-server-renderer')

const resolve = dir => {
  return path.resolve(__dirname, dir)
}
// 实例化服务app
const app = express()

const bundle = require(resolve('../dist/server/vue-ssr-server-bundle.json'))
// 把client当成静态服务器地址
app.use(express.static(resolve('../dist/client'), { index: false }))

const renderer = createBundleRenderer(bundle, {
  runInNewContext: false, // 推荐
  template: fs.readFileSync(resolve('./template.html'), 'utf8'), // （可选）页面模板
  clientManifest: require(resolve('../dist/client/vue-ssr-client-manifest.json'))
})

app.use('*', async (req, res) => {
  console.log('访问地址：http://localhost:3000/about')
  console.log(`req.url=${req.url}`) // http://localhost:3000/about 页面刷新，req.url是 /
  console.log(`req.path=${req.path}`)
  console.log(`req.originalUrl=${req.originalUrl}`)
  console.log(`req.baseUrl=${req.baseUrl}`)

  const context = {
    url: req.baseUrl
  }
  const html = await renderer.renderToString(context)
  res.send(html)
})

app.listen(3000, () => {
  console.log('Start Server...')
})
