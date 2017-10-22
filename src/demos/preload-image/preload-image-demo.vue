<!-- —————————————↓SCSS———————分界线————————————————————————— -->
<style lang="scss">
.preload-image-demo {
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
.preload-image-demo
  iframe.waterfall-iframe(src="http://lfyfly.gitee.io/vue-preload-image/docs/")

</template>

<!-- ——————————————↓JS—————————分界线———————————————————————— -->
<script>
//import XXX from './components/XXX'

export default {
  name: 'preload-image-demo',
  data() {
    return {
      msg: 'this is from preload-image-demo.vue'
    }
  },
  methods: {

  }
}
</script>
