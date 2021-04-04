<template>
  <div>
    <!-- <div v-for="item in asks">{{ item.title }}</div> -->
    <div v-for="item in this.$store.state.asks">{{ item.title }}</div>
  </div>
</template>

<script>
// import { fetchAskList } from '../api/index.js';

export default {
  // data() {
  //   return {
  //     asks: []
  //   }
  // },
  created() { //  ES6 에서 축약가능한 문법 :::: 속성에 FUNCTION이 붙은경우 생략가능 creted:function() {}
    this.$store.dispatch('FETCH_ASK');
    // fetchAskList()
    //   .then(response => {   // .then(function(response) {
    //     this.asks = response.data;
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   })

    // fetchAskList()
    //   .then()
    //   .catch();
    //   return new Promise() // promise가 리턴된다는것은 그다음에 then을 연결할수 있다는것
  },
  // beforeMount(){  // 주로 created와 beforeMount에 데이터 속성 선언

  // },
  // mounted(){  // mounted 되고나서 데이터를 요청하게 되면

  // },


}
</script>

<style>

</style>