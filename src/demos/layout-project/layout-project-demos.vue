<!-- —————————————↓SCSS———————分界线————————————————————————— -->
<style lang="scss">
.layout-project-demos {
  line-height: 1.8;
  .demo-header {
    border-bottom: 1px solid #ccc;
    width: auto;
    max-width: 800px;
    margin: 0 auto 10px;
    padding: 10px;
  }
  .title {
    font-weight: normal;
    display: block;
  }
}
</style>

<!-- —————————————↓HTML————————分界线———————————————————————— -->
<template lang="pug">
.layout-project-demos
  demo-header(
    v-for="(project,i) in projects",
    :data="project",
    :key="i"
  )

</template>

<!-- ——————————————↓JS—————————分界线———————————————————————— -->
<script>
//import XXX from './components/XXX'
import demoHeader from '@/components/demo-header'

export default {
  name: 'layout-project-demos',
  components: {
    demoHeader
  },
  data() {
    return {
      msg: 'this is from layout-project-demos.vue',
      projects: [
        {
          logo: 'static/layout-ptoject/豆瓣-logo.jpg',
          title: '[ 移动端布局 ] 手机端豆瓣首页（仿）',
          links: [
            { name: 'github', href: 'https://github.com/lfyfly/douban-mobile' },
            { name: '线上效果', href: 'http://lfyfly.gitee.io/douban-mobile/docs/' },
          ]
        },
        {
          logo: 'static/layout-ptoject/印象笔记-logo.jpg',
          title: '[ 响应式布局 ] 印象笔记官网（仿）',
          links: [
            { name: 'github', href: 'https://github.com/lfyfly/yinxiang-response' },
            { name: '线上效果', href: 'http://lfyfly.gitee.io/yinxiang-response/docs/' },
          ]
        },
        {
          logo: 'static/layout-ptoject/dota2-logo.jpg',
          title: '[ PC端布局 ] dota2官网首页（仿）',
          links: [
            { name: 'github', href: 'https://github.com/lfyfly/dota2-home-page' },
            { name: '线上效果', href: 'http://lfyfly.gitee.io/dota2-home-page/docs/' },
          ]
        },
        {
          logo: 'static/layout-ptoject/markdown-logo.jpg',
          title: '[ 响应式端布局 ] 在线markdown编辑器',
          links: [
            { name: 'github', href: 'https://github.com/lfyfly/fly-markdown' },
            { name: '线上效果', href: 'http://lfyfly.gitee.io/fly-markdown/docs' },
            { name: '文档', href: 'https://github.com/lfyfly/fly-markdown/blob/master/README.md' }
          ]
        },

      ]
    }
  },
  methods: {

  }
}
</script>
