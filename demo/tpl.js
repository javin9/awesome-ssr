const Vue = require('vue')
const server = require('express')()
const fs = require('fs')
const vueServerRender = require('vue-server-renderer')

// 传入一个模板
const template = fs.readFileSync('./index.html', 'utf-8')

server.get('*', (req, res) => {
  const app = new Vue({
    template: '<div>Hello Meata</div>'
  })

  const render = vueServerRender.createRenderer(
    {
      template
    }
  )

  const context = {
    title: '你好SSR'
  }
  render.renderToString(app, context, (err, html) => {
    console.log(html)
    if (err) {
      throw Error('error')
    }
    res.end(html)
  })
})

server.listen(8081)
