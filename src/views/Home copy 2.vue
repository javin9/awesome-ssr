<template>
  <div class="home">
    Hello,Everybody!
    <div>
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
  methods: {
    ...mapActions(['add']),
    onClickButton () {
      this.add()
    }
  }
}
</script>
