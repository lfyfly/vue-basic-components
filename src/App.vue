<template lang="pug">
#app
  nav-tag#nav(:tags="tags")
  router-view.router-view
</template>

<script>
import navTag from '@/components/nav-tag.vue'

export default {
  name: 'app',
  components: {
    navTag
  },
  data() {
    return {
      tags: [
        { tag: '无缝轮播', to: "/vue-carousel" },
        { tag: '3d轮播', to: "/vue-carousel-3d" },
        { tag: 'vue消息弹窗插件', to: "/vue-msg" },
        { tag: '瀑布流组件', to: "/waterfall" }
      ]
    }
  }
}
</script>

<style lang="scss">
// reset css
* {
  margin: 0;
  padding: 0;
}
html,body,#app{
  height: 100%;
}
#app{
  display: flex;
  flex-direction: column;
  .router-view{
    flex-grow: 1;
  }
}

li{
  list-style-type: none;
}
a{
  cursor: pointer;
  text-decoration: none;
  color: #5e5e5e;
}
</style>
