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
      
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue';
import Spinner from './components/Spinner.vue';
import bus from './utils/bus.js';

export default {
  components: {
    ToolBar,
    Spinner,
  },
  data() {
    return {
      loadingStatus : false,
    };
  },
  methods: {
    startSpinner() {
      this.loadingStatus = true;
    },
    endSpinner() {
      this.loadingStatus = false;
    }
  },
  created() {
    bus.$on('start:spinner', this.startSpinner);
    // bus.$on('start:spinner', () => this.loadingStatus = true);
    bus.$on('end:spinner', this.endSpinner);
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