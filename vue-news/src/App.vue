<template>
  <div id="app">
    <!-- URL이 만약 news라면  <news-view></news-view> -->
    <!-- 1. Strongly Recommented-->
    <!-- <ToolBar></ToolBar> <== 앞글자 대문자 : 컴포넌트 태그인것이 명확히 구별됨-->
    
    <!-- 2. Essentail Recommented-->
    <tool-bar></tool-bar>   <!-- 컴포넌트 태그 연결 가능 -->
    <transition name="fade"> <!-- 트랜지션 처리 -->
      <router-view></router-view>
    </transition>
    <spinner :loading="loadingStatus"></spinner> <!-- 스피너 등록 -->
    
    <chart-view v-on:refreshChart="refreshChart" v-bind:propsdata="chartDataSet"></chart-view>
    
      
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue';
import Spinner from './components/Spinner.vue';
import bus from './utils/bus.js';
import ChartView from './views/ChartView.vue';

export default {
  components: {
    ToolBar,
    Spinner,
    ChartView,
  },
  data() {
    return {
      loadingStatus : false,
      chartDataSet: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
      }],
    };
  },
  methods: {
    startSpinner() {
      this.loadingStatus = true;
    },
    endSpinner() {
      this.loadingStatus = false;
    },
    refreshChart() {
      this.chartDataSet = [10,20];
    }
  },
  created() {
    bus.$on('start:spinner', this.startSpinner);
    // bus.$on('start:spinner', () => this.loadingStatus = true);
    bus.$on('end:spinner', this.endSpinner);
    
    // 차트데이터 api 호출


  },
  beforeDestroy() {
    // 페이지에서 앱을 종료하기전 or 컴포넌트 역할이 끝나고나서 이벤트를 종료해야함
    // off 해줘야 이벤트 객체가 쌓이지 않고 계속 해제가 가능하다...
    bus.$off('start:spinner', this.startSpinner); 
    bus.$off('end:spinner', this.endSpinner);
  }
}
</script>

<style>
body { 
  padding: 0;
  margin: 0;
}

a {
  color: #34495e;
  text-decoration: none;  /* 텍스트 밑줄 표시 : 해제 */
}

a:hover {  /* 특정 태그에 상태 변화가 일어났을때 css 효과를 추가할수 있다  */
  color: #42b883;
  text-decoration: underline;
}
a.router-link-exact-active {
  text-decoration: underline;
}

/* Router Transition */
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>