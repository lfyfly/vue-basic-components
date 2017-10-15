<!-- —————————————↓SCSS———————分界线————————————————————————— -->
<style lang="scss">

.hello{
}

</style>

<!-- —————————————↓HTML————————分界线———————————————————————— -->
<template lang="pug">
.hello
  h3 {{msg}}
</template>

<!-- ——————————————↓JS—————————分界线———————————————————————— -->
<script>
//import XXX from './components/XXX'

export default {
  name: 'hello',
  data () {
    return {
      msg: 'this is from hello.vue'
    }
  },
  methods: {

  }
}
</script>
