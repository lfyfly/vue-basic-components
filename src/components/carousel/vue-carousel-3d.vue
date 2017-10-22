<!-- —————————————↓SCSS———————分界线————————————————————————— -->
<style lang="scss" >
.vue-carousel-3d {
  position: relative;
  &.tansition-off .img-item {
    transition: none!important;
    left: 50%!important;
    right: auto;
    transform: translateX(-50%) scale(.8)!important;
  }
  .imgs-container {
    width: 100%;
    height: 100%;
    &>.img-item {
      position: absolute;
    }
    &.to-next {
      .prev {
        z-index: 2;
      }
      .next {
        z-index: 1;
      }
    }
    .img-item {
      // 隐藏在背后的图片
      left: 50%;
      transform: translateX(-50%) scale(.8);
      transform-origin: center;
      transition: transform .4s, left .4s, right .4s;
    }

    .prev,
    .next {
      transform: scale(.8);
    }
    .prev {
      transform-origin: left;
      left: 0;
      z-index: 1;
    }
    .next {
      left: auto;
      right: 0;
      z-index: 2;
      transform-origin: right;
    }

    .active {
      left: 50%;
      z-index: 3;
      transform: translateX(-50%);
    }
  }

  .dots {
    position: absolute;
    z-index: 4;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    .dot {
      $width: 8px; // 小圆点直径
      display: inline-block;
      box-sizing: border-box;
      width: $width*2;
      height: $width;
      margin: $width/2;
      border: 2px solid transparent;
      background: rgba(0, 0, 0, .6);
      cursor: pointer;
      &.active-dot {
        background: #fff;
      }
    }
  }
}
</style>

<!-- —————————————↓HTML————————分界线———————————————————————— -->
<template lang="pug">
.vue-carousel-3d(
  :style="{minWidth:imgWidth*1.4+'px',maxWidth:imgWidth*2+'px',height:height+'px'}",
  @mouseenter="hoverFn",@mouseleave="hoverFn",
  :class="{'tansition-off':isGt2}"
  )
  .imgs-container(@click="switchFn",:class="{'to-next':dir==='next'}")
    a.img-item(
      v-for="(img,i) in imgs",
      :href="img.href?img.href:false",
      :class="{active:activeIndex===i,prev:activeIndex-1===i||(activeIndex===0&&i===len-1),next:activeIndex+1===i||(activeIndex===len-1&&i===0)}",
      )
      img(:src="img.src")
  //- 事件冒泡代理
  ul.dots(@click="activeDotFn")
    li.dot(v-for="n in len", :data-dot-index="n-1",:class="{'active-dot': activeIndex===n-1}")

</template>

<!-- ——————————————↓JS—————————分界线———————————————————————— -->
<script>
//import XXX from './components/XXX'

export default {
  name: 'vue-carousel-3d',
  props: {
    imgs: {
      type: Array,
      required: true
    },
    imgWidth: { // 图片的宽度
      type: Number,
      required: true
    },
    height: { // 轮播图容器的高度
      type: Number,
      required: true,
    },
    interval: { // 自动播放时间间隔
      type: Number,
      default: 2000
    }
  },
  data() {
    return {
      msg: 'this is from vue-carousel-3d.vue',
      activeIndex: 0,
      dir: 'next',// 根据切换方向，来调整左边的z-index大于右的z-index
      isGt2: false,  // 跨度大于2
      timer:null // 自动轮播定时器
    }
  },
  computed: {

    len() {
      return this.imgs.length
    },
  },
  methods: {
    activeDotFn(e) {
      if (e.target.tagName.toLowerCase() === 'li') {
        let index = parseInt(e.target.getAttribute('data-dot-index'))
        this.activeIndex = index
      }
    },
    startInterval() { // 启动自动轮播函数
      this.timer = setInterval(() => {
        this.activeIndex++
        this.activeIndex = this.activeIndex != this.len ? this.activeIndex : 0
      }, this.interval)
    },
    hoverFn(e) { // 鼠标移入暂停轮播，移出恢复轮播
      if (e.type === 'mouseenter') {
        if (this.timer) clearInterval(this.timer)
      } else {
        this.startInterval()
      }
    },
    hasClass(el, className) {
      if (el.className.indexOf(className) != -1) return true
    },
    switchFn(e) {
      let imgItemEl = e.target.parentNode
      if (this.hasClass(imgItemEl, 'img-item')) {

        if (this.hasClass(imgItemEl, 'next')) {
          if (this.activeIndex === this.len - 1) {
            this.activeIndex = 0
            return
          }
          this.activeIndex++
        }
        if (this.hasClass(imgItemEl, 'prev')) {
          // 第一张向上，第二张向下
          if (this.activeIndex === 0) {
            this.activeIndex = this.len - 1
            return
          }
          this.activeIndex--
        }
      }
    },
  },
  watch: {
    activeIndex(newV, oldV) {
      let dif = Math.abs(newV - oldV)
      if (dif >= 2 && dif != (this.len - 1)) {
        this.isGt2 = true // 跨度大于2的动画是从中心展开的
        setTimeout(() => {
          this.isGt2 = false
        }, 0)
        return
      }
      this.isGt2 = false

      if (newV > oldV || newV === 0 && oldV === this.len - 1) {
        this.dir = 'next'
      } else {
        this.dir = 'prev'
      }
    }
  },
  mounted() {
    this.startInterval() // 启动自动轮播
  }
}
</script>
