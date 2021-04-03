<template>
  <div id="app">
    <!-- URL이 만약 news라면  <news-view></news-view> -->
    <!-- 1. Strongly Recommented-->
    <!-- <ToolBar></ToolBar> <== 앞글자 대문자 : 컴포넌트 태그인것이 명확히 구별됨-->
    
    <!-- 2. Essentail Recommented-->
    <tool-bar></tool-bar>   <!-- 컴포넌트 태그 연결 가능 -->
    <router-view></router-view>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue';

export default {
  components: {
    ToolBar,
  },
}
</script>

<style>
body{ 
  padding : 0;
  margin : 0;
}
</style>