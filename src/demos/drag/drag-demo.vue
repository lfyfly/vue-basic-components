<!-- —————————————↓SCSS———————分界线————————————————————————— -->
<style lang="scss">
.drag-demo {
  height: 100%;
  -webkit-overflow-scrolling: touch;
  overflow: hidden!important;
}
</style>

<!-- —————————————↓HTML————————分界线———————————————————————— -->
<template lang="pug">
.drag-demo
  iframe(src="//lfyfly.gitee.io/vue-dragdrag/docs")
</template>

<!-- ——————————————↓JS—————————分界线———————————————————————— -->
<script>
//import XXX from './components/XXX'

export default {
  name: 'drag',
  data() {
    return {
      msg: 'this is from drag.vue'
    }
  },
  methods: {

  },
  mounted() {
    if (this.$store.state.isMobile) {
      this.$msg({
        type: 'warn',
        content: '该项目基于鼠标事件，请在PC端访问该项目。'
      })
    }
  }
}
</script>
