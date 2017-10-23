<!-- —————————————↓SCSS———————分界线————————————————————————— -->
<style lang="scss">
.vue-carousel-demo {
  .vue-carousel {
    height: 450px;
  }
}
.is-mobile{
   .vue-carousel {
    height: 200px!important;
    .prev,.next{
      display: block;
      font-size: 40px;
    }
  }
}
</style>

<!-- —————————————↓HTML————————分界线———————————————————————— -->
<template lang="pug">
.vue-carousel-demo
  vue-carousel(:imgs="imgs")
</template>

<!-- ——————————————↓JS—————————分界线———————————————————————— -->
<script>
import vueCarousel from '@/components/carousel/vue-carousel'

export default {
  name: 'vue-carousel-demo',
  components: {
    vueCarousel,
  },
  data() {
    return {
      msg: 'this is from vue-carousel-demo.vue',
      // 轮播图元素组成的数组
      imgs: [
        { src: './static/carousel-imgs/1.jpg', href: '' },
        { src: './static/carousel-imgs/2.jpg', href: '' },
        { src: './static/carousel-imgs/3.jpg', href: '' },
        { src: './static/carousel-imgs/4.jpg', href: '' },
        { src: './static/carousel-imgs/5.jpg', href: '' },
      ]
    }
  },
  methods: {

  }
}
</script>
