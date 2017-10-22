<!-- —————————————↓SCSS———————分界线————————————————————————— -->
<style lang="scss">
.demo-header {
  white-space: nowrap;
  text-align: center;
  margin: 10px 0 ;
  &>* {
    display: inline-block;
  }
  .links {
    margin-left: 10px;
    .link {
      background: #ccc;
      padding: 0 10px;
      margin: 0 2px;
      border-radius: 15px;
      line-height: 22px;
      display: inline-block;
      background: #13ce66;
      color: #fff;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>

<!-- —————————————↓HTML————————分界线———————————————————————— -->
<template lang="pug">
.demo-header
  h3.title {{title}}
  ul.links
    li: a.link(v-for="link in links",:href="link.href?link.href:false",target="_blank") {{link.name}}

</template>

<!-- ——————————————↓JS—————————分界线———————————————————————— -->
<script>
//import XXX from './components/XXX'

export default {
  name: 'demo-header',
  props: ['title', 'links'],
  data() {
    return {
      msg: 'this is from demo-header.vue'
    }
  },
  methods: {

  }
}
</script>
