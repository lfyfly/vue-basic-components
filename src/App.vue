<template lang="pug">
#app
  nav-tag(:tags="tags")
  router-view
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
        { tag: 'vue弹窗消息插件', to: "/vue-msg" },
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
li{
  list-style-type: none;
}
a{
  cursor: pointer;
  text-decoration: none;
  color: #5e5e5e;
}
</style>
