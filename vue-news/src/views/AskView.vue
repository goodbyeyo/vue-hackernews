<template>
  <div>
    <ul class="news-list">
      <li v-for="item in fetchedAsk" class="post">
        <!-- 포인트 영역 -->
        <div class="points">
          {{ item.points}}
        </div> 
        <!-- 기타 정보 영역 -->
        <p class='news-title'>
          <router-link :to="`item/${item.id}`">
            {{ item.title }} 
          </router-link>
        </p>
        <small class="link-text">
           {{item.time_ago}} by 
          <router-link v-bind:to="`/user/${item.user}`">{{ item.user }} </router-link>
        </small>
      </li>
    </ul>
    <!----------------------------------------------------------------------->
    <!-- <p v-for="item in fetchedAsk">
      <router-link :to="`item/${item.id}`"> {{ item.title }} </router-link>
      <small> {{item.time_ago}} by {{ item.user }} </small>
    </p> -->
  </div>
</template>

<script>
// import { fetchAskList } from '../api/index.js';
import { mapState, mapGetters } from 'vuex'
export default {
  computed: { // 계산된 속성으로 state에 접근
  // #4
    ...mapGetters([   // 배열표기법: 변수:문자열로 연결하지않아도 된다
      'fetchedAsk'
    ]), 
  
  // #3 ::: store에 선언한 getters속성의 함수를 가져온다
  // ...mapGetters({    // spread operator
  //   askItems : 'fetchedAsk',  // 객채표기법 변수:문자열(getters의 함수명)
  // })
  
  // #2
  //   ...mapState({
  //     fetchedasks : state => state.asks
  //   })
  
  // #1
  //   // ask() {
  //   //   return this.$store.state.asks;
  //   // }
  },
  created() { //  ES6 에서 축약가능한 문법 :::: 속성에 FUNCTION이 붙은경우 생략가능 creted:function() {}
    // const ashId = item.id;
    this.$store.dispatch('FETCH_ASK', );
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

<style scoped>
.news-list {
  margin: 0;
  padding: 0;
}

.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}

.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;  /* 수직 정렬 */
  justify-content: center; /* 가로 정렬 */
  color: #42b883;
}

.news-title {
  margin: 0;
}

.link-text {
  color: #828282
}

</style>