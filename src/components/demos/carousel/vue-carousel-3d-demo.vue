<!-- —————————————↓SCSS———————分界线————————————————————————— -->
<style lang="scss">
.vue-carousel-demo-3d {
  .vue-carousel-3d {
    margin: 0 auto;
  }
  h3 {
    text-align: center;
    line-height: 2;
  }
}
</style>

<!-- —————————————↓HTML————————分界线———————————————————————— -->
<template lang="pug">
.vue-carousel-demo-3d
  h3 这是vue [ 3d轮播组件 ] demo
  vue-carousel-3d(:imgs="imgs",:imgWidth="520",:height="280")
</template>

<!-- ——————————————↓JS—————————分界线———————————————————————— -->
<script>
import vueCarousel3d from '@/components/carousel/vue-carousel-3d'

export default {
  name: 'vue-carousel-demo-3d',
  components: {
    vueCarousel3d
  },
  data() {
    return {
      msg: 'this is from vue-carousel-3d-demo.vue',
      // 轮播图元素组成的数组

      imgs: [
        { src: '/static/carousel-3d-imgs/1.jpg', href: '' },
        { src: '/static/carousel-3d-imgs/2.jpg', href: '' },
        { src: '/static/carousel-3d-imgs/3.jpg', href: '' },
        { src: '/static/carousel-3d-imgs/4.jpg', href: '' },
        { src: '/static/carousel-3d-imgs/5.jpg', href: '' },
      ]
    }
  },
  methods: {

  }
}
</script>
