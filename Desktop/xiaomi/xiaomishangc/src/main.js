import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios"
import env from './env'
Vue.config.productionTip = false

// 根据前端的跨域方式做调整
// axios.defaults.baseURL="/api" //接口代理
axios.defaults.baseURL=env.baseURL //在cors跨域时使用这个
axios.defaults.timeout=8000

// 请求拦截
axios.interceptors.request.use(function(response){

  return response
})

// 接口错误拦截,响应拦截
axios.interceptors.response.use(function(response){
  // 取到data
      let res=response.data
      // 返回值是0
      if(res.status==0){ //成功
        return res.data
      }else if(res.status==10){ //未登陆
        window.location.href="/login"
      }
      return response
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
