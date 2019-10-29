<template>
  <div class="home">
    Hello,Everybody!
    <div>
      <div>startdd:</div>
      数量：{{count}}
      <button @click="onClickButton">增加2</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Home',
  computed: {
    ...mapState(['count'])
  },
  // store和route是传送进来的，route为了获取参数
  asyncData ({ store, route }) {
    // 模拟异步请求,返回Promise
    // return new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve(10)
    //   })
    // })
    return store.dispatch('ajaxData')
  },
  methods: {
    ...mapActions(['add']),
    onClickButton () {
      this.add()
    }
  }
}
</script>
