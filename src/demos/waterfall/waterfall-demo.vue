<!-- —————————————↓SCSS———————分界线————————————————————————— -->
<style lang="scss">
.waterfall-demo {}
</style>

<!-- —————————————↓HTML————————分界线———————————————————————— -->
<template lang="pug">
.waterfall-demo
  vue-waterfall-easy(:imgsArr="imgsArr",@scrollLoadImg="fetchImgsData")
    template(scope="props")
      p.some-info 第{{props.index+1}}张图片
      p.some-info {{props.value.info}}
  //- iframe.waterfall-iframe(src="http://lfyfly.gitee.io/vue-waterfall-easy/docs/")
</template>

<!-- ——————————————↓JS—————————分界线———————————————————————— -->
<script>
import vueWaterfallEasy from '@/components/waterfall/waterfall.vue'

export default {
  name: 'waterfall-demo',
  data() {
    return {
      imgsArr: [],
      fetchImgsArr: []
    }
  },
  components: {
    vueWaterfallEasy
  },
  methods: {
    // 假数据
    initImgsArr(n, m) { //num 图片数量
      var arr = []
      for (var i = n; i < m; i++) {
        arr.push({ src: `../static/waterfall/${i + 1}.jpg`, link: 'https://www.baidu.com', info: '一些图片描述文字' })
      }
      return arr
    },

    fetchImgsData() {
      this.imgsArr = this.imgsArr.concat(this.fetchImgsArr)
    }
  },
  created() {
    this.imgsArr = this.initImgsArr(0, 10)
    this.fetchImgsArr = this.initImgsArr(10, 20) // 模拟每次请求的新的图片的数据数据
  },
}
</script>
