<!-- —————————————↓SCSS———————分界线————————————————————————— -->
<style lang="scss">
.demo-header {
  text-align: center;
  margin: 18px;
  .demo-logo{
    width: 50px;
    height: 50px;
    margin: 0 auto;
    display: block;
    background-size: contain;
  }
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
    .unfinished{
      background: #eee;
    }
  }
}
</style>

<!-- —————————————↓HTML————————分界线———————————————————————— -->
<template lang="pug">
.demo-header
  .demo-logo(v-if="data.logo",:style="{'background-image':`url(${data.logo})`}")
  h3.title {{data.title}}
  ul.links
    li
      a.link(
        v-if="link.href",
        v-for="link in data.links",
        :href="link.href?link.href:false",
        target="_blank",
        :class="{unfinished:!link.href}"
        ) {{link.name}}

</template>

<!-- ——————————————↓JS—————————分界线———————————————————————— -->
<script>
//import XXX from './components/XXX'

export default {
  name: 'demo-header',
  props: ['data'],
  data() {
    return {
      msg: 'this is from demo-header.vue'
    }
  },
  methods: {

  }
}
</script>
