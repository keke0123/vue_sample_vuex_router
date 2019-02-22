import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {store} from './stores/store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// store 를 여기서 넣어주면 따로 import 할 필요가 없다

/*
render : h => h(App) 의 간소화 과정
# 1
render : function (createElement){
  return createElement(App);
}
# 2
render (createElement){
  return createElement(App);
}
# 3
render (h){
  return h(App);
}
*/