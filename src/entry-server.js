// entry-server.js
import { createApp } from './app'

export default (context) => {
  return new Promise((resolve, reject) => {
    const { app, router } = createApp()
    router.push(context.url)
    router.onReady(() => {
      resolve(app)
    })
  })
}
