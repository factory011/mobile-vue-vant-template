import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'lib-flexible'

import {
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton,
  AddressEdit
} from 'vant'

Vue
  .use(GoodsAction)
  .use(GoodsActionIcon)
  .use(GoodsActionButton)
  .use(AddressEdit)

Vue.config.productionTip = false

// 监听window窗口大小的变化，从而动态改变html根节点的font-size的大小。达到适配不同设备的效果
window.onresize = setHtmlFontSize
function setHtmlFontSize () {
  const htmlWidth = document.documentElement.clientWidth || document.body.clientWidth
  const htmlDom = document.getElementsByTagName('html')[0]
  htmlDom.style.fontSize = htmlWidth / 10 + 'px'
}
setHtmlFontSize()

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
