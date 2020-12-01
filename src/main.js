import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import './assets/scss/reset.scss'
import 'amfe-flexible/index.js'
import Vant from 'vant'
import 'vant/lib/index.css'
import FastClick from 'fastclick'

FastClick.attach(document.body)

Vue.use(Vant)

Vue.prototype.$http = axios

Vue.config.productionTip = false

axios.interceptors.request.use(function (config) {
  config.headers['Content-Type'] = 'application/json;charset=UTF-8'
  const token = localStorage.getItem('token')
  config.headers.Authorization = token
  return config
})

axios.defaults.baseURL = 'https://www.baidu.com/' // dev

Vue.prototype.$post = function (url, data) {
  const opt = {
    url: url,
    method: 'post',
    data: {
      request: data
    },
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  }
  return new Promise((resolve, reject) => {
    axios(opt)
      .then(res => {
        resolve(res)
      })
      .catch(res => {
        reject(res)
      })
  })
}

axios.interceptors.response.use(res => {
  if (res.data.resultCode === -3) {
    localStorage.removeItem('token')
    router.push({
      path: '/',
      query: {}
    })
  }
  return res
})

new Vue({
  router,
  data: function () {
    return {
      showLoading: false
    }
  },
  render: h => h(App)
}).$mount('#app')
