import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import vueCarouselDemo from '@/components/demos/carousel/vue-carousel-demo'
import vueCarousel3dDemo from '@/components/demos/carousel/vue-carousel-3d-demo'
import vueMsgDemo from '@/components/demos/vue-msg/vue-msg-demo'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/vue-carousel'
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
    }
  ]
})
