<!-- —————————————↓SCSS———————分界线————————————————————————— -->
<style lang="scss">
.vue-carousel-demo-3d {
  .vue-carousel-3d {
    margin: 0 auto;
  }
}

.is-mobile {
  .vue-carousel-3d {
   .dots{
     display: none;
   }
  }
}
</style>

<!-- —————————————↓HTML————————分界线———————————————————————— -->
<template lang="pug">
.vue-carousel-demo-3d
  //- PC端指定图片的宽度和整个轮播图的高度
  //- vue-carousel-3d(:imgs="imgs",:imgWidth="520",:height="280")
  vue-carousel-3d(:imgs="imgs",:imgWidth="$store.state.isMobile?230:520",:height="280")
</template>

<!-- ——————————————↓JS—————————分界线———————————————————————— -->
<script>
import vueCarousel3d from '@/components/carousel/vue-carousel-3d'

export default {
  name: 'vue-carousel-demo-3d',
  components: {
    vueCarousel3d,
  },
  data() {
    return {
      msg: 'this is from vue-carousel-3d-demo.vue',
      // 轮播图元素组成的数组
      imgs: [
        { src: './static/carousel-3d-imgs/1.jpg', href: '' },
        { src: './static/carousel-3d-imgs/2.jpg', href: '' },
        { src: './static/carousel-3d-imgs/3.jpg', href: '' },
        { src: './static/carousel-3d-imgs/4.jpg', href: '' },
        { src: './static/carousel-3d-imgs/5.jpg', href: '' },
      ]
    }
  },
  methods: {

  }
}
</script>
