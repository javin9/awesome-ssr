const express = require('express')
const Vue = require('vue')
const path = require('path')

// 实例化服务app
const app = express()
const page = new Vue({
  data () {
    return {
      name: 'Cupid'
    }
  },
  template: '<div>{{name}}</div>'
})
const templatePath = path.resolve(__dirname, './template.html')
console.log(templatePath)

const renderer = require('vue-server-renderer').createRenderer({
  template: require('fs').readFileSync(templatePath, 'utf-8')
})
app.use('*', (req, res) => {
  renderer.renderToString(page, (err, html) => {
    res.send(html)
  })
})
app.listen(3000, () => {
  console.log('Starting...')
})
