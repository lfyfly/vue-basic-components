<!-- —————————————↓SCSS———————分界线————————————————————————— -->
<style lang="scss">
.vue-carousel-demo {
  height: 400px;
  h3{
    text-align: center;
    line-height: 2;
  }
}
</style>

<!-- —————————————↓HTML————————分界线———————————————————————— -->
<template lang="pug">
.vue-carousel-demo
  h3 这是vue无缝轮播滚动demo
  vue-carousel(:imgs="imgs")
</template>

<!-- ——————————————↓JS—————————分界线———————————————————————— -->
<script>
import vueCarousel from '@/components/carousel/vue-carousel'

export default {
  name: 'vue-carousel-demo',
  components: {
    vueCarousel
  },
  data() {
    return {
      msg: 'this is from vue-carousel-demo.vue',
      // 轮播图元素组成的数组
      imgs: [
        {src:'/static/carousel-imgs/1.jpg',href:''},
        {src:'/static/carousel-imgs/2.jpg',href:''},
        {src:'/static/carousel-imgs/3.jpg',href:''},
        {src:'/static/carousel-imgs/4.jpg',href:''},
        {src:'/static/carousel-imgs/5.jpg',href:''},
      ]
    }
  },
  methods: {

  }
}
</script>
