<!-- —————————————↓SCSS———————分界线————————————————————————— -->
<style lang="scss">
.carousel-3d {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  background: #15161a;
  .dots {
    position: absolute;
    bottom: 12px;
    left: 50%;
    z-index: 999;

    .dot {
      $width: 12px; // 小圆点的直径
      cursor: pointer;
      box-sizing: border-box;
      border: 2px solid transparent;
      border-radius: 50%;

      width: $width;
      height: $width;
      background: #333;
      margin: $width/2;
      float: left;
      &.active-dot {
        border: 2px solid #f84e4e;
      }
    }
  }


  .list-container {

    .item-container {
      // 其高度由于图片高度撑开
      display: inline-block;
      position: absolute;
      transition: left 1s, transform 1s;

      &:hover a.img-title {
        color: #00c0ff;
      }
    }

    .item-img {
      display: block;
    }
    a.img-title {
      // 相对于.item-container定位
      width: 100%;
      background: #222328;

      text-align: center;
      font-size: 16px;
      line-height: 36px;


      position: absolute;
      z-index: 100;
      top: 100%;
      left: 0;
    }
  }
}
</style>

<!-- —————————————↓HTML————————分界线———————————————————————— -->
<template lang="pug">
.carousel-3d(@mouseover="hoverFn",@mouseout="hoverFn")
  ul.dots(:style="{marginLeft:-len*12 +'px'}")
    li.dot(v-for="n in len",:class="{'active-dot': activeIndex===(n-1)}",@click="dotClickFn(n-1)")

  .list-container(:style="{height: height+'px',width:width+'px'}"  )
    a.item-container(
        v-for="(v,i) in imgsArr",
        :class="['img'+i,{med:i===activeIndex, left:i===prevIndex, right:i===nextIndex}]",
        :style="{ 'z-index':getZindex(i),'transform':`scale(${transformFn(i).scale})`,left:`${transformFn(i).left}px`}",
        @click="clickSwitchFn(i)"
      )
      img.item-img(:src="v.src")
      a.img-title(v-if="v.title") {{v.title}}

</template>

<!-- ——————————————↓JS—————————分界线———————————————————————— -->
<script>
//import XXX from './components/XXX'

export default {
  name: 'vue-carousel-3d',
  props: {
    imgsArr: { // 图片的数据数组， 格式： [{src="图片地址",title="图片标题"},{...}]
      type: Array,
      required: true
    },
    imgWidth: { // 图片的宽度
      type: Number,
      default: NaN
    },
    width: { // 轮播图容器的宽度
      type: Number,
      default: 400
    },
    height: { // 轮播图容器的高度
      type: Number,
      default: 600
    },
    interval: { // 自动播放时间间隔
      type: Number,
      default: 3000
    }
  },
  data() {
    return {
      msg: 'this is from vue-carousel-3d.vue',
      activeIndex: 0,
      timer: null, // 自动播放定时器
      timer1: null, // 多步分步执行定时器
      dir: 'right',
      transitionInterval: 600 // 过渡动画时长1000毫秒
    }
  },
  computed: {
    len() {
      return this.imgsArr.length
    },
    prevIndex() {
      var curr = this.activeIndex - 1
      return curr >= 0 ? curr : this.len - 1
    },
    nextIndex() {
      var curr = this.activeIndex + 1
      return curr === this.len ? 0 : curr
    },

  },
  methods: {
    clickSwitchFn(i) { // 点击左右图片实现左右切换
      if (this.isTransitioning) return // transition中不执行
      this.activeIndex = i
    },
    dotClickFn(target) { // 小圆点点击函数
      if (this.isTransitioning) return // transition中不执行

      if (this.timer1) clearInterval(this.timer1)
      if (this.activeIndex === target) return


      var old = this.activeIndex // 记录旧值
      var abs = Math.abs(target - old)
      if (abs === 1 || abs === (this.len - 1)) { // 步长为1和步长为this.len - 1 都按照一步操作
        this.activeIndex = target
        return
      }

      // 跨越超过一步，逐步执行
      // 分步的时间间隔 1/步长
      var stepInterval = parseInt(this.transitionInterval / abs)

      var aImg = this.$el.getElementsByClassName('item-container')
      for (var i = 0; i < aImg.length; i++) {
        aImg[i].style.transition = "all " + (stepInterval / 1000).toFixed(2) + 's'
      }

      // 首次执行
      target > old ? this.activeIndex++ : this.activeIndex--

      this.timer1 = setInterval(() => {
        // 正方向
        target > old ? this.activeIndex++ : this.activeIndex--

        if (this.activeIndex === target) { // 到达目标
          clearInterval(this.timer1)
          setTimeout(() => {
            for (var i = 0; i < aImg.length; i++) {
              aImg[i].style.transition = "all " + this.transitionInterval / 1000 + 's'// 还原过渡时间
            }
          }, stepInterval) // 执行完最后一次，再恢复为1s
        }
      }, stepInterval)

    },
    getZindex(i) {
      // 下一个元素在向右切换时z-index为8，上一个元素z-index为10，左边切换时反之
      if (i === this.activeIndex) {
        return 3
      }

      if (i === this.nextIndex) {
        return this.dir === 'right' ? 1 : 2 //
      }
      if (i === this.prevIndex) {
        return this.dir === 'right' ? 2 : 1
      }
    },

    transformFn(i) { // 输入i值，输出对应元素的left值和scale值
      var left = (this.width - this.imgWidth) / 2,
        scale = 0.9
      switch (i) {
        case this.activeIndex:
          scale = 1 // 视口正中间原始大小
          break
        case this.prevIndex:
          left = -(1-scale)/2 * this.imgWidth // 左边，缩小为原尺寸0.9 ，通过left隐藏缩放产生的白边
          break
        case this.nextIndex:
          left = this.width - this.imgWidth * (scale+(1-scale)/2) // 右边，通过left隐藏缩放产生的白边
          break
        default:
          scale = 0.8
      }
      return { left, scale }
    },

    startInterval() { // 起点自动播放函数
      this.timer = setInterval(() => {
        this.activeIndex = this.nextIndex
      }, this.interval)
    },
    hoverFn(e) { // 移入停止转动播放，移除恢复自动播放
      if (e.type === 'mouseover') {
        if (this.timer) clearInterval(this.timer)
      } else {
        this.startInterval()
      }
    }
  },
  mounted() {
    this.startInterval()
  },
  watch: {
    activeIndex(newV, oldV, ) {
      // 确定轮播的方向
      // 当下一个索引值大于上一索引值（排除从 第一张 -> 最后一张）
      // 或者 最后一张-> 第一张
      this.dir = (newV > oldV && !(newV === this.len - 1 && oldV === 0)) || (newV === 0 && oldV === this.len - 1) ? 'right' : 'left'

      // 避免transition期间操作
      this.isTransitioning = true
      setTimeout(() => {
        this.isTransitioning = false // 为false时表示transition过渡结束，可以进行切换轮播
      }, this.transitionInterval)

    }
  }
}
</script>
