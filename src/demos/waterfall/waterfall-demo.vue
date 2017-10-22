<!-- —————————————↓SCSS———————分界线————————————————————————— -->
<style lang="scss">
.waterfall-demo {
    height: 100%;
    overflow: hidden;
  iframe {
    width: 100%;
    height: 100%;
    display: block;
  }
}
</style>

<!-- —————————————↓HTML————————分界线———————————————————————— -->
<template lang="pug">
.waterfall-demo

  iframe.waterfall-iframe(src="http://lfyfly.gitee.io/vue-waterfall-easy/docs/")
</template>

<!-- ——————————————↓JS—————————分界线———————————————————————— -->
<script>
//import XXX from './components/XXX'

export default {
  name: 'waterfall-demo',
  data() {
    return {
      msg: 'this is from waterfall-demo.vue'
    }
  },
  methods: {

  },

}
</script>
