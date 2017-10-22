<!-- —————————————↓SCSS———————分界线————————————————————————— -->
<style lang="scss">
.vue-carousel-demo {
  h3 {
    text-align: center;
    line-height: 2;
  }
  .vue-carousel {
    height: 450px;
  }
}
</style>

<!-- —————————————↓HTML————————分界线———————————————————————— -->
<template lang="pug">
.vue-carousel-demo
  demo-header(:title="title",:links="links")
  vue-carousel(:imgs="imgs")
</template>

<!-- ——————————————↓JS—————————分界线———————————————————————— -->
<script>
import vueCarousel from '@/components/carousel/vue-carousel'
import demoHeader from '@/components/demo-header'

export default {
  name: 'vue-carousel-demo',
  components: {
    vueCarousel,
    demoHeader
  },
  data() {
    return {
      msg: 'this is from vue-carousel-demo.vue',
      title:'[ vue组件 ] 3d轮播图',
      links: [
        { name: 'github', href: 'https://github.com/lfyfly/vue-basic-components/blob/master/src/components/carousel/vue-carousel.vue' },
        { name: 'demo', href: 'https://github.com/lfyfly/vue-basic-components/blob/master/src/components/demos/carousel/vue-carousel-demo.vue' },
        { name: '实现原理', href: 'https://segmentfault.com/a/1190000011584322?_ea=2690954' }
      ],
      // 轮播图元素组成的数组
      imgs: [
        { src: '/static/carousel-imgs/1.jpg', href: '' },
        { src: '/static/carousel-imgs/2.jpg', href: '' },
        { src: '/static/carousel-imgs/3.jpg', href: '' },
        { src: '/static/carousel-imgs/4.jpg', href: '' },
        { src: '/static/carousel-imgs/5.jpg', href: '' },
      ]
    }
  },
  methods: {

  }
}
</script>
