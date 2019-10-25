const express = require('express')
const ejs = require('ejs')
const app = express()

app.get('/', (req, res) => {
  // 创建用于渲染的数据
  var data = {
    name: '丘比特',
    url: 'http://www.cupid.com'
  }
  // 创建模板内容
  var template = `
    <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <title>Title</title>
      </head>
      <body>
          <a href="<%= url %>">
            <%= name %>
          </a>
      </body>
    </html>
    `
  // 通过ejs.render将数据放到模板中，转为HTML数据
  let html = ejs.render(template, data)
  // 将数据在浏览器进行展现
  res.send(html)
})

app.listen(3000, function () {
  console.log('startindg server...')
})
