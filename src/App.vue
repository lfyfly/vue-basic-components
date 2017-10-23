<template lang="pug">
#app(:class="{'is-mobile':isMobile}")
  nav-tag#nav(:tags="demos")
  demo-header(v-if="currDemoHeaderData",:data="currDemoHeaderData")
  #main
    transition(name="fade")
      keep-alive
        router-view.router-view
</template>

<script>
import navTag from '@/components/nav-tag.vue'
import demoHeader from '@/components/demo-header'
import { mapGetters } from 'vuex'
import { mapState } from 'vuex'
export default {
  name: 'app',
  components: {
    navTag,
    demoHeader
  },
  data() {
    return {

    }
  },
  computed: {
    ...mapGetters(['currDemoHeaderData']),
    ...mapState(['demos', 'isMobile']),
  },
  mounted() {
    if (this.isMobile) {
      this.$msg({
        type: 'warn',
        content: '部分组件仅适用于PC端，请使用PC端浏览器访问获得最佳体验！',
        timeout: 0
      })
    }
  }
}
</script>

<style lang="scss">
// reset css
* {
  margin: 0;
  padding: 0;
}

html,
body,
#app {
  height: 100%;
}

iframe {
  width: 100%;
  height: 100%;
  border: none;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s
}

.fade-enter,
.fade-leave-to
/* .fade-leave-active in below version 2.1.8 */

{
  opacity: 0
}

#app {
  display: flex;
  flex-direction: column;
  #main {
    position: relative;
    height: 100%;

    .router-view {
      flex-grow: 1;
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      overflow: auto;
    }
  }
}

li {
  list-style-type: none;
}

a {
  cursor: pointer;
  text-decoration: none;
  color: #5e5e5e;
}
</style>
