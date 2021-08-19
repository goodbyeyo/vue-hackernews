import Vue from 'vue'
import App from './App.vue'
import { router } from './routes/index.js';
import Vuex from 'vuex'
import { store } from './store/index.js'
import ChartPlugin from './plugins/ChartPlugin.js';
Vue.config.productionTip = false

Vue.use(ChartPlugin);

// main.js 는 앱의 구조를 확인할수 있는 설정, 청사진 => 단순화해야... 
// store에 대한 코드는 store 폴더에 index.js 에 분리
// new Vuex.Store({
//   state,
//   getters,
//   mutations,
//   actions,
// })


new Vue({
  render: h => h(App),
  router,  // router:router, 축약문법 // 인헤이스터 오브젝트 리터럴
  store,
}).$mount('#app')
