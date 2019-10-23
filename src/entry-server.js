// entry-server.js
// 创建vue实例，做首屏渲染
import { createApp } from './app'

export default (context) => {
  return new Promise((resolve, reject) => {
    const { app, router } = createApp()
    // 跳转首屏
    router.push(context.url)
    router.onReady(() => {
      resolve(app)
    }, reject)
  })
}
