<!-- —————————————↓SCSS———————分界线————————————————————————— -->
<style lang="scss">
.scrollbar-custom-demo {
  height: 100%;
  -webkit-overflow-scrolling: touch;
  overflow: hidden!important;
}
</style>

<!-- —————————————↓HTML————————分界线———————————————————————— -->
<template lang="pug">
.scrollbar-custom-demo
  iframe(src="http://lfyfly.gitee.io/vue-scrollbar-custom/docs/")

</template>

<!-- ——————————————↓JS—————————分界线———————————————————————— -->
<script>
// import XXX from './components/XXX'

export default {
  name: 'scrollbar-custom-demo',
  data() {
    return {
      msg: 'this is from scrollbar-custom-demo.vue'
    }
  },
  methods: {

  }
}
</script>
