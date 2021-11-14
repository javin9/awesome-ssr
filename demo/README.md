https://www.bilibili.com/video/BV1qz4y1d7Lr?p=3

- app.js createApp()
- client 挂载
- server.js 每次请求导出一个新的实例


![](../doc/image/server.png)
- 服务端打包，排除了serverjs 内容  只保留静态文档，只需要字符串，不需要js文件，排除掉了，没有对应的js文件，做样式的添加和事件
- 通过客户端激活 
- client.bundle.js作为静态资源提供出来