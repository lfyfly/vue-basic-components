import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import vueCarouselDemo from '@/components/demos/carousel/vue-carousel-demo'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/vue-carousel',
      name: 'vue-carousel-demo',
      component: vueCarouselDemo
    }
  ]
})
