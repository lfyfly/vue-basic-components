import Vue from 'vue'
import vueMsg from './vue-msg.vue'

let msgConstructor = Vue.extend(vueMsg)
let instance

function msg(msg) {
  if (!msg.content) return
  let timeout = msg.timeout
  let defaultMsg = {
    key: Date.now(), // 唯一key
    type: 'succ', // 默认类型
    timeout: 3000,
    delay: 0
  }
  msg = Object.assign({}, defaultMsg, msg)

  instance.msgs.push(msg)
  if (timeout === 0) return
  timeout = msg.timeout || 3000
  setTimeout(function () {
    instance.msgs.splice(instance.msgs.indexOf(msg), 1)

  }, timeout)
}

export default {
  /**
   *
   *
   * @param {any} Vue
   * @param {any} msgStyle 消息组件外层容器的样式对象，可用于覆盖默认定位
   * @returns
   */
  install(Vue, msgStyle) {
    // 实例化

    instance = new msgConstructor({
      el: document.createElement('div'),
      data() {
        return {
          msgStyle: msgStyle ? msgStyle : ''
        }
      }
    })
    document.body.appendChild(instance.$el)


    Vue.prototype.$msg = msg
  }
}
