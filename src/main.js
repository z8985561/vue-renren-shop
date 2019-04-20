import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import "lib-flexible"
import "@/assets/style/reset.css"
Vue.use(VueResource)

//引入Mint-UI组件
import Mint from 'mint-ui'
import "mint-ui/lib/style.css";
Vue.use(Mint)


//自定义全局样式
import "@/assets/style/my.less"

//引入路由
import router from './router/index'


Vue.config.productionTip = false

new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app')
