const Vue = require('vue')
const server = require('express')()

server.get('*', (req, res) => {
  const app = new Vue({
    template: '<div>Hello Meata</div>'
  })

  const render = require('vue-server-renderer').createRenderer()
  render.renderToString(app, (err, html) => {
    console.log(err)
    if (err) {
      throw Error('error')
    }

    res.end(`
    <html>
    <body>
      ${html}
    </body>
    </html>
    `)
  })
})

server.listen(8081)
