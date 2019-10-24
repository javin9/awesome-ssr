<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>
      {{this.count}}
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'About',
  computed: {
    ...mapState(['count'])
  }
}
</script>
