<template>
  <div>
    ㅣ<!-- 설계시 유연하게 대응하기 위해서는 페이지 역할을 하는 컴포넌트는 데이터를 라우팅하는 정보만 담고 있도록 한다-->
    ㅣ<!-- 비지니스 로직은 들어가지 않도록 한다-->
    <div v-for="user in users">{{ user.title }}</div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      users: []
    }
  },
  created() {
    var vm = this;
    axios.get('https://api.hnpwa.com/v0/news/1.json')   // promise 기반의 api 제공
      //.then(response => this.users = response.data)
      .then(function(response) {
        console.log(response);
        // 바인딩 문제때문에 화살표 함수를 쓰는것을 추천
        vm.users = response.data; // vue instance를 바라보지 않고 있기때문에 한번 연결해줘야한다
      })
      .catch(function(error){
         console.log(error)
      })
  },
}
</script>

<style>

</style>