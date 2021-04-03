import Vue from 'vue'
import App from './App.vue'
import { router } from './routes/index.js';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,  // router:router, 축약문법 // 인헤이스터 오브젝트 리터럴
}).$mount('#app')
