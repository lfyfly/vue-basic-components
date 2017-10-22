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
  demo-header(:title="title",:links="links")
  vue-carousel-3d(:imgs="imgs",:imgWidth="520",:height="280")
</template>

<!-- ——————————————↓JS—————————分界线———————————————————————— -->
<script>
import vueCarousel3d from '@/components/carousel/vue-carousel-3d'
import demoHeader from '@/components/demo-header'

export default {
  name: 'vue-carousel-demo-3d',
  components: {
    vueCarousel3d,
    demoHeader
  },
  data() {
    return {
      msg: 'this is from vue-carousel-3d-demo.vue',
      title: '[ vue组件 ] 无缝轮播图',
      links: [
        { name: 'github', href: 'https://github.com/lfyfly/vue-basic-components/blob/master/src/components/carousel/vue-carousel.vue' },
        { name: 'demo', href: 'https://github.com/lfyfly/vue-basic-components/blob/master/src/components/demos/carousel/vue-carousel-demo.vue' },
        { name: '实现原理', href: 'https://segmentfault.com/a/1190000011584322?_ea=2690954' }
      ],
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
