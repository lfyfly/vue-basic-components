import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    currPage: '/vue-carousel',
    isMobile: !!navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i),
    demos: [
      {
        tag: '网页布局项目',
        to: '/layout-project',
        demoHeader: {
          title: '网页布局项目'
        }
      },
      {
        tag: '无缝轮播',
        to: '/vue-carousel',
        demoHeader: {
          title: '[ vue组件 - PC ] 无缝轮播图',
          links: [
            { name: 'github', href: 'https://github.com/lfyfly/vue-basic-components/blob/master/src/components/carousel/vue-carousel.vue' },
            { name: 'demo', href: 'https://github.com/lfyfly/vue-basic-components/blob/master/src/components/demos/carousel/vue-carousel-demo.vue' },
            { name: '实现原理', href: 'https://segmentfault.com/a/1190000011584322?_ea=2690954' }
          ]
        }
      },
      {
        tag: '3d轮播',
        to: '/vue-carousel-3d',
        demoHeader: {
          title: '[ vue组件 - PC] 3d轮播图',
          links: [
            { name: 'github', href: 'https://github.com/lfyfly/vue-basic-components/blob/master/src/components/carousel/vue-carousel-3d.vue' },
            { name: 'demo', href: 'https://github.com/lfyfly/vue-basic-components/blob/master/src/demos/carousel/vue-carousel-3d-demo.vue' },
            { name: '实现原理', href: '' }
          ]
        }
      },
      {
        tag: '消息弹窗插件',
        to: '/vue-msg',
        demoHeader: {
          title: '[ vue扩展 ] 消息弹窗',
          links: [
            { name: 'github', href: 'https://github.com/lfyfly/vue-basic-components/tree/master/src/plugins/vue-msg' },
            { name: 'demo', href: 'https://github.com/lfyfly/vue-basic-components/blob/master/src/demos/vue-msg/vue-msg-demo.vue' },
            { name: '实现原理', href: '' }
          ]
        }
      },
      {
        tag: '瀑布流组件',
        to: '/waterfall',
        demoHeader: {
          title: '[ vue组件 - 响应式 ] 瀑布流组件',
          links: [
            { name: 'github', href: 'https://github.com/lfyfly/vue-waterfall-easy/blob/master/src/components/vue-waterfall-easy.vue' },
            { name: 'demo', href: 'https://github.com/lfyfly/vue-waterfall-easy/blob/master/src/App.vue' },
            { name: '文档', href: 'https://github.com/lfyfly/vue-waterfall-easy/blob/master/README.md' },
            { name: '实现原理', href: '' }
          ]
        }
      },
      {
        tag: '图片预加载组件',
        to: '/preload-image',
        demoHeader: {
          title: '[ vue组件 ] 图片预加载',
          links: [
            { name: 'github', href: 'https://github.com/lfyfly/vue-preload-image/blob/master/src/components/vue-preload-image.vue' },
            { name: 'demo', href: 'https://github.com/lfyfly/vue-preload-image/blob/master/src/App.vue' },
            { name: '文档', href: 'https://github.com/lfyfly/vue-preload-image/blob/master/README.md' },
            { name: '实现原理', href: '' }
          ]
        }
      },

      {
        tag: '自定义滚动条',
        to: '/scrollbar-custom',
        demoHeader: {
          title: '[ vue组件 - PC ] 自定义滚动条',
          links: [
            { name: 'github', href: 'https://github.com/lfyfly/vue-scrollbar-custom/blob/master/src/vue-scrollbar-custom/vue-scrollbar-custom.vue' },
            { name: 'demo', href: 'https://github.com/lfyfly/vue-scrollbar-custom/blob/master/src/App.vue' },
            { name: '文档', href: 'https://github.com/lfyfly/vue-scrollbar-custom/blob/master/README.md' }
          ]
        }
      },
      {
        tag: '鼠标拖拽',
        to: '/drag',
        demoHeader: {
          title: '[ vue组件 - PC ] 鼠标拖拽',
          links: [
            { name: 'github', href: 'https://github.com/lfyfly/vue-dragdrag/blob/master/src/vue-dragdrag/vue-dragdrag.js' },
            { name: 'demo', href: 'https://github.com/lfyfly/vue-dragdrag/blob/master/src/App.vue' },
            { name: '实现原理', href: '' }
          ]
        }
      },
    ],

  },
  getters: {
    currDemoHeaderData(state) {
      return state.demos.filter((demo) => {
        return demo.to === state.currPage
      })[0].demoHeader
    }
  },
  mutations: {
    setCurrPage(state, currPage) {
      console.log(currPage)
      state.currPage = currPage
    },
  }

})
