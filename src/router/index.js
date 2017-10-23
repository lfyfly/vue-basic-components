import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

import vueCarouselDemo from '@/demos/carousel/vue-carousel-demo'
import vueCarousel3dDemo from '@/demos/carousel/vue-carousel-3d-demo'
import vueMsgDemo from '@/demos/vue-msg/vue-msg-demo'
import waterfallDemo from '@/demos/waterfall/waterfall-demo'
import proloadImageDemo from '@/demos/preload-image/preload-image-demo'
import dragDemo from '@/demos/drag/drag-demo'
import scrollbarCustomDemo from '@/demos/scrollbar-custom/scrollbar-custom-demo'
import layoutProject from '@/demos/layout-project/layout-project-demos'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: store.state.demos[0].to
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
    },
    {
      path: '/drag',
      name: 'drag-demo',
      component: dragDemo
    },
    {
      path: '/scrollbar-custom',
      name: 'scrollbar-custom-demo',
      component: scrollbarCustomDemo
    },
    {
      path: '/layout-project',
      name: 'layout-project-demo',
      component: layoutProject
    },

  ]
})
router.beforeEach((to, from, next) => {
  store.commit('setCurrPage', to.path)
  next()
})
export default router
