const Vue = require('vue')

const app = new Vue({
  template: '<div>Hello Meata</div>'
})

const render = require('vue-server-renderer').createRenderer()
render.renderToString(app, (err, html) => {
  if (err) {
    throw Error('error')
  }
  console.log(html)
})
