import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import vueCarouselDemo from '@/demos/carousel/vue-carousel-demo'
import vueCarousel3dDemo from '@/demos/carousel/vue-carousel-3d-demo'
import vueMsgDemo from '@/demos/vue-msg/vue-msg-demo'
import waterfallDemo from '@/demos/waterfall/waterfall-demo'
import proloadImageDemo from '@/demos/preload-image/preload-image-demo'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/vue-carousel'
    },
    {
      path: '/vue-carousel',
      name: 'vue-carousel-demo',
      component: vueCarouselDemo
    },
    {
      path: '/vue-carousel-3d',
      name: 'vue-carousel-demo-3d',
      component: vueCarousel3dDemo
    },
    {
      path: '/vue-msg',
      name: 'vue-msg-demo',
      component: vueMsgDemo
    },
    {
      path: '/waterfall',
      name: 'waterfall-demo',
      component: waterfallDemo
    },
     {
      path: '/preload-image',
      name: 'preload-image-demo',
      component: proloadImageDemo
    }
  ]
})
// http://lfyfly.gitee.io/vue-waterfall-easy/docs/
