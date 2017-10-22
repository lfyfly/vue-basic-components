<!-- —————————————↓SCSS———————分界线————————————————————————— -->
<style lang="scss">
.vue-msg {
  position: fixed;
  width: 300px;
  z-index: 99999;
  transform: translateX(-50%);
  left: 50%;
  top: 10px;
  font-family: "Microsoft YaHei";

  .slide-enter,
  .slide-leave-active {
    transform: translateY(-120%);
    opacity: 0;
  }
  .slide-enter-active,
  .slide-leave-active {
    transition: transform .3s, opacity .3s;
  }

  .msg-item {
    position: absolute;
    display: table;
    width: 100%;
    background: rgba(255, 255, 255, .95);
    box-shadow: 0 1px 3px rgba(0, 0, 0, .1);
    border-radius: 4px;
    overflow: hidden;
    &>* {
      display: table-cell;
      vertical-align: middle;
    }

    .msg-icon {
      overflow: hidden;

      $icon-size: 32px;
      margin-right: 10px;
      width: $icon-size;

      font-size: $icon-size * .7;
      text-align: center;
      color: #fff;
      font-weight: bold;
      &.err {
        background: red;
        &:after {
          content: '×';
          position: relative;
          top: -1px;
        }
      }
      &.succ {
        background: #13ce66;
        &:after {
          content: '√';
          font-weight: bold;
        }
      }
      &.warn {
        &:after {
          content: '!';
          font-weight: bold;
        }
        background: orange;
      }
      &.msg {
        background: #20a0ff;
        &:after {
          content: 'i';
          font-weight: bold;
        }
      }
    }

    .msg-content {
      padding: 6px;
      font-size: 15px;
      line-height: 20px;
      color: #1b1b1b;
    }

    .close {
      width: 20px;
      &:after {
        content: '×';
        margin-top: -2px;
        position: relative;
        color: #bbb;
        font-size: 20px;
      }
    }
  }
}
</style>

<!-- —————————————↓HTML————————分界线———————————————————————— -->
<template lang="pug">

transition-group.vue-msg(name="slide", tag="div",:style="msgStyle")
  .msg-item(v-for="(v,i) in msgs",:key="v.key")
    .msg-icon(:class="v.type")
    .msg-content {{v.content}}
    a.close(@click="closeMsgFn(v)")

</template>

<!-- ——————————————↓JS—————————分界线———————————————————————— -->
<script>
//import XXX from './components/XXX'

export default {
  name: 'vue-msg',

  data() {
    return {
      msgs: [],
    }
  },
  methods: {
    closeMsgFn(msg) {
      this.msgs.splice(this.msgs.indexOf(msg), 1)
    }
  }
}
</script>
