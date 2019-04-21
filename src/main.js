import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import "lib-flexible"
import "@/assets/style/reset.css"
import "@/assets/iconfont/iconfont.css"
Vue.use(VueResource)

//引入Mint-UI组件库
import Mint from 'mint-ui'
import "mint-ui/lib/style.css";
Vue.use(Mint)

//引入vant-UI组件库
import Vant from "vant"
import 'vant/lib/index.css';
Vue.use(Vant)


//自定义全局样式
import "@/assets/style/base.less"
import "@/assets/style/my.less"

//引入路由
import router from './router/index'

// 数据模拟Api
// import axios from 'axios'
// import VueAxios from 'vue-axios'
// Vue.use(VueAxios,axios);

new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app')
