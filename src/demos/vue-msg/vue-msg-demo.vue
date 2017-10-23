<!-- —————————————↓SCSS———————分界线————————————————————————— -->
<style lang="scss">
.vue-msg-demo {

  button {
    cursor: pointer;
    display: block;
    border: none;
    line-height: 40px;
    font-size: 18px;
    margin: 20px auto;
    padding: 0 20px;
    border-radius: 8px;
    outline: none;
    color: #fff;
    &.succ {
      background: #13ce66;
    }
    &.err {
      background: red;
    }
    &.warn {
      background: orange;
    }

    &.msg {
      background: #20a0ff;
    }
    &.random{
      background: #000;
    }
  }
}
</style>

<!-- —————————————↓HTML————————分界线———————————————————————— -->
<template lang="pug">
.vue-msg-demo
  button.succ(@click="succMsgFn") 弹出一个成功的消息
  button.err(@click="errorMsgFn") 弹出一个失败的消息
  button.warn(@click="warnMsgFn") 弹出一个警告的消息
  button.msg(@click="msgMsgFn") 弹出一个信息的消息
  button.random(@click="randomMsgFn") 弹出一个随机的消息
</template>

<!-- ——————————————↓JS—————————分界线———————————————————————— -->
<script>

export default {
  name: 'vue-msg-demo',
  data() {
    return {
      msg: 'this is from vue-msg-demo.vue'
    }
  },
  methods: {
    succMsgFn() {
      this.$msg({
        type: 'succ',
        content: '弹出一个成功的消息'
      })
    },
    errorMsgFn() {
      this.$msg({
        type: 'err',
        content: '弹出一个失败的消息'
      })
    },
    warnMsgFn() {
      this.$msg({
        type: 'warn',
        content: '弹出一个警告的消息'
      })
    },
    msgMsgFn() {
      this.$msg({
        type: 'msg',
        content: '弹出一个信息的消息'
      })
    },
    randomMsgFn() {
      var msgTypes = ['succ', 'warn', 'msg', 'err']
      var randomIndex = Math.floor(Math.random() * 4)
      this.$msg({
        type: msgTypes[randomIndex],
        content: Date.now()
      })
    }
  }
}
</script>
