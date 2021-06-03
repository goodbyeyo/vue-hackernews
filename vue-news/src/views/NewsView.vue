<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue';
// import {fetchNewsList} from '../api/index.js';

export default {
  components: {
    ListItem,
  }
}
  // data() {
  //   return {
  //     users: []
  //   } 
  // },
  // created() {
  //   this.$store.dispatch('FETCH_NEWS'); 
    // console.log('호출전: ', this); //   호출전에는 VueComponent를 가르킨다
    // 다른언어는 this는 지역 scope 유효범위 좁게, 자바스크립트는 this 는 전역으로 시작
    // ES6 에서 use strict 문법 존재
    // fucntion Vue(el) {
    //  console.log(this);  <<-- 여기서 this는 생성자 함수를 가르킨다
    //  this.el = el;
    // }
    // new Vue('#app');
    // 결과 ::: Vue {}
    // 결과 ::: Vue {el: "#app"}

    // var vm = this;  // 컴포넌트를 바라보는 this를 연결, 
    // 함수 하나로 API 구조화
    // store > index.js > actions가 처리하도록 넘긴다
    // fetchNewsList()  
    // // axios.get('https://api.hnpwa.com/v0/news/1.json')   // promise 기반의 api 제공
    //   //.then(response => this.users = response.data)
    //   .then(function(response) {
    //     // 비동기호출은 호출되는 시점에서 기존에 this와는 별도
    //     console.log('호출후: ', this);    // 호출후에는 undefined,
    //     console.log(response);
    //     // 바인딩 문제때문에 화살표 함수를 쓰는것을 추천 => arrow function을 쓰면 바인딩이 자동으로 됌
    //     vm.users = response.data; // vue instance를 바라보지 않고 있기때문에 한번 연결해줘야한다(바인딩)
    //   })
    //   .catch(function(error){
    //      console.log(error)
    //   })
  // },
// }
</script>

<style scoped>

</style>