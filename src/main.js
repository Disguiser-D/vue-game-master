import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
// import axios from 'axios';
//
// Vue.prototype.$http = axios;
import http from './router/http.js'; //此处问http文件的路径

Vue.prototype.$http = http;
Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
