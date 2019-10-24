import Vue from 'vue'
import { createRouter } from '@/router'
import { createStore } from '@/store'
import App from './App.vue'

// 客户端挂载之前，检查组件是否存在异步数据获取
Vue.mixin({
  beforeMount () {
    console.log('beforeMount')
    const { asyncData } = this.$options
    if (asyncData) {
      // 将获取数据操作分配给 promise
      // 以便在组件中，我们可以在数据准备就绪后
      // 通过运行 `this.dataPromise.then(...)` 来执行其他任务
      this.dataPromise = asyncData({
        store: this.$store,
        route: this.$route
      })
    }
  }
})

export function createApp (context) {
  const router = createRouter()
  const store = createStore()
  const app = new Vue({
    router,
    store,
    context,
    render: h => h(App)
  })
  // 返回 app 和 router
  return { app, router, store }
}
