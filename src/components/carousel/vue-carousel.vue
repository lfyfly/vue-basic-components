<!-- —————————————↓SCSS———————分界线————————————————————————— -->
<style lang="scss">
.vue-carousel {
  height: 100%;
  overflow: hidden;
  position: relative;
  &:hover {
    .prev,
    .next {
      display: block;
    }
  }
}

.imgs-container {
  height: 100%;
  .img-item {
    display: inline-block;
    width: 100%;
    height: 100%;
    background: #ccc no-repeat center/cover;
  }
} // 上一张 下一张 按钮
.prev,
.next {
  display: none;

  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  width: 44px;
  font-size: 60px;

  cursor: pointer;
  color: rgba(0, 0, 0, .7);
  text-align: center;
  font-weight: 200;
  line-height: 80px;
}

.prev {
  left: 4%;
}

.next {
  right: 4%;
}

// 轮播图地下的小圆点
.dots {
  display: table;
  margin: 0 auto;
  transform: translateY(-120%);
  .dot {
    $width: 12px; // 小圆点直径
    display: inline-block;
    box-sizing: border-box;
    width: $width;
    height: $width;
    margin: $width/2;
    border: 2px solid transparent;
    border-radius: 50%;

    background: rgba(0, 0, 0, .7);
    cursor: pointer;

    &.active-dot {
      border: 2px solid #f84e4e;
    }
  }
}
</style>

<!-- —————————————↓HTML————————分界线———————————————————————— -->
<template lang="pug">
.vue-carousel(@mouseenter="hoverFn",@mouseleave="hoverFn")
  //- ==3== 对应的activeIndex
  .imgs-container(:style="{width:len*100+'%',transform:`translate(-${activeIndex*100/len}%)`,transition:isResetIndex? '': `transform ${transitionInterval/1000}s`}")
    a.img-item(
      v-for="(img,i) in imgsComputed",
      :style="{width:100/len+'%',backgroundImage: `url(${img.src})`}",
      :href="img.href?img.href:false"
    )
  //- onselectstart实现文字双击不可选中
  .prev(@click="switchFn",onselectstart="return false") &lt;
  .next(@click="switchFn",onselectstart="return false") &gt;

  //- 事件冒泡代理
  ul.dots(@click="activeDotFn")
    li.dot(v-for="n in (len-2)", :data-dot-index="n",:class="{'active-dot': activeIndex===n||(activeIndex===(len-1)&&n===1)||(activeIndex===0&&n===5)}")
</template>

<!-- ——————————————↓JS—————————分界线———————————————————————— -->
<script>
//import XXX from './components/XXX'

export default {
  name: 'carousel',
  props: {
    imgs: {
      type: Array,
      required: true
    },
    interval: {
      type: Number,
      default: 5000
    }
  },
  data() {
    return {
      msg: 'this is from carousel.vue',
      activeIndex: 1, // ==2== 当前显示第一张
      timer: null, // 自动播放的定时器
      isTransitioning: false, // 是否处于过度动画执行期间
      transitionInterval: 500, // 过渡动画时长
      isResetIndex: false, // 是否为瞬间重置定位，在watch中初始化，重定位会取消transition动画
    }
  },
  computed: {
    // ==1== 为了无缝滚动，在传进来的imgs数组首部增加末尾元素，在尾部追加首元素
    imgsComputed() {
      var firstImg = this.imgs[0];
      var lastImg = this.imgs[this.imgs.length - 1]
      return [lastImg].concat(this.imgs, [firstImg])
    },
    len() {
      return this.imgsComputed.length
    },
  },
  methods: {
    activeDotFn(e) {
      if (e.target.tagName.toLowerCase() === 'li') {
        let index = parseInt(e.target.getAttribute('data-dot-index'))
        this.activeIndex = index
      }
    },
    switchFn(e) {
      if (this.isTransitioning) return // 动画过渡中不可以进行切换
      // ==4== 对activeIndex进行操作
      e.target.className.indexOf('next') != -1 ? this.activeIndex++ : this.activeIndex--
    },
    startInterval() { // 启动自动轮播函数
      this.timer = setInterval(() => {
        // ==4== 对activeIndex进行操作
        this.activeIndex++
      }, this.interval)
    },
    hoverFn(e) { // 鼠标移入暂停轮播，移出恢复轮播
      if (e.type === 'mouseenter') {
        if (this.timer) clearInterval(this.timer)
      } else {
        this.startInterval()
      }
    }
  },
  mounted() {
    this.startInterval() // 启动自动轮播
  },
  watch: {
    activeIndex(newActiveIndex, oldActiveIndex) {
      console.log(newActiveIndex, oldActiveIndex)
      // ==5== 监听activeIndex的变化，当activeIndex到达边界的时候进行复位
      // if(是轮播图从最后一张切换到第一张 || 是轮播图从第一张切换到最后一张) 是属于瞬间归位，直接return，不执行以后所有函数
      if ((newActiveIndex === 1 && oldActiveIndex === (this.len - 1)) || (oldActiveIndex === 0 && newActiveIndex === this.len - 2)) {
        this.isResetIndex = true
        return
      }

      this.isResetIndex = false
      this.isTransitioning = true // 为true时表示正在进行transition过渡中，不可以进行切换轮播

      setTimeout(() => {
        // 瞬间归位需要取消transition过渡
        // 以下两种情况是瞬间归位时activeIndex变化
        if (this.activeIndex === 0) {
          this.activeIndex = this.len - 2
        } else if (this.activeIndex === (this.len - 1)) {
          this.activeIndex = 1
        }
        this.isTransitioning = false // 为false时表示transition过渡结束，可以进行切换轮播
      }, this.transitionInterval)
    }
  }
}
</script>
